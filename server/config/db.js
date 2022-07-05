const mongoose = require('mongoose');
const { DB_HOST, DB_PORT, DB_NAME } = process.env;

const MONGO_URI = `mongodb://${DB_HOST}:${DB_PORT}/${DB_NAME}`;

exports.connect = () => {
  mongoose
    .connect(MONGO_URI)
    .then(() => console.log('Connected successfully to db'))
    .catch((err) => console.log(err));
};
