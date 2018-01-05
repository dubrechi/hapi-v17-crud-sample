'use strict';

const Handler = require('./handler');


exports.load = [
    { path: '/create', method: 'POST', handler: Handler.run.createName },
    { path: '/read/{id}', method: 'GET', handler: Handler.run.readName },
    { path: '/update/{id}', method: ['PATCH', 'PUT'], handler: Handler.run.updateName },
    { path: '/delete/{id}', method: 'DELETE', handler: Handler.run.deleteName }
];

