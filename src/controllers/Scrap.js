const Scrap = require('../scraper');
const Product = require('../models/Product');

module.exports={

    async store(req,res){
        const {url,id} = req.body;  
        const data = await Scrap(url);
        const {title, imgsrc, price} = data; 

        let product = await Product.findOne({id:id});

        if(!product){
            product = await Product.create({title,imgsrc,id});
        }

        return res.json({title, imgsrc, price});
    }

}