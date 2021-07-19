// @desc Get All Tasks
// @route GET /api/v1/tasks

export const getTasks = async (req, res, next) => {
  console.log('getTasks');
  res.status(200).json({ success: true, count: tasks.length, data: tasks });
};

// @desc Create New Task
// @route POST /api/v1/tasks

export const createTasks = async (req, res, next) => {
  let newTask = await req.body;
  console.log(req);
  if (newTask) {
    tasks.push(newTask);
    await res.status(200).json({ success: true, data: newTask });
    console.log('created New task');
  } else {
    await res.status(400).json({ success: false, message: 'Task not created' });
  }
};
