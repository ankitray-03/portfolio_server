const express = require("express");
const app = express();
require("dotenv").config();
const dbConfig = require("./config/dbConfig");
const cors = require('cors');


const portFolioRoute = require("./routes/portfolioRoute");

app.use(express.json());
app.use(cors());

app.use("/api/portfolio",portFolioRoute);

const port = process.env.PORT || 5000;
const path = require("path");

if(process.env.NODE_ENV === "production"){
    app.use(express.static(path.join(__dirname,"client/build")));
    app.get("*",(req,res)=>{
        res.sendFile(path.join(__dirname,"client/build/index.html"));
    });
}

app.listen(port,()=>{
    console.log(`Sever running on port ${port}`);
});