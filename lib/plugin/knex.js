'use strict';

const Knex = require('knex');
const internals = {};


exports.plugin = {
    name: 'knex',
    register: function (server, options) {
        try {
            if (options) {
                internals.knex = new Knex(options);
            }
            else {
                throw new Error('Please provide a proper configuration');
            }

            server.expose('run', internals.knex);
        }
        catch (err) {
            throw new Error(err);
        }
    }
};
