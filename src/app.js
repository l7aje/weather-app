
const path=require('path')
const express=require('express');
const hbs=require('hbs');
const forcast=require('./utils/forecast');




const app = express();
const port = process.env.PORT || 3000
//Paths
const publicPath=path.join(__dirname,'../public')
const viewsPath=path.join(__dirname,'../templates/views');
const partialsPath=path.join(__dirname,'../templates/partials');

//seting
app.use(express.static(publicPath));
app.set('view engine','hbs');
app.set('views',viewsPath);
hbs.registerPartials(partialsPath);

//getiing
app.get('',(req,res) => {
    res.render('index',{
        title:'Weather app',
        name:'Boulhend brahim',
    })
}); 
app.get('/weather',(req,res) => {
    const address=req.query.address;
    if(!address){
        return res.send({
            error:'no result you mus specify an address'
        }) 

    }
    forcast(address).then(response => {
        res.send({
            desc:`The weather in ${address} is ${response}`
        }) 
    })
    
    
}); 
app.get('/about',(req,res) => {
    res.render('about',{
        title:'About',
        name:'Boulhend brahim'
    })
}); 

app.get('/products',(req,res) => {
    if(!req.query.search){
        return res.send({
            error:'You must sepicify an item'
        })
    }
    res.send({
        products:req.query.search
    })
}); 
app.get('/help',(req,res) => {
    res.render('help',{
        title:'Help',
        name:'Boulhend brahim'
    })
});
app.get('/help/*',(req,res) => {
    res.render('404',{
        title:'404',
        error:'Article not found',
        name:'Boulhend brahim'
    })
});  






app.get('*',(req,res) => {
    res.render('404',{
        title:'404',
        error:'Page not found',
        name:'Boulhend brahim'
    })
})



app.listen(port,() => console.log(`Server is up on port ${port}`))
