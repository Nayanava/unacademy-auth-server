if(process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
    console.log(process.env.NODE_ENV);
}
module.exports = {
    ACCESS_TOKEN_SECRET: process.env.ACCESS_TOKEN_SECRET,
    NODE_ENV: process.env.NODE_ENV
}