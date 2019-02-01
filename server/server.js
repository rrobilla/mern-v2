const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');



//Declared Route constants
const examples = require('./routes/example.js');

const gameClientApi = require('./routes/gameClientApi.js');

const app = express();

//BodyParser middleware
app.use(bodyParser.json());

//Routes api endpoints declared in React app to the appropriate Route constant
app.use('/api/v1/examples', examples);
app.use('/api/v1/game/playlist', gameClientApi);

// Serve the static files from the React app
//app.use(express.static(path.join(__dirname, 'client/public')));


// An api endpoint that returns a short list of items
//app.get('/api/v1/example/getList', (req,res) => {
//    var result = apiv1Router.getList;
//    res
//      .status(200)
//      .send(result)
//});

    //var list = ["item1", "item2", "item3"];
//    Request
    
//    res
//      .status(200)
//      .json(result);
    //.find()
    //.exec(function(err,example){
    //  res
    //    .status(200)
    //    .json(example);
    //})
    //res.json(list);
//    console.log('Sent list of items');
//});


// Handles any requests that don't match the ones above
//app.get('*', (req,res) =>{
//    console.log('A non existant resource was requested');
    //res.sendFile(path.join(__dirname+'/public/index.html'));
//});

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);
