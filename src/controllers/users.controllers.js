const User = require('../models/User');
const ctrlUser = {}

//controlador para consultar usuarios:
ctrlUser.getUsers = async(req, res)=>{ //request handler o manejador de peticion
    //realizo una consulta de los usuarios a la DB
    const users = await User.find({active: true})
    
    res.json(users);
}

//controlador para crear un nuevo usuario
ctrlUser.postUsers = async (req, res)=>{
    const { name, email, password } = req.body;

    //se crea el nuevo usuario
    const nuevoUsuario = new User({
        name,
        password,
        email
    })

    const usuario = await nuevoUsuario.save();

    return res.json({
        message: 'Usuario cargado correctamente',
        usuario
    })

}

//controlador para actualizacion de usuarios:
ctrlUser.putUsers = async (req, res)=>{ //request handler o manejador de peticion
    try {
        const id = req.params.id_user
        const {name, email, password} = req.body
        const userUpdate = await User.findByIdAndUpdate(id, {name, email, password})

        return res.json({
            msg: "Usuario actualizado correctamente",
            userUpdate
        });
    } catch (error) {
        console.log(error)
        return res.json('Error al modificar el usuario')
    }

}

//controlador para eliminar usuario de manera "logica":
ctrlUser.deleteUsers = async (req, res)=>{ //request handler o manejador de peticion
    try {
        const id = req.params.id_user
        
        await User.findByIdAndUpdate(id, {active: false})
        return res.json('Usuario eliminado correctamente')
        
    } catch (error) {
        console.log(error)
        return res.json('Error al eliminar el usuario')
    }
    
}

module.exports = ctrlUser;