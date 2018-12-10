const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const mlabDetails = {
   username : 'sumodh',
   password : 'turbo124',
   dbAuth: 'ds227674.mlab.com:27674',
   dbName : 'usersdb'
}

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

app.use(function (req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization, x-refresh-token');
    res.setHeader('Access-Control-Allow-Methods', 'POST, GET, PUT, DELETE, OPTIONS');
    next();
});

const userRoutes = require('./routes/User');
const groupRoutes = require('./routes/Group');
const statsRoutes = require('./routes/Stats');

app.use('/api/user', userRoutes);
app.use('/api/group', groupRoutes);
app.use('/api/stats', statsRoutes);

const {username, password, dbAuth, dbName} = mlabDetails;
// Connect to Mongoose
mongoose.Promise = global.Promise;
mongoose.connect(`mongodb://${username}:${password}@${dbAuth}/${dbName}`);

mongoose.connection.on('connected', function () {
    console.log("Mlab connected")
 });


app.get('/', function(req, res){
    res.send('Kindly use API endpoints provided to get or post data!');
});

const port = 8005;
app.listen(process.env.PORT || port);
console.log("server started on port: " + port);
