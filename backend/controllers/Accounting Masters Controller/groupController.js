const Group = require("../../modals/Accounting Masters Modal/groupModal");


//CREATE GROUP
exports.createGroup = async(req, res, next)=>{
    const group = await Group.create(req.body);

    res.status(201).json({
        success:true,
        group
    })
}

exports.getAllGroups = (req, res)=>{
    res.status(200).json({message:"Route is working fine"})
}