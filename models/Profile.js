//User id, title, bio, profilePics, links:{fb,twi,}, posts, bookmarks

const {Schema, model} = require('mongoose')
const User = require('./User')
const Profile = require('./Post')

const porfileSchema = new Schema({
    user: {
        type: Schema.Types.ObjectId,
        ref: User,
        require: true
    },

    title: {
        type: String,
        trim: true,
        maxlength: 100,

    },
    bio: {
        type: String,
        trim: true,
        maxlength: 500,
    },
    profilePic: {
        type: String,
    },
    links: {
        website: String,
        facebook: String,
        twitter: String,
        github: String,
    },
    posts: [
        {
            type: Schema.Types.ObjectId,
            ref: Post
        }
    ],
    booksmarks: [
        {
            type: Schema.Types.ObjectId,
            ref: Post
        }
    ]
}, {timestamps: true})

const Profile = model('Profile', porfileSchema)

module.exports = Profile;