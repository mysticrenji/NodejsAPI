const Joi = require('joi');
const express= require('express');
const app =express();

app.use(express.json());

const courses = [
    {id:1, name:'course 1'},
    {id:2, name:'course 2'},
    {id:3, name:'course 3'}
];

app.get('/', (req,res) => {
    res.send('Hello word');
});

app.get('/api/courses',(req,res)=>{

res.send([1,2,2,3,4])
});

app.get ('/api/posts/:month/:year', (req,res)=> {
    res.send(req.params);
});

app.post('/api/courses/', (req,res) =>{
const schema ={
    name:Joi.string().min(3).required()
};

const result = Joi.validate(req.body,schema);
console.log(result);

    const course= {
        id:courses.length+2,
        name: req.body.name
    };
    courses.push(course);
    res.send(course);
})

const port = process.env.PORT|| 3000
app.listen(port,()=> console.log('Listening'))
//app.post();
//app.put();
