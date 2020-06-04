var httpContext = require('express-http-context');
var uuid = require('node-uuid');

const reqUUIDGenerator = (req, res, next) => {
    httpContext.ns.bindEmitter(req);
    httpContext.ns.bindEmitter(res);
    const uniuqeId = uuid.v1();
    httpContext.set('reqId', uniuqeId);
    next();
}

const httpRequestContext = httpContext.middleware;

module.exports = {
    reqUUIDGenerator,
    httpRequestContext,
    httpContext
} 