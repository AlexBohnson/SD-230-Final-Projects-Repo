const path = require('path');
const express = require('express');
const helmet = require('helmet');

// Instantiate the app
const app = express();


// Security Setting
app.use(helmet());

// Serve Static files
app.use(express.static("public", {
    immutable: true,
    maxAge: '864000'
}));

//routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "public", "index.html"));
});

// set about route
app.get('/about', (req, res) => {

    res.send('<h1>This is my calculator app about section!</h1>');
});

// Catch all 404 page
app.get('*', (req, res) => {
    res.status(404).send("You\'ve reach the 404 not found page. Please return to localhost:3000 or localhost:3000/about");
})

// Listen
const port = process.env.PORT || 3000;
const server = app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})

//graceful shutdown
process.on('SIGTERM', shutDown);
process.on('SIGINT',  shutDown);

function shutDown(){
    server.close(() => {
        console.log('Server is shutting down');
        process.exit(0);
    })
}