import mongoose from 'mongoose';

const UserSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'Login'
    },
    name: {
        type: String,
        required: true
    },
    experience: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    address: {
        type: String,
        required: true
    
    },
    about: {
        type: String,
        required: true
    
    },
    remote: {
        type: Boolean,
        required: true
    },

    image:{
        type:String,
        required:true,
    }

    // skill: {
    //     type: String,
    //     required: true
    // },
    // proficiency: {
    //     type: Number,
    //     required: true,
    //     min: 0,
    //     max: 100
    // }
});


const User = mongoose.model('User', UserSchema);

export default User;