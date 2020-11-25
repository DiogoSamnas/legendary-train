const Product = require('../models/Product');

module.exports={

    async index(req,res){
        const product = await Product.find();

        return res.json(product);
    },

    async store(req,res){
        const { title,imgsrc,id } = req.body;

        let product = await Product.findOne({id:id})

        if(!product){
            product = await Product.create({title,imgsrc,id});
        }


        return res.json(product);
    }
}