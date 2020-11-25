const express = require('express');
const ProductController = require('./controllers/ProductController');
const Scrap = require('./controllers/Scrap');

const routes = express.Router();



routes.get('/',(req,res)=>{
    return res.json('Welcome stranger!');
});



routes.post('/postproduct', ProductController.store);

routes.get('/listproduct', ProductController.index);

routes.post('/scrap', Scrap.store);


// req.body = Acessar corpo da requisição {para criação, edição}


// routes.post('/', (req,res) => {
//     return res.json({message:"Hello Helena!!!"}); 
// });



// req.params = Acessar route params {para edição,delete}
// routes.put('/users/:id', (req,res) => {
//     return res.json({id :req.params.id});  
// });


// req.query Acessar query params {para filtros} 
// routes.get('/users/', (req,res) => {
//     return res.json({idade :req.query.idade}); 
// });

module.exports = routes;