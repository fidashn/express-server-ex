const express = require('express')
const router = express.Router()

router.get('/users', (req, res)=>{
  res.send('Users List')
})

router.get('/users/new', (req, res)=>{
  res.send('Users New Form')
})