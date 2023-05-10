const {Schema, model} = require("mongoose")

const UseSchema = new Schema({
    name:{
        type:String,
        uppercase: true,
        minLength:[3, "Debe tener mas de 3 carecteres"],
        maxLength:[40, "No debe tener mas de 40 caracteres"],
    },
    email:{
        type:String,
        required:[true, "El email es obligatorio"],
        unique: [true, "Email ya registrado"],
        trim: true,
    },
    lastname:{
        type:String,
        lowercase: true,
        minLength:[3, "Debe tener mas de 3 carecteres"],
        maxLength:[40, "No debe tener mas de 40 caracteres"],
    },
    age:{
        type:Number,
        select: false,
        min: [0, "La edad no puede ser negativa"],
        max: [150, "Que sos matusalen?"]
    },
    gender: {
        type:String,
        enum: ["M", "F"]
    },

    admin:{
        type:Boolean,
        default:false
    },
    hobbies:Array
},{
    versionKey: false,
    timestamps: true
})

module.exports = model("User", UseSchema);