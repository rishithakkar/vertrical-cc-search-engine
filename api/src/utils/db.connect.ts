import mongoose from "mongoose";

const connect = () => {
  return mongoose
    .connect("mongodb://localhost:27017/vertrical")
    .then(() => {
      console.log("Database connected successfully!");
    })
    .catch((err) => {
      console.log("Error in database connection: ", err);
      process.exit(1);
    });
};

export default connect;
