const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const dotenv = require('dotenv')
dotenv.config()
const app = express();

// import routes
const postRoutes_Create_1 = require('./routes/Create_1_Route');


// app middleware
app.use(bodyParser.json());
app.use(cors());

app.use(postRoutes_Create_1);



const PORT =8000;

const DB_URL = process.env.DB_URI;


mongoose.connect(DB_URL,{
    useNewUrlParser: true,
    useUnifiedTopology:  true
})
.then(()=>{
    console.log('DB is connected');
})
.catch((err)=>console.log('DB connection err',err));


app.listen(PORT, ()=>{
    console.log(`App is running on ${PORT}`);
});