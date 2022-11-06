const express = require('express');
const app = express()

app.get('/', (req, res)=>{
  console.log('here')
  res.sendStatus(500)
})

app.listen(3000)