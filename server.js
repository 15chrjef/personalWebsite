var express = require('express')
var app = express()
var port = process.env.PORT || 3001;
app.use('/static', express.static(path.join(__dirname, 'public')))


app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(port, function () {
  console.log('Example app listening on port '+ port +  '!')
})