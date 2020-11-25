const mongoose =  require('mongoose');

const VariationSchema = new mongoose.Schema({
    date: {type: Date, default: Date.now},
    price : Number, 
}); 

const ProductSchema = new mongoose.Schema({
    title: String,
    id: String,
    imgsrc: String,
    variation:[VariationSchema]
});



module.exports = mongoose.model('Product',ProductSchema);