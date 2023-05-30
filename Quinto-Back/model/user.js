const {Schema, model} = require ("momgoose")

const UserShema = new Schema ({
    name: {
        type: String,
        required: true,
        trim: true,
        minlength: 3,
        maxlength: 20,
        match: /^[a-zA-Z]+$/,
        default: "Usuario sin nomrbre",
    }
})