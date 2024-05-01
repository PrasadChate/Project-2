const catchAsyncErrors = require("../../middleWare/catchAsyncErrors");
const Group = require("../../modals/Accounting Masters Modal/groupModal");
const ErrorHandler = require("../../utils/errorhander");


//CREATE GROUP
exports.createGroup = catchAsyncErrors (async(req, res, next)=>{
    const group = await Group.create(req.body);

    res.status(201).json({
        success:true,
        group
    })
});


//UPDATE GROUP
exports.alterGroup = catchAsyncErrors(async(req, res, next)=>{
    let group = await Group.find(req.params.name);

    if(!group){
        return next(new ErrorHandler("Group not found", 404));
    }

    group = await Group.findByIdAndUpdate(req.params.id, req.body, {
        new:true, 
        runValidators:true,
        useFindAndModify:false,
    });

    res.status(200).json({
        success:true,
        group
    })
})

//get all groups
exports.getAllGroups = catchAsyncErrors(async(req, res)=>{

    const group = await Group.find();

    if(!group){
        return next(new ErrorHandler("Groups not found", 404))
    }

    res.status(200).json({
        success:true,
        group
    })   
})

//GROUP NAMES
exports.getGroupNames = catchAsyncErrors(async(req, res)=>{
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
});

//GROUP UNDER
exports.getGroupUnder = catchAsyncErrors(async(req, res)=>{
    try{
        const groupUnder = await Group.find({}, 'under');

        const under = groupUnder.map(group=>group.under);

        if(!under){
            return next(new ErrorHandler("Group under category not found", 404))
        }

        //send under data as response
        res.status(200).json(under);
    }catch(err){
        res.status(500).json({error:'Internal Server error'})
    }
});

//GROUP DELETE
exports.deleteGroup = catchAsyncErrors(async(req,res, next)=>{
    const group = await Group.find({}, 'name');

    if(!group){
        return next(new ErrorHandler("Group not Found"))
    }

    await group.remove();
    res.status(200).json({
        success:true,
        message:"Group deleted Successfully"
    })
})

exports.getGroupDetails = catchAsyncErrors(async(req, res, next)=>{
    const group = await Group.find(req.params.name);

    if(!group){
        return next(new ErrorHandler("Group not Found", 404))
    }

    res.status(200).json({
        success:true,
        group
    })
})