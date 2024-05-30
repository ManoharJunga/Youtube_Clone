import mongoose, {Schema, model} from "mongoose";
import jwt from "jsonwebtoken";
const userSchema = new Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
        index: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        lowercase: true,
        trim: true,
    },
    fullname: {
        type: String,
        required: true,
        trim: true,
        index: true,
    },
    avatar: {
        type: String, //Cloudinary url
        required: true,
    },
    coverImage: {
        type: String,
    },
    watchHistory: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Video',
        }
    ],
    password: {
        type: String,
        required: [true, 'Password is required'],
    },
    refreshToken: {
        type: String,
        required: true,
    }

}, {timestamps: true});
 

export const User = mongoose.model('User', userSchema);