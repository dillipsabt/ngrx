const express = require("express");
const mongodb = require("mongodb");

const ashkit = mongodb.MongoClient;
const fetch = express.Router().get("/",(req,res)=>{
    ashkit.connect("mongodb://127.0.0.1:27017/smartshopdb",(err,db)=>{
        if(err) throw err;
        else{
              db.collection("tblcategories").findOne({}, function(err, result) {
                if (err) throw err;
                console.log(result.name);
                db.close();
            });
        }
    });
});

module.exports = fetch;