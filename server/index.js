const express = require('express')
const app = express() 
const port = 3000
const path = require('path')

// app.use(express.static(path.join(__dirname,"../","public")))
app.use(express.static(path.join(__dirname,'..', 'build')));

app.get('/*', function(req,res) {
		res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

app.listen(port,()=>{
    console.log(`Local server started on ${port}`)
})