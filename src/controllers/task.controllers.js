const task = require('../models/Task');

const ctrlTask = {};

//controlador para consultar tareas:
ctrlTask.getTasks = async(req, res)=>{
    //realizo una consulta de las tareas en la DB
    const tasks = await task.find()
    
    res.json(tasks);
}

//controlador para crear un nuevo usuario
ctrlTask.postTasks = async (req, res)=>{
    const { title, description, state, date } = req.body;

    //se crea el nuevo usuario
    const nuevatarea = new task({
        title,
        description,
        state,
        date
    })

    const tarea = await nuevatarea.save();

    return res.json({
        message: 'Tarea cargada correctamente',
        tarea
    })

}

module.exports = ctrlTask;