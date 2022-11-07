const express = require('express');
const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res)=>{
  console.log('here')
  res.render('index', {text: 'world'})
})

const userRouter = require('./routes/users')

app.use('/users', userRouter)

function logger(req, res, next){
  console.log(req.originalUrl)
}

app.listen(3000)