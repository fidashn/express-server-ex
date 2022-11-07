const express = require('express')
const router = express.Router()

router.get('/', (req, res)=>{
  res.send('Users List')
})

router.get('/new', (req, res)=>{
  res.send('Users New Form')
})

router.post('/', (req, res)=>{
  res.send('Create User')
})

router.get('/:id', (req, res)=>{
  // res.send('Create User')
})



module.exports = router