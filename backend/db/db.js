import mongoose from "mongoose";

const connectToMongoDB = async () => {
    try {
        await mongoose.connect("mongodb+srv://sushmithalinganaboina_db_user:Sushmitha9718@cluster0.dn2v1g3.mongodb.net/web_app?retryWrites=true&w=majority");
        console.log("Connected to MongoDB");
    }
    catch (error) {
        console.log("Error connecting to MongoDB:", error.message);
       
    }   
};
export default connectToMongoDB;