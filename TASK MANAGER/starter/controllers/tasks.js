const Task=require('../models/Task')
const asyncWrapper=require('../middleware/async')
const getAllTasks = async(req, res) => {
  // res.send("all items from task list");

  try{
const tasks=await Task.find({})
res.status(200).json({ tasks })  

}
  catch(err){
res.status(500).json({msg:err})
  }
};

const createTask =async (req, res) => {
  
  try{

    const task=await Task.create(req.body)
    res.status(201).json({task});
  }
  catch(error){

    res.status(500).json({msg:error})
  }
};

const getTask =async (req, res) => {
  // res.json({id:req.params.id});
try{
  const {id:taskID}=req.params
const tasks=await Task.findOne({_id:taskID})


if(!tasks){
  return res.status(404).json({msg:`No task with id: ${taskID}`})
}
res.status(200).json({tasks})
}
catch(err){
  res.status(500).json({msg:err})
  

}
};

const updateTask = async(req, res) => {

  // res.send("update task");

  try{

const {id:taskID}=req.params

const task=await Task.findOneAndUpdate({_id:taskID},req.body,{
  new:true,
  runValidators:true
})



if(!task){
  return res.status(400).json({msg:`No task with id :${taskID}`})
}
res.status(200).json({task})

}

catch(err){

    res.status(500).json({msg:err})

  }

};

const deleteTask =async (req, res) => {

  // res.send("delete task");

  try{
    
    const {id:taskID}=req.params
 const task=await Task.findOneAndDelete({_id:taskID})

if(!task){
  return res.status(400).json({msg:`No task with id :${taskID}`})
}

res.status(200).json({task})
// res.status(200).json({task:null,status:'success'})
}

catch(err){
  res.status(500).json({msg:err})
  
}
};

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
};
