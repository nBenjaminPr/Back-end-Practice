const {Schema, model} = require ("momgoose")

const UserShema = new Schema ({
    name: {
        type: String,
        required: [true, "El nombre es requerido" ],
        trim: true,
        minlength: 3,
        maxlength: 20,
        match: /^[a-zA-Z]+$/,
        default: "Usuario sin nomrbre",
    },

    email:{
        type: String,
    },

    age:{
        type: Number,
    },

    lastname:{
        type:String
    },

    gender:{
        type:String
    },

    admin:{
        type:Boolean,
        default: false

    },

    hobbies: {
        type: Array,
        default: []
    },
        timestamps: true,
        versionKey: false,
})

module.exports = model("User", UserShema)