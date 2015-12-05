A simple, understandable way to create complex AWS Lambdas.

Builds on top of `api-endpoint`. Here's how to use it:

```
var EndPoint = require('api-endpoint-lambda'),
    Joi = EndPoint.Joi;

var endpoint = EndPoint.create({
    headers: Joi.object(), // Headers validator
 
    payload: Joi.object(), // Payload validator
 
    query: Joi.object(), // Query string validator
 
    params: Joi.object(), // URL string validator
 
    response: Joi.object(), // Response validator

    filters: [
        // Functions to run when this endpoint is called.
        // 

        function doStuff(request, options, next) {
            // Use request.payload, request.headers, etc.
            // options is an object to store meta information on for reference by later functions
            next(err, data);
        },

        function moreStuff(request, options, next) {
            next(err, data);
        }
    ]
});

module.exports = EndPoint.lambda(endpoint); // It is important to export the wrapped endpoint!
```
