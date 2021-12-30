const express = require("express");
const mongodb = require("mongodb");

let ashkit = mongodb.MongoClient;

const remove = express.Router().delete("/",(req,res)=>{
    ashkit.connect("mongodb://127.0.0.1:27017/smartshopdb",(err,db)=>{
        if(err) throw err;
        else{
            db.collection("tblcategories").deleteOne({"e_id":req.body.e_id},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"delete":"record delete successfully"})
                }
            })
        }

    });
});

module.exports = remove;