const express = require('express')
const router = express.Router()

router.use(logger)

router.get('/', (req, res)=>{
  console.log(req.query.name)
  res.send('Users List')
})

router.get('/new', (req, res)=>{
  res.render('users/new')
})

router.post('/', (req, res)=>{
 const isValid = true

 if (isValid){
 users.push({ firstName: req.body.firstName })
 }else{
  console.log('Error')
  res.render('/users/new', { firstName: req.body.firstName })
}

 res.redirect(`/users/${users.length-1}`)
 console.log(req.body.firstName)
 res.send("hi")
})


// *********simple way*********
// router.get('/:id', (req, res)=>{
//   req.params.id
//   res.send(`Get User With Id ${req.params.id}`)
// })

// router.put('/:id', (req, res)=>{
//   req.params.id
//   res.send(`Update User With Id ${req.params.id}`)
// })

// router.delete('/:id', (req, res)=>{
//   req.params.id
//   res.send(`Delete User With Id ${req.params.id}`)
// })

//********much better & queue!  */
  router
  .route('/:id')
  .get( (req, res)=>{
    // console.log(req.user)
    res.send(`Get User With Id ${req.params.id}`)
  }).put( (req, res)=>{
     
      res.send(`Update User With Id ${req.params.id}`)
    }).delete( (req, res)=>{
        
        res.send(`Delete User With Id ${req.params.id}`)
      })

   const users = [{ name: 'Kyle' }, { name: 'Sally' }]   

  router.param('id', (req, res, next, id)=>{
    req.user = users[id]
    next()
  })

  function logger(req, res, next){
    console.log(req.originalUrl)
    next()
  }


module.exports = router