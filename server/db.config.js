const dbName = 'trip-order';
const dbHost = 'localhost';
const dbPort = 27017;
module.exports = {
  url: `mongodb://${dbHost}:${dbPort}/${dbName}`
}