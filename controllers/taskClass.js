import { TaskClass } from '../model/model.js';

// @desc Get All Tasks Classes
// @route GET /api/v1/taskclass

export const getTaskClass = async (req, res, next) => {
    console.log('getTasks');
    res.status(200).json({ success: true, count: tasks.length, data: tasks });
  };

// @desc Create New Task Class
// @route POST /api/v1/taskclass

export const createTaskClass = async (req, res, next) => {
    const newTaskClass = await TaskClass.create({
        taskClass: 'Private',
        description: 'This is my own private class',        
    });
    if(!newTaskClass) {
        return res.status(400).json({ success: false, message: 'Client not found' });
    }
    return res.status('200').json({success: true, message: 'Task Class created successfully', data: newTaskClass});
};
  