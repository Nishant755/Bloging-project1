const authorModel = require("../models/authormodel.js");

const createAuthor =async function(req,res){

    let data=req.body;
    const savedData=await authorModel.create(data)
    res.status(201).send(savedData)
}

module.exports.createAuthor = createAuthor 