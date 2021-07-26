import mongoose from 'mongoose';
const { Schema } = mongoose;

const client = new Schema({
  userName: {type: String, required: true, unique: true},
  fullName: { type: String, required: true },
  created: { type: Date, default: new Date},
  password: { type: String, required: true},
  token: {type: String, required: true, unique: true},
})

const taskClass = new Schema({
  userName: {type: String, ref: 'client', default: 'Nimit2801'},
  taskClass: {type: String, required: true, unique: true},
  description: String,
  date: { type: Date, default: Date.now, required: true },
});

const task = new Schema({
  userName: {type: String, ref: 'client'},
  taskName:  {type: String, required: true},
  taskClass: {type: mongoose.Schema.Types.ObjectId, ref: 'taskClass', required: true},
  description: String,
  date: { type: Date, default: Date.now, required: true },
  priority: { type: String, default: 'low', required: true },
  dueDate: { type: Date, default: Date.now },
});

export const Client = mongoose.model('Client', client);
export const TaskClass = mongoose.model('TaskClass', taskClass);
export const Task = mongoose.model('Task', task);