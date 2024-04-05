import mongoose from "mongoose";

const connect = (URI_DB) => {
  mongoose.connect(URI_DB)
    .then(() => {
      console.log("Connected to MongoDB!");
    })
    .catch((error) => {
      console.log(error);
    });
};

export default connect;
