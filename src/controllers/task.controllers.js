const task = require('../models/Task');

const ctrlTask = {};

//controlador para consultar tareas:
ctrlTask.getTasks = async(req, res)=>{
    //realizo una consulta de las tareas en la DB
    const tasks = await task.find({active: true})
    
    res.json(tasks);
}

//controlador para crear una nueva tarea
ctrlTask.postTasks = async (req, res)=>{
    const { title, description, state, date } = req.body;

    //se crea la nueva tarea
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

ctrlTask.putTasks = async (req, res) =>{
    
    try {
        const id = req.params.id
        const {title, description, state} = req.body

        const taskUpdate = await task.findByIdAndUpdate(id, {title, description, state})
        return res.json({
            msg: "Tarea actualizada correctamente"
        });

    } catch (err) {
        console.log(err)
        return res.json('Error al modificar la tarea')
    }

}


// //Eliminacion Directa
// ctrlTask.deleteTasks = async (req, res) =>{
//     const id = req.params.id
//     try {
//         await task.findByIdAndDelete(id)
//         return res.json('Tarea eliminada correctamente')

//     } catch (err) {
//         console.log(err)
//         return res.json('Error al eliminar la tarea')
//     }

// }

//Eliminacion Logica
ctrlTask.deleteTasks = async (req, res) =>{
    const id = req.params.id
    try {
        await task.findByIdAndUpdate(id, {active: false})
        return res.json('Tarea eliminada correctamente')

    } catch (err) {
        console.log(err)
        return res.json('Error al eliminar la tarea')
    }
}

module.exports = ctrlTask;