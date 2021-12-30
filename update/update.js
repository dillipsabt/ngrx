const express = require("express");
const mongodb = require("mongodb");

let ashkit = mongodb.MongoClient;

const update = express.Router().put("/",(req,res)=>{
    ashkit.connect("mongodb://127.0.0.1:27017/smartshopdb",(err,db)=>{
        if(err) throw err;
        else{
            db.collection("tblcategories").updateOne({"e_id":req.body.e_id},{$set:{"e_name":req.body.e_name,"e_sal":req.body.e_sal}},(err,result)=>{
                if(err) throw err;
                else{
                    res.send({"massage":"record updated successfully"})
                }
            })
        }

    });
});

module.exports = update;