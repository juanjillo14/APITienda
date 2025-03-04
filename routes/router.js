const exp = require('express');
const router = exp.Router();
const modeloProducto = require('../src/models/producto.models')

router.get('/products', async (req, res) => {
    let resultado = await modeloProducto.find();
    res.status(200).json(resultado);
})

router.get('/productos', async (req,res)=>{
    let resultado = await modeloProducto.find({});
    if(resultado)
        res.status(200).json({resultado});
    else
        res.statusCode(404).json({"mensaje" : "Hubo un error"});
    
});

router.get('/productos/:ref', async (req, res) => {
    let resultado = await modeloProducto.findOne({"referencia":req.params.ref});
    res.status(200).json(resultado);
})

router.get('/productos/:ref', async (req,res)=>{
    let resultado = await modeloProducto.findOne({"referencia":req.params.ref});
    if(resultado){
        res.status(200).json(resultado);
    }else{
        res.status(404).json({"mensaje": "Producto no encontrado"});
    }
});

router.post('/productos', async (req,res,)=>{
    const resultado ={
        referencia: req.body.referencia,
        nombre: req.body.nombre,
        precio: req.body.precio
    };
    let Insercion= await modeloProducto.create(resultado);
    if(Insercion){
        res.json({"mensaje":"registro existoso"});
    }else{
        res.json({"mensaje" : "Hubo un error"});
    }
});

router.put('/productos/:ref', async (req,res)=>{
    const productoEditado = {
        referencia: req.body.referencia,
        nombre: req.body.nombre,
        precio: req.body.precio
    };
let Actualizacion = await modeloProducto.findOneAndUpdate({referencia:req.params.ref},productoEditado);
if(Actualizacion)
    res.json({"mensaje":"actualización exitosa"});
else
    res.json({"mensaje" : "Hubo un error"});
});

router.delete('/productos/:ref', async (req,res)=>{
    console.log(req.params.id , req.body.referenciaProducto)
    if(eliminacion)
        res.json({"mensaje":"Eliminación exitosa"});
    else
    res.json({"mensaje" : "Hubo un error"});
});
module.exports = router;