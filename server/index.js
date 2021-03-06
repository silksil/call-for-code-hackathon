const express = require('express');
const http = require('http');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const keys = require('./config/keys');

// DB Setup
mongoose.connect('mongodb://localhost:27017/firstResponders', { useNewUrlParser: true });

// App Setup
app.use(morgan('combined')); // middleware - a loggin framework for debugging
app.use(cors()); // middleware - allows ajax requests from different origins
app.use(bodyParser.json({ type: '*/*' })); // middleware - parse incoming requests into json no matter what

// Routes
require('./routes/routesAuth')(app);
require('./routes/routesDisasters')(app);

// Deployment Setup
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  const path = require('path');
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
  });
}

// Server Setup
const PORT = process.env.PORT || 5000; // unless Port is defined, use port 5000
const server = http.createServer(app);// http is native library. Create a http server that knows how to receive a request and forward it to app
app.listen(PORT);
console.log('Server is listening on:', PORT);
