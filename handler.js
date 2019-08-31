'use strict';

const express = require('express');
const app = express();
const sls = require('serverless-http')

app.get('/', async (req, res, next) => {
  res.status(200).send('Hello Serverless!');
});


module.exports.hello = sls(app)

// module.exports.hello = async event => {
//   return {
//     statusCode: 200,
//     body: JSON.stringify(
//       {
//         message: 'Go Serverless v1.0! Your function executed successfully!',
//         input: event,
//       },
//       null,
//       2
//     ),
//   };

  // Use this code if you don't use the http event with the LAMBDA-PROXY integration
  // return { message: 'Go Serverless v1.0! Your function executed successfully!', event };
// };
