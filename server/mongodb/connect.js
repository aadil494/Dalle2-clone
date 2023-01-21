import mongoose from "mongoose";

const connectDB =  (url) => {
    mongoose.set('strictQuery', true) // helpful with search functionality

    mongoose.connect(url)
    .then(()=> console.log('Mongoose Connected!'))
    .catch((err) => console.log(err))

}

export default connectDB;