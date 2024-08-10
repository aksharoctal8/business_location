import mongoose from "mongoose"

const connectDatabase = () =>{
    mongoose.connect(("mongodb+srv://aksharkoctal8:okFhHM5cX88fOeao@akshar.fxsbbxv.mongodb.net/business_location?retryWrites=true&w=majority&appName=AKSHAR"), {
        useUnifiedTopology: true,
        useNewUrlParser: true
      })
        .then(() => console.log('Database Connected'))
        .catch((err) => console.log(err));
}

export default connectDatabase