const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 8080
const collegeModels = require('./schema.js');
require ('./connector.js');
// Parse JSON bodies (as sent by API clients)
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
const { connections } = require('mongoose');

// app.get('/findColleges',async(req,res)=>{
//     try{
//       const data = await collegeModels.find();
//       res.status(200).send(data);
//     }catch(err){
//         res.sendStatus(404);
//     }
// })

app.get('/findColleges',async(req,res)=>{
    try{
        if(req.query.name){
        let name = req.query.name;
      let nameL =   name.toLowerCase();
       console.log(nameL);
      const data = await collegeModels.find({name:{$regex:nameL,'$options' : 'i'}});
     // console.log(data);
      res.status(200).send(data);
    
}else if(req.query.state){
    let state = req.query.state;
    let stateL =   state.toLowerCase();
     console.log(stateL);
    const data = await collegeModels.find({state:{$regex:stateL,'$options' : 'i'}});
   // console.log(data);
    res.status(200).send(data);
}else if(req.query.city){
    let city = req.query.city;
    let cityL =   city.toLowerCase();
     console.log(cityL);
    const data = await collegeModels.find({city:{$regex:cityL,'$options' : 'i'}});
   
    res.status(200).send(data);
}else if(req.query.minPackage){
    let pkg = req.query.minPackage;
   
     console.log(pkg);
     if(pkg>0){
    const data = await collegeModels.find({minPackage:{$gte:pkg}});
   res.status(200).send(data);
     }else{
         res.status(500).send('invalid package');
     }
}else if(req.query.maxFees){
    let fees = req.query.maxFees;
   
    console.log(fees);
    if(fees>0){
   const data = await collegeModels.find({maxFees:{$lte:fees}});
  
   res.status(200).send(data);
    }else{
        res.status(500).send('invalid package')
    }
}else if(req.query.course){
    let course = req.query.course;
    let courseL =   course.toLowerCase();
     console.log(courseL);
    const data = await collegeModels.find({course:{$regex:courseL,'$options' : 'i'}});
   
    res.status(200).send(data);
}else if(req.query.exam){
    let exam = req.query.exam;
    let examL =   exam.toLowerCase();
     console.log(examL);
    const data = await collegeModels.find({exam:{$regex:examL,'$options' : 'i'}});
   
    res.status(200).send(data);
}else {
    const data = await collegeModels.find();
           res.status(200).send(data);
}



 } catch(err){
        res.sendStatus(404);
    }


})

app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;