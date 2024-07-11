const express = require ('express');
const mysql = require ('mysql');
const cors = require ('cors');

const app = express()
app.use(cors())

const db= mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'ecommerce'
})

app.get('/',(req,res)=>{

    return res.json('from backend');
})

app.get('/users',(req,res)=>{
    const sql='SELECT * FROM users';
    db.query(sql,(err,data)=>{
        if(err) return res.json(err);
        return res.json(data);
    })
})

app.listen(8000,()=>{
    console.log('listening');
})


































// const express = require('express');
// const connectDB = require('./config/db');
// const dotenv = require('dotenv');
// const cors = require('cors');

// dotenv.config();

// const app = express();

// // Connect to the database
// connectDB();

// // Middleware
// app.use(cors());
// app.use(express.json({ extended: false }));

// // Define routes
// app.use('/api/auth', require('./routes/authRoutes'));

// const PORT = process.env.PORT || 5000;

// app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
