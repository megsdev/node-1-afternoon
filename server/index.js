const express = require('express');
const bodyParser = require('body-parser');
const mc = require(__dirname + '/controllers/messages_controller')

const app = express();

app.use(bodyParser.json())
app.use( express.static(__dirname + '/../public/build'))
const messageBaseUrl = '/api/messages'
app.post( messageBaseUrl, mc.create )
app.get( messageBaseUrl, mc.read )
app.put( '/api/messages/:id', mc.update )
app.delete( '/api/messages/:id', mc.delete )


app.listen(3000, () => {
    console.log('listening on 3000')
})

