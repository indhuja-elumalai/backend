const express = require('express');
// const mongoose = require('mongoose');
const app = express();
// const PORT = 3000;


//middleware
app.use(express.json());


// const ProfileSchema = new mongoose.Schema({
//     username: String,
//     email: String,
//     password: String
//   });

// const User = mongoose.model('User', ProfileSchema);

//endpoints

// login

app.post('/login', (req, res) => {
    const { name,email,password } = req.body;
  
    if (!email) {
      return res.status(400).json({ message: 'email cannot be empty' });
    }
  
    if (!password) {
      return res.status(400).json({ message: 'password cannot be empty' });
    }
  
    const newUser = new {name,email,password};
  
    newUser.save()
      .then(saved => res.status(201).json({ message: 'Success', post: saved }))
      .catch(err => res.status(500).json({ message: 'Failure', error: err.message }));
  });
//server run
app.listen(3000 , ()=>{
    console.log(`Server is running at http://localhost:3000`)
});