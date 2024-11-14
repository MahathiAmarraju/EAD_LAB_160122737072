const express = require('express')
const app = express()
const jwt = require('jsonwebtoken')
app.use(express.json())
require('dotenv').config()
const posts = [
    {name:"CBIT",
    title : "welcome to CBIT"},
    {name:"MGIT",
    title : "welcome to MGIT"},
    {name:"VJIT",
    title : "welcome to VJIT"},
]
const authenticateToken = (req,res,next) => {
    const authHeader = req.headers['authorization']
    const token = authHeader && authHeader.split(' ')[1]
    if (!token) return res.sendStatus(401)
    jwt.verify(token, process.env.ACCESS_TOKEN , (err,user) => {
        if (err){
            return res.sendStatus(403)
        }
        req.user = user
        next()
})
}
app.post('/login',(res,req) => {
    const username = req.user.name
    const user = {name: username}
    const accessToken = jwt.sign(user , process.env.ACCESS_TOKEN)
    res.json( {sccessTokenis : accessToken})
})
app.use(authenticateToken)
app.get('/posts', (req,res) => {
    console.log(req.user.name)
    res.json(posts.filter(post => post.name === req.user.name))
})
app.listen(3000)
