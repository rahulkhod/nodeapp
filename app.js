const express= require('express');
const app=new express();
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
            <P>This is testing website for AWS DevOps Pipeline created by sai_nammi.</P>
            <p>DevOps is awsome!</p>
        </div>
        
    </body>
    </html>`)
})
app.listen(process.env.PORT||5000);
