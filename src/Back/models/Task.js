const mongoose = require ('mongoose');

const taskSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: { type: String, default: 'todo'},
    boardId: String,
    userId: String,
}, { timestamps: true });

module.exports = mongoose.model('Task', taskSchema);