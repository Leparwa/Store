const express=require('express');
const path=require('path');
const app=express();
app.use(express.static(__dirname+'/easy-limited-ecommerce'));
app.get('/*',function(req,res){
    res.sendFile(path.join(__dirname+'/dist/easy-limited-ecommerce/index.html'));});
    app.listen(process.env.PORT || 8080);