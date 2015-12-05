var EndPoint = require('api-endpoint');

EndPoint.lambda = function(endpoint) {
    endpoint.handler = function handler(event, context) {
        endpoint.run(event, function(err, data) {
            if (err) {
                context.fail(err);
            } else {
                context.succeed(data);
            }
        });
    };

    return endpoint;
};

module.exports = EndPoint;

