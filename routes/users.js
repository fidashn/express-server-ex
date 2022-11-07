const express = require('express')
const router = express.Router()

app.get('/users', (req, res)=>{
  res.send('Users List')
})

app.get('/users/new', (req, res)=>{
  res.send('Users New Form')
})