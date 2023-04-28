//To Do:

//23rdApril
//* Add links in on the right of the rop navbar
//* Make sure that the space on the left and the right are the same
//(Do this when Gini gets you a good picture of the FW Logo)

//* Figure out how to view the website using your phone
//* Make it so that when the real navbar is a little tab on the side
//that you can x off when you're on your phone
//* Animate the side navbar so that it expands to the right and then drops down
//Alternatively have the text come in to tne left and the blob lean out

///////////////
///////////
///////////
///////////
///////////


const express = require("express");
const https = require ("https");

const app = express();
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));

app.set('view engine', 'ejs');

app.get("/", (req, res) => {
    res.render("index", {

    } )
})

app.listen(3000, () => {
    console.log("server started on Port 3000");
})