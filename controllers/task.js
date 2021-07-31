import { Task } from "../model/model.js";

// @desc Get All Tasks from task class
// @route GET /api/v1/tasks

export const getAllTasksOfTaskClass = async (req, res, next) => {
  console.log('getAllTasks from the Task Class');
  const {userName, TaskClass} = req.params;
  const tasks = await Task.find({TaskClass, userName});
  if(!tasks){
    return res.status(404).json({success: false, data: 'No Tasks found'})
  } 
  console.log(tasks);
  res.status(200).json({ success: true, count: tasks.length, data: tasks });
};

// @desc Get All Tasks
// @route GET /api/v1/tasks

export const getAllTasksOfUser = async (req, res, next) => {
  console.log('getAllTasks');
  const {userName, TaskClass} = req.params;
  const tasks = Task.find({userName});
  if(!tasks){
    return res.status(404).json({success: false, data: 'No Tasks found'})
  } 
  console.log(tasks);
  return res.status(200).json({ success: true, count: tasks.length, data: tasks });
};

// @desc Create New Task
// @route POST /api/v1/tasks

export const createTask = async (req, res, next) => {
  let newTask = await req.body;
  if (newTask) {
    const task = await Task.create(newTask);
    await res.status(200).json({ success: true, data: task});
    console.log('created New task');
  } else {
    await res.status(400).json({ success: false, message: 'Task not created' });
  }
};


// @desc Get Single Task
// @route DELETE /api/v1/tasks

export const getSingleTask= async (req, res, next) => {
  const id = req.body;
  const task = await Task.findOneAndDelete({userName, _id:id});
  if(!tasks){
    return res.status(404).json({success: false, data: 'No Tasks found'})
  } 
  console.log(tasks);
  return res.status(200).json({ success: true, data: `${tasks.taskName} was deleted` });
}

// @desc Delete Single Task
// @route DELETE /api/v1/tasks

export const deleteSingleTask = async (req, res, next) => {
  const id = req.body;
  const task = await Task.findOneAndDelete({userName, _id:id});
  if(!tasks){
    return res.status(404).json({success: false, data: 'No Tasks found'})
  } 
  console.log(tasks);
  return res.status(200).json({ success: true, data: `${tasks.taskName} was deleted` });
}