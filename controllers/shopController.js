const model = require('../models/shopModels');

exports.index = (req, res)=>{
    let items = model.getSortedItems(); 
    
    try{
        const query = req.query.search.toLowerCase();
        console.log('Query: ' + query);
        items = items.filter(item => item.title.toLowerCase().includes(query));        
    }
    catch{
        
    }
        
    res.render('./shop/items', {items});
};

exports.new = (req, res)=>{
    res.render('./shop/new');
};

exports.create = (req, res)=>{
    console.log('controller.create');
    console.log('req body: ' + req.body.title);
    let item = req.body;
    console.log("item: " + item.id + ", " + item.title);
    
    model.save(item);
    res.redirect('/shop');
};


//GET /items/:id: send details of item identified by id
exports.show = (req, res, next)=>{
    let id = req.params.id;
    let item = model.findById(id)
    if(item){
        console.log('1');
    res.render('./shop/item', {item});
    console.log('2');
    } else{
        let err = new Error('Cannot find an item with id ' + id) ;
        err.status = 404;
        next(err);
    }
};

exports.delete = (req, res, next)=>{
    let id = req.params.id;
    if(model.deleteById(id)){
        let items = model.getSortedItems(); 
        res.render('./shop/items', {items});
    }else{
    let err = new Error('Cannot find a item with id ' + id) ;
    err.status = 404;
    next(err);
    }
};


exports.edit = (req, res, next)=>{
    let id = req.params.id;
    let item = model.findById(id)
    if(item){
        res.render('./shop/edit', {item});
        }else{
            let err = new Error('Cannot find an item with id ' + id) ;
        err.status = 404;
        next(err);
    }
};