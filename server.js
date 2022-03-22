    const express = require('express'),
    path = require('path'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');

    const app = express();

    mongoose.Promise = global.Promise;
    const uri = 'mongodb://techcloude_qa:W0eitlawB5w1FLA4@cluster0-shard-00-00.erpom.mongodb.net:27017,cluster0-shard-00-01.erpom.mongodb.net:27017,cluster0-shard-00-02.erpom.mongodb.net:27017/CurdApp?ssl=true&replicaSet=atlas-7bgebv-shard-0&authSource=admin&retryWrites=true&w=majority';
    mongoose.connect(uri, {  useNewUrlParser: true,  useUnifiedTopology: true}).then( () => {  
      console.log('MongoDB' + ` : `+ 'Connected')
    }).catch(err => console.log(err))
 
    const adUnitRoutes = require('./routes/adunit.route');

    app.use(bodyParser.json());
  
    app.use(cors('*'));
    const port = process.env.PORT || 5000;

    app.use('/adunits', adUnitRoutes);

    const server = app.listen(port, function(){
     console.log('Listening on port ' + port);
    });