import { Task, Client } from "../model/model.js";
import {auth} from "../auth/auth.js";
// @desc Get All Tasks from task class
// @route GET /api/v1/tasks

export const getAllTasksOfTaskClass = async (req, res, next) => {
  if(await auth(req, res)){
    console.log('getAllTasks from the Task Class');
    console.log(req.params);
    const {userName, TaskClass} = req.params;
    const tasks = await Task.find({TaskClass, userName});
    if(!tasks){
      return res.status(404).json({success: false, data: 'No Tasks found'})
    } 
    console.log(tasks);
    res.status(200).json({ success: true, count: tasks.length, data: tasks });
  }else{
    return res.status('401').json({success: false, data: 'not authenticated'})
  } 
};

// @desc Get All Tasks
// @route GET /api/v1/tasks/:userName

export const getAllTasksOfUser = async (req, res, next) => {
  if(await auth(req, res)){
    console.log('getAllTasks');
    console.log('params: ', req.params);
    const {userName} = req.params;
    console.log(userName);
    const tasks = await Task.find({userName: userName});
    if(!tasks){
      return res.status(404).json({success: false, data: 'No Tasks found'})
    } 
    console.log(tasks);
    return res.status(200).json({ success: true, count: tasks.length, data: tasks });
  }else{
    return res.status('401').json({success: false, data: 'not authenticated'})
  } 
};

// @desc Create New Task
// @route POST /api/v1/tasks

export const createTask = async (req, res, next) => {
  if(await auth(req, res)){
    let {taskName} = await req.body;
    console.log(taskName);
    let task = await Task.findOne({taskName});
    if(task){
      return res.status('200').json({success: false, data: 'The task already exists'})
    }
    let newTask = await req.body;
    newTask.userName = await req.params.userName
    if (newTask) {
      const task = await Task.create(newTask);
      await res.status(200).json({ success: true, data: task});
      console.log('created New task');
    } else {
      await res.status(400).json({ success: false, message: 'Task not created' });
    }
  }else{
    return res.status('401').json({success: false, data: 'not authenticated'})
  } 
};


// @desc Get Single Task
// @route DELETE /api/v1/tasks

export const getSingleTask= async (req, res, next) => {
  const id = req.body;
  if(await auth(req, res)){
    const task = await Task.findOneAndDelete({userName, _id:id});
    if(!tasks){
      return res.status(404).json({success: false, data: 'No Tasks found'})
    } 
    console.log(tasks);
    return res.status(200).json({ success: true, data: `${tasks.taskName} was deleted` });
  }else{
    return res.status('401').json({success: false, data: 'not authenticated'})
  } 
}

// @desc Delete Single Task
// @route DELETE /api/v1/tasks

export const deleteSingleTask = async (req, res, next) => {
  if(await auth(req, res)){
    const {userName, token} = await req.params;
    const taskName = await req.body.taskName;
    const client = Client.findOne({usename: userName, token: token})
    if(!client){
      return res.status(401).json({success: false, data: 'client not found!'});
    }
    const task = await Task.findOneAndDelete({taskName: taskName, token: token});
    if(!task){
      return res.status(404).json({success: false, data: 'No Tasks found'})
    } 
    console.log(task);
    return res.status(200).json({ success: true, data: `${task.taskName} was deleted` });
  }else{
    return res.status('401').json({success: false, data: 'not authenticated'})
  } 
}