const Group = require("../../modals/Accounting Masters Modal/groupModal");


//CREATE GROUP
exports.createGroup = async(req, res, next)=>{
    const group = await Group.create(req.body);

    res.status(201).json({
        success:true,
        group
    })
}

//UPDATE GROUP
exports.alterGroup = async(req, res, next)=>{

    const {name} = req.params;
    const newData = req.body;

    try{
        const group = await Group.findOne({name});

        if(!group){
            return res.status(404).json({success:false, message:'Group not Found'});
        }

        group.set(newData);
        await group.save();

        res.status(200).json({succes:true, groupId:group._id});
    }catch(err){
        console.error('Error updating the group');
        res.status(500).json({success:false, message:'Internal Server Error'})
    }

};

//get all groups
exports.getAllGroups = async(req, res)=>{

    const group = await Group.find();

    res.status(200).json({
        success:true,
        group
    })
    
}

//GROUP NAMES
exports.getGroupNames = async(req, res)=>{
    try{
        //Fetching names for rightbar
    const groupName = await Group.find({}, 'name');

    const names = groupName.map(group => group.name);

    //send names as response
    res.status(200).json(names);
    }
    catch(err){
        console.log('Error fetching group names', err);
        res.status(500).json({error:'Internal server error'})
    }
};

//GROUP UNDER
exports.getGroupUnder = async(req, res)=>{
    try{
        const groupUnder = await Group.find({}, 'under');

        const under = groupUnder.map(group=>group.under);

        //send under data as response
        res.status(200).json(under);
    }catch(err){
        res.status(500).json({error:'Internal Server error'})
    }
}