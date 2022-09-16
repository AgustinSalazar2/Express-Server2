const User = require('../models/User');
const ctrlUser = {}

//controlador para consultar usuarios:
ctrlUser.getUsers = async(req, res)=>{ //request handler o manejador de peticion
    //realizo una consulta de los usuarios a la DB
    const users = await User.find()
    
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
ctrlUser.putUsers = (req, res)=>{ //request handler o manejador de peticion
    res.json({
        msg: 'PUT - getUsers'
    })
}

//controlador para eliminar usuario:
ctrlUser.deleteUsers = (req, res)=>{ //request handler o manejador de peticion
    res.json({
        msg: 'DELETE - getUsers'
    })
}

module.exports = ctrlUser;