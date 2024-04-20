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

    let group = Group.findById(req.params.id);

    if(!group){
        return res.status(500).json({
            success:false,
            message:"Product not found"
        })
    }

    group = await Group.findByIdAndUpdate(req.params.id, req.body,{
        new:true, 
        runValidators:true, 
        useFindAndModify: false
    });

    res.status(200).json({
        success:true,
        group
    })

}

//get all groups
exports.getAllGroups = async(req, res)=>{

    const group = await Group.find();

    res.status(200).json({
        success:true,
        group
    })
    
    
}