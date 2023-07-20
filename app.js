const express = required('express');
const cors = required('cors');

const app = express();
app.use(cors())

const multByThreeController = require('./multByThreeController')

app.get('/', (request, response) => {
    response.send("Hello New Practice Server")
})

app.get("/greet", (request, response) => {
    response.send("Hello!")
})

app.use('/multByThree', multByThreeController);

module.exports = app;