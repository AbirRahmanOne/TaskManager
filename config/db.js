// connection to mongodb & listen for requests ..
const mongoose =  require('mongoose') ;

const connectDB = async ()=>{
    try {
        const conn = await mongoose.connect(  process.env.MONGO_URL, {
            useNewUrlParser: true, 
            useFindAndModify: false ,
            useCreateIndex: true,
            useUnifiedTopology: true 
        })
        console.log(`DB connected : ${conn.connection.host}`);

    } catch (err) {
        console.log(err);
        process.exit(1);
    }
}

module.exports = connectDB ;