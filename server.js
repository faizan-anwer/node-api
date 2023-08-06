console.log('Rayan');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const Product = require('./models/productModel');

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.get('/', (req, res) => {
    res.send('Hello Node API');
})

app.get('/products',async(req, res)=>{
    try {
        const product = await Product.find({});
        res.status(200).json(product);
    } catch(error){
        res.status(500).json({message: error.message});
    }
})

//Update Product ID
app.put('/products/:id',async(req, res)=>{
    const { id } = req.params;
    try{
        const product = await Product.findByIdAndUpdate(id, req.body);
        if(!product){
            return res.status(404).json({message: `not found by id ${id}`});
        }
        const updateProduct = await Product.findById(id);
        res.status(200).json(updateProduct);
    } catch(error){
        res.status(500).json({message: error.message});
    }

})

//delete product ID
app.delete('/products/:id',async(req, res)=>{
    const { id } = req.params;
    try{
        const product = await Product.findByIdAndDelete(id, req.body);
        if(!product){
            return res.status(404).json({message: `not found by id ${id}`});
        }
        // const updateProduct = await Product.findById(id);
        res.status(200).json(product);
    } catch(error){
        res.status(500).json({message: error.message});
    }

})

app.get('/products/:id',async(req, res)=>{
    try {
        const { id } = req.params;
        console.log("Params ======== ",req.params);
        const product = await Product.findById(id);
        res.status(200).json(product);
    } catch(error){
        res.status(500).json({message: error.message});
    }
})

app.post('/products', async(req, res)=>{
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    } catch(error) {
        res.status(500).json({message: error.message})
    }
    console.log('Product body ===', req.body)
    res.send(req.body);
})

app.get('/blog',(req,res)=>{
    res.send('Hello Blog');
})
mongoose.set('strictQuery', false);
mongoose
    .connect('mongodb+srv://admin123:Canada123@develogyapi.tyddffs.mongodb.net/Node-API?retryWrites=true&w=majority')
    .then(()=>{
        console.log('connected to mongodb');
        app.listen(3000, () => {
            console.log('Node API Connected.....')
        })
    })
    .catch((error)=>{
        console.log('error ===>>> ', error);
    })

