const express = require('express');
const app = express()

app.set('view engine', 'ejs')

app.use(express.static('public'))
app.use(express.urlencoded({extended: true}))
app.use(express.json())


// app.get('/', (req, res)=>{
//   console.log('here')
//   res.render('index', {text: 'world'})
// })

const userRouter = require('./routes/users')

app.use('/users', userRouter)



app.listen(3000)