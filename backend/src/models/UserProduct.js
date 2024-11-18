const { default: mongoose } = require("mongoose");

const userProductScheme = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    productName: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    images: [
        {
            type: String,
            required: true
        }
    ],
    quantity: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    createdAt:{
        type:Date,
        default:Date.now
    },
    updatedAt:{
        type:Date,
        default:Date.now
    },
    isDeleted:{
        type:Boolean,
        default:false
    }

}, {
    timestamps: true
});

userProductScheme.pre("save",function (next) {
    this.updatedAt=Date.now();
    next();
});

const userProduct=mongoose.model("userProduct",userProductScheme);
module.exports=userProduct;
