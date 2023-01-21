const express = require('express')

const fs = require('fs')



const port = 3000

app.get('/', async (req, res) => {

    const {url} = req.query

 const readable = fs.createReadStream(url)


}
app.listen(3000)

    
