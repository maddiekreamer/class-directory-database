const express = require("express")
const queries = require('./queries')
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (request, response, next) => {
    queries.listAll().then(result => response.json({
        result
    }))
});

app.listen(port, () => {
    console.log(`listening on ${port}`)
})