const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.use( bodyParser.json() );       // to support JSON-encoded bodies
app.use(bodyParser.urlencoded({     // to support URL-encoded bodies
  extended: true
})); 


app.post('/signup-customer', (req, res) => {

    console.log(req);
})


module.exports = {
   path: '/api',
   handler: app
}
