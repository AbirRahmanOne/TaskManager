const Task = require('../models/task');

// Get all task list (max_3)
const task_list = async (req, res) =>{

    const filter = { status: "active"} ;

    await Task.find(filter)
        .select({
            _id: 0,
            date: 0,
        })
        .limit(3)
        .exec( (err, data)=>{
            if(!err){
                res.status(200).json({
                    result: data,
                })
            }
            else{
                res.status(500).json({
                    message: "There was a server side errors!",
                })
            }

    });
    
}

// return details of {id}
const task_details = async (req, res) =>{

    const filter = { _id: req.params.id } ;


    try {
        const data =  await Task.find(filter) ;

        res.status(200).json({
            result: data ,
        })
        
    } catch (err) {
        res.status(500).json({
            error: "There was a server side errors!",
        })
    }

}

const task_create = async (req, res) =>{
    try {
        const task = new Task(req.body) ;
        await task.save() ;
        res.status(201).json({
            message: 'Task Created Successfully.'
        })
    } catch (err) {
        res.status(500);
        res.json({
            error: 'There was server side problem' 
        });
    }
}

const task_creates = async (req, res) => {
    try {
        await Task.insertMany(req.body);
        res.status(201) ;
        res.json({
            message: 'All Task created successfully...'
        })
        
    } catch (err) {
        res.status(500);
        res.json({
            error: 'There was server side problem' 
        });
    }
}

// update tasks 
const task_update = async (req, res) =>{ 
    // create a filter for a task to update

    try {
        const filter = { _id: req.params.id }
        const updateData = {
            $set:{
                status: 'active'
            }
        }
        const options = { new:true, upsert: false};

        const result = await Task.findByIdAndUpdate(filter, updateData, options) ;
        res.status(200);
        res.json({
            message: 'Task updated successfully'
        })
        console.log(result);

    } catch (err) {
        res.status(500);
        res.json({
            error: 'There was server side problem' 
        });
    }
    

}

const task_delete = async (req, res)=>{

    try {
        filter = { _id: req.params.id };
      
        
        await Task.deleteOne(filter) ;
        res.status(201).json({
            message: 'Task Deleted!',
        })
    } catch (err) {
        res.status(500).json({
            
            error: `There was a server side errors! with ${err}`,
        })
    }
    



}

module.exports = {
    task_list,
    task_details,
    task_create,
    task_creates,
    task_update,
    task_delete
}

