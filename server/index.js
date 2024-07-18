const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const EmployeeModel = require('./models/Employee');
const ContactModel = require('./models/Contact');

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect('mongodb://127.0.0.1:27017/employee', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => console.log('Connected to MongoDB'))
  .catch(err => console.error('Could not connect to MongoDB...', err));

app.post('/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await EmployeeModel.findOne({ email });
    if (user) {
      if (user.password === password) {
        res.json('success');
      } else {
        res.json('the password is incorrect');
      }
    } else {
      res.json('no records exists');
    }
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/register', async (req, res) => {
  try {
    const newEmployee = await EmployeeModel.create(req.body);
    res.json(newEmployee);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.post('/contact', async (req, res) => {
  try {
    const newContact = await ContactModel.create(req.body);
    res.json(newContact);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

app.listen(3001, () => {
  console.log('Server is running on port 3001');
});
