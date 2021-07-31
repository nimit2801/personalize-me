import { TaskClass, Client } from '../model/model.js';


// @desc Get All Tasks Classes
// @route GET /api/v1/taskclass
// @access private

export const getTaskClasses = async (req, res, next) => {
    let client = await Client.findOne({token: req.headers.token});
    if(!client) {
        return res.status(401).json({ success: false, message: 'Invalid Token Passed' });
    }
    let userName = await client.userName;
    let taskClasses = await TaskClass.find({userName: userName});
    res.status(200).json({ success: true, count: taskClasses.length, data: taskClasses});
};

// @desc Create New Task Class
// @route POST /api/v1/taskclass
// @access private
export const createTaskClass = async (req, res, next) => {
    let client = await Client.findOne({token: req.headers.token});
    if(!client) {
        return res.status(401).json({ success: false, message: 'Invalid Token Passed' });
    }
    let userName = await client.userName;
    const newTaskClass = await TaskClass.create({
        userName,
        taskClass: req.body.taskClass,
        description: req.body.description,
    });
    if(!newTaskClass) {
        return res.status(400).json({ success: false, message: 'Client not found' });
    }
    return res.status('200').json({success: true, message: 'Task Class created successfully', data: newTaskClass});
};
  
// @desc Delete one Task Class
// @route DELETE /api/v1/taskclass
// @access private

export const deleteTaskClass = async (req, res, next)  => {
    let client = await Client.findOne({token: req.headers.token});
    if(!client) {
        return res.status(401).json({ success: false, message: 'Invalid Token Passed' });
    }
    let userName = await client.userName;
    let taskClass = await TaskClass.findOneAndDelete({userName, taskClass: req.body.taskClass});
    if(!taskClass) {
        return res.status(400).json({ success: false, message: 'Task Class not found' });
    }
    return res.status(200).json({success: true, message: 'Task Class deleted successfully'});
}