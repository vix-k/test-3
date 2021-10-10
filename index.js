const { response } = require('express');
const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));
const express = require('express');
const { request } = require('http');
const { PythonShell } = require('python-shell');

require("dotenv").config();

const app = express();

port = process.env.PORT || 3000;

app.listen(port, ()=> console.log(`listening at ${port}`));
app.use(express.static('public'));
app.use(express.json({limit: '1mb'}));






app.get('/mint/:name', async (request, response)=>{
    const name = request.params.name;
    console.log(name);
    let options = {
        scriptPath : "./pythonFiles",
        args: [name]
    };
    PythonShell.run("test.py",options,async (err,res)=>{
        if(err) console.log(err);
        await res;
        response.json("done");
    })
    

});







  