const express = require('express');
const dotenv = require('dotenv')
const cors = require('cors');
const bodyParser = require('body-parser');
const connectDB = require('./src/config/db');

const userRoutes = require('./src/routes/userRoutes');

dotenv.config();

const app = express();

app.use(cors());
app.use(bodyParser.json());

connectDB();

app.use('/api/user', userRoutes);

app.get('/', (req, res) => {
    res.send('Welcome to FreshVeggies API');
  });

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})

