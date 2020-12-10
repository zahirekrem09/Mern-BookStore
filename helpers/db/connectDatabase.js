const mongoose = require("mongoose");

const connectDatabase = async () => {
  //   mongoose
  //     .connect(process.env.MONGO_URI, {
  //       useNewUrlParser: true,
  //       useFindAndModify: false,
  //       useCreateIndex: true,
  //       useUnifiedTopology: true,
  //     })
  //     .then(() => {
  //       console.log("MongoDb Connection Successful");
  //     })
  //     .catch((err) => console.error(err));

  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDb Connection Successful");
  } catch (error) {
    console.error("Db Error", err);
  }
};

module.exports = connectDatabase;

//mongodb+srv://admin:090105042@cluster0.tbrae.mongodb.net/<dbname>?retryWrites=true&w=majority
//mongodb+srv://admin:090105042@cluster0.tbrae.mongodb.net/test?authSource=admin&replicaSet=atlas-1autfh-shard-0&readPreference=primary&appname=MongoDB%20Compass&ssl=true
