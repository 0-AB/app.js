const express = require('express')
const fs = require('fs')
const port = 3000

app.get('/', (req, res) => {
    const {url} = req.query
    const readable = fs.createReadStream(url)
})
app.listen(port, () => {
    console.log('listening on port ' + port)
})
