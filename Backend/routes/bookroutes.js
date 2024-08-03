import express from 'express';
import { book } from '../models/bookmodel.js';


const booksroute=express.Router();


//create book
booksroute.post('/',async (request,response) => {
    try {
        if (!request.body.title || !request.body.author||!request.body.publishYear) {
            return response.status(400).send("send all required fields:Title,Author,Publish Year");

        } 

        const newBook={
            title: request.body.title,
            author: request.body.author,
            publishYear: request.body.publishYear,
        };

        const Book=await book.create(newBook);
        return response.status(201).send(Book);




    } catch (error) {
        console.log(error);
        response.status(500).send({message: error.message});
    }

});

//get all books
booksroute.get('/',async (request,response) => {
    try {
        const books=await book.find({});
        return response.status(200).json({count:books.length,data:books});



    } catch (error) {
        console.log(error);
        response.status(500).send({message: error.message});
    }
});

//get 1 book
booksroute.get('/:id',async (request,response) => {
    try {
        const {id} = request.params;
        const Book=await book.findById(id);
        return response.status(200).json(Book);

    } catch (error) {
        console.log(error);
        response.status(500).send({message: error.message});
    }
});

//update a book
booksroute.put("/:id",async (request,response) =>{
    try {
        if (!request.body.title || !request.body.author||!request.body.publishYear) {
            return response.status(400).send("send all required fields:Title,Author,Publish Year");
        } 
        const {id}=request.params;
        const result =await book.findByIdAndUpdate(id,request.body);
        if(!result){
            return response.status(404).send({message:"Book updatation failed!"});
        }
        return response.status(201).send({message:"Book updatation Success!"});
    } catch (error) {
        console.log(error);
        response.status(500).send({message: error.message});
    }
});

//delete book
booksroute.delete("/:id",async (request,response) =>{
    try {
        const {id}=request.params;
        const result =await book.findByIdAndDelete(id);
        if(!result){
            return response.status(404).send({message:"Book Deletion failed!"});
        }
        return response.status(201).send({message:"Book Deletion Success!"});
    } catch (error) {
        console.log(error);
        response.status(500).send({message: error.message});
    }
});

export default booksroute;