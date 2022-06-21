const blogModel= require("../models/blogmodel");
const authorModel= require("../models/authormodel");



//==========================================================================================
const createBlog = async function(req, res) {
    const data = req.body
    const user = await authorModel.findById(data.authorId)
    if(!user ) return res.status(400).send({status: false, msg: "Enter the Valid Author Id"})
    const saveData = await blogModel.create(data)
    res.status(201).send({status: true, data: saveData})
}

//============================================================================

const getBlog = async function (req,res){
    const data =req.query
    data.isDeleted=false
    data.isPublished=true
console.log(data)

    const result=await blogModel.find( data )
   // console.log(result)
    return res.status(200).send(result)
}








//==================================================================================


const updateBlog=async function(req,res){

const blogId=req.params.blogId;
const isavailable =await blogModel.find({_id:blogId,isDeleted:false});
if(!isavailable){return res.status(404).send("data invalid")}

// const title=req.body.title;
// const body=req.body.body;
// const tags=req.body.tags;
// const subcategory=req.body.subcategory;

const data=req.body
data.isPublished=true
data.publishedAt=Date.now()

// const b ={
//     title:title,
//     body:body,

// }

const updatedBlog=await blogModel.findByIdAndUpdate(blogId ,{$set:data},{new:true})

return res.status(200).send({status:true, updateBlog})

};


//=====================================================================================




module.exports.createBlog = createBlog 
module.exports.updateBlog = updateBlog 
module.exports.getBlog = getBlog 