const mongoose = require('mongoose');
const Task = mongoose.model('Tasks');

exports.list_all_tasks = function(req,res){
    Task.find({}, function(err,task){
        if(!err){
            res.json(task);
        }
        res.send(err);
        
    });
};
exports.create_a_task = function(req, res){
    var newTask = new Task(req.body);
    newTask.save(function(err,task){
        if(!err){
            res.json(task);
        }
        res.send(err);
    });
};

exports.read_task = (req,res) => {
    Task.findById(req.params.taskId, (err,task)=>{
        if(!err){
            res.json(task);
        }
        res.send(err);
    });
};

exports.update_task = (req,res)=>{
    Task.findOneAndUpdate({_id:req.params.taskId}, req.body,{new:true}, (err,task)=>{
        if(!err){
            res.json(task);
        }
        res.send(err);
    });
};

exports.delete_task = (req,res) => {
    Task.remove({
        _id: req.params.taskId
    }, (err, task)=>{
        if(!err){
            res.json({message:'Task Deleted Successfully'});
        }
        res.send(err);
    });
};