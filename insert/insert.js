const express = require("express");
const mongodb = require("mongodb");

const ashkit = mongodb.MongoClient;
const insert = express.Router().post("/",(req,res)=>{
    ashkit.connect("mongodb://127.0.0.1:27017/smartshopdb",(err,db)=>{
        if(err) throw err;
        else{
            db.collection("tblcategories").insertOne({
                "e_id":req.body.e_id,
                "e_name":req.body.e_name,
                "e_sal":req.body.e_sal
            },(err,result)=>{
                if(err) throw err;
                else{
                    res.send({insert:"success"});
                }
            })
        }
    });
});

module.exports = insert;