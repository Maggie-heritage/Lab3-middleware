const express = require('express');
const app =express();
const path = require('path');
const PORT = 9000;
const middleware = (req,res,next)=>
{
    req.login = {user:null};    
    if (req.query != null)
    {
        if (req.query.uname != null)
        {
            req.login.user =  req.query.uname.trim().toLowerCase();
        }
    };
    console.log(req.login);
    next();
};
app.use(middleware);
app.get('/',(req,res)=>
{
    res.send('<h1>welcome🎁🎄🎨🛒🥎🏀🧩📞 to this site</h1>');    
});
app.listen (PORT, ()=>console.log (`This app is using PORT ${PORT}!`));