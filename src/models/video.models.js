import mongoose, {Schema} from "mongoose";

const videoSchema = Schema.create({

},{timestamp: true})


export const Video = mongoose.model('Video', videoSchema);