import mongoose from 'mongoose'
const connectdb=async()=>{
    try {
        await mongoose.connect(process.env.BD_URI).then(()=>{
            console.log('database is connected');
        })
        .catch((e)=>{
            console.log(e);
        })
    } catch (error) {
        console.log(error);
    }
}
export default connectdb