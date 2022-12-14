const router = require("express").Router()

const place = require("../models/places")

//create post
router.post("/", async(req, res) => {
    const newPost = new Post(req.body)

    try{
        const savedPost = await newPost.save()
        res.status(200).json(newPost)
        console.log('New Post Added!')
    }
    catch(err){
        console.log('Failed to Add Post')
    }
})

//get all posts