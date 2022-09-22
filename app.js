const express= require('express');
const app=new express();
const PORT=3000;

app.get('/',(req,res)=>{
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <title>AWS DevOps</title>
    </head>
    <body>
        <div style="text-align: center;">
            <h2>Welcome to AWS DevOps</h2>
            <hr>
            <P>This is testing website for AWS DevOps Pipeline.</P>
        </div>
        
    </body>
    </html>`)
})

app.listen(PORT,(err)=>{
    console.log(`Server is listening on ${PORT}`);
})