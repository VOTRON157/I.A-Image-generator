const express  = require('express');
const createImage = require("./openaif")
const bodyParser = require('body-parser')
const path = require('path');
const app = express();


const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

app.use(express.static(path.join(__dirname, 'public')));
app.set('views', path.join(__dirname, 'views'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
})

app.post('/', async (req, res) => {
    const prompt = req.body.prompt
    const image = await createImage(prompt)
    res.redirect('/?image=' + encodeURIComponent(image))
})

app.listen(port, function () {
  console.log("http://localhost:3000/");
})