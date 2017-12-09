import mongoose from 'mongoose';

module.exports = (app) => {

  const { Schema } = mongoose;

  // var Schema = mongoose.Schema;
  var ObjectId = mongoose.Schema.ObjectId;

  var User = new Schema({
    id: ObjectId,
    googleId: String
  });

  app.mongoConnection.model('User', User);
};