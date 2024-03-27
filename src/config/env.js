require('dotenv').config();//setea en objeto process
const { get } = require('env-var');

const envs ={
    PORT: get('PORT').required().asPortNumber(),
    PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
}

module.exports = {
    envs
}