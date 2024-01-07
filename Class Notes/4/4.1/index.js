const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

app.get('/sum', (req,res)=>{
    var num1 = req.query.num1;
    var num2 = req.query.num2;

    var result = parseInt(num1)+parseInt(num2);
    res.send({
        msg: result
    });
})

app.get('/principal', (req, res)=>{
    var principal = req.query.principal;
    var rate = req.query.rate;
    var time = req.query.time;

    var result = (parseInt(principal)*parseInt(rate)*parseInt(time))/100;
    res.send({
        msg: result
    })
})

app.listen(3000);