const express=require('express')
const mongoose=require('mongoose')

const port= 8000


require("./server/config/mongoose.config");

const app= express()

app.use(express.json(), express.urlencoded({ extended: true }));

const AllMyJokesRoutes = require("./server/routes/jokes.routes");
AllMyJokesRoutes(app);

app.listen(port, () => console.log("The server is all fired up on port 8000"));