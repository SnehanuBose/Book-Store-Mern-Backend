import mongoose from "mongoose";

const bookschema=mongoose.Schema(
    {title: {
        type:String,
        required:true,
    },
    author: {
        type:String,
        required:true,
    },
    publishYear: {
        type:Number,
        required:true,
    },
},
{
    timestamp:true,
}
);

export const book = mongoose.model('Book', bookschema);