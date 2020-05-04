//post, user, boody, replies

const {Schema, model} = require('mongoose')
const User = require('./User')
const Profile = require('./Post')


const commentSchema = new Schema({
    post: {
        type: Schema,
        ref: Post,
        required: true,
    },
    user: {
        type: Schema.Types.ObjectId,
        ref: User,
        required: true,
    },
    body: {
        type: String,
        trim: true,
        required: true,
    },
    replies: [
        {
            body: {
                type: String,
                required: true
            },
            user: {
                type: Schema.Types.ObjectId,
                ref: User,
                require: true,
            },
            createdAt : {
                type: Date,
                default: new Date()
            }
        }
    ]
},{timestamps: true})

const Comment = model('Comment', commentSchema)

module.exports = Comment;