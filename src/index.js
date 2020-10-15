const { response } = require('express')
const express = require('express')
const { uuid }= require('uuidv4')

const app = express()

app.use(express.json())

const projects = []


app.get('/projects', (req, res)=>{

    return res.json(projects);

})

app.post('/projects',(req, res) =>{

    const {title, owner} = req.body;

    const project = { id: uuid(), title, owner }

    projects.push(project)

    return res.json(project);
})




app.listen(3333,() =>{
    console.log('Back-end Started 🚀')
})