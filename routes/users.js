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
  router.route('/:id').get('/:id', (req, res)=>{
    req.params.id
    res.send(`Get User With Id ${req.params.id}`)
  }).put('/:id', (req, res)=>{
      req.params.id
      res.send(`Update User With Id ${req.params.id}`)
    }).delete('/:id', (req, res)=>{
        req.params.id
        res.send(`Delete User With Id ${req.params.id}`)
      })

  router.param('id', (req, res, next, id)=>{
    
  })


module.exports = router