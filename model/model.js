import mongoose from 'mongoose';
const { Schema } = mongoose;

const client = new Schema({
  userName: {type: String, required: true, unique: true},
  providerId: {type: String, required: false, unique: true},
  fullName: { type: String, required: true },
  created: { type: Date, default: new Date},
  password: { type: String},
  taskClasses: [taskClass],
  // token: {type: String, required: true, unique: true},
})

const taskClass = new Schema({
  // token: {type: String, required: true},
  // userName: {type: String, ref: 'client'},
  taskClass: {type: String, required: true},
  tasks: [task],
  description: String,
  date: { type: Date, default: Date.now, required: true },
});

const task = new Schema({
  // userName: {type: String, ref: 'client'},
  // taskClass: {type: String, ref: 'taskClass', required: true},
  taskName:  {type: String, required: true},
  description: String,
  isCompeted: {type: Boolean, default: false, required: true },
  date: { type: Date, default: Date.now, required: true },
  priority: { type: String, default: 'low', required: true },
  dueDate: { type: Date, default: Date.now },
});


export const Client = mongoose.model('Client', client);
// export const TaskClass = mongoose.model('TaskClass', taskClass);
// export const Task = mongoose.model('Task', task);