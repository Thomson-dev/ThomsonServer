import mongoose from 'mongoose';

const ExperienceSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    company: {
        type: String,
        required: true
    },
    startDate: {
        type: String,
        required: true
    },
    endDate: {
        type: String
    },
    description: {
        type: String,
        required: true
    }
});

const Experience = mongoose.model('Experience', ExperienceSchema );


export default Experience;