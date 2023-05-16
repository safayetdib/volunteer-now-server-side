const express = require('express');
const cors = require('cors');
require('dotenv').config();
console.log(process.env);

const app = express();
const port = process.env.PORT || 5000;

// middleware
app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
	res.send('Volunteer Now! - Give your time, change a life..');
});

app.listen(port, () => {
	console.log('Volunteer Now is running on port:', port);
});
