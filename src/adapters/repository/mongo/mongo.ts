require('dotenv').config()
const mongoose = require('mongoose')

const { MONGODB_URI, MONGODB_URI_TEST, NODE_ENV } = process.env
const uri = NODE_ENV === 'test'
  ? MONGODB_URI_TEST
  : MONGODB_URI // your mongodb connection string

mongoose.set('strictQuery', false)
mongoose.connect(uri)
  .then(() => {
    console.log('Database connected')
  }).catch((err: any) => {
    console.error(err)
  })