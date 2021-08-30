const express = require('express');
const mongoose = require('mongoose');
const port = process.env.APP_PORT || 5000
const app = express();


app.use(express.urlencoded({ extended: false }));

// Connect to MongoDB oro
mongoose
  .connect(
    'mongodb://mongo:27017/docker-node-mongo',
    { useNewUrlParser: true }
  )
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.log(err));



app.get('/', (req, res) => {
  res.send("Hola desde node")
});




app.listen(port, () => console.log('Server running...'));