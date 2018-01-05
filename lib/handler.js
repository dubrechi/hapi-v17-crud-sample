'use strict';


exports.run = {
    createName: function (request) {

        function createName() {

            return new Promise(function (resolve, reject) {

                const knex = request.server.plugins.knex.run;

                knex('promise')
                    .insert({ name: request.payload.name })
                    .asCallback(function (err, rows) {

                        if (err) {
                            reject(err);
                        }
                        resolve(rows);
                    });
            });
        }

        return createName();
    },
    readName: function (request) {

        function getName() {

            return new Promise(function (resolve, reject) {

                const knex = request.server.plugins.knex.run;

                knex.select('name').from('promise')
                    .where('id', '=', decodeURIComponent(request.params.id))
                    .asCallback(function (err, rows) {

                        if (err) {
                            reject(err);
                        }
                        resolve(rows);
                    });
            });
        }

        return getName();
    },
    updateName: function (request) {

        function updateName() {

            return new Promise(function (resolve, reject) {

                const knex = request.server.plugins.knex.run;

                knex('promise')
                    .where('id', '=', decodeURIComponent(request.params.id))
                    .update({ name: decodeURIComponent(request.payload.name) })
                    .asCallback(function (err, rows) {

                        if (err) {
                            reject(err);
                        }
                        resolve(rows);
                    });
            });
        }

        return updateName();
    },
    deleteName: function (request) {

        function deleteName() {

            return new Promise(function (resolve, reject) {

                const knex = request.server.plugins.knex.run;

                knex('promise')
                    .where('id', decodeURIComponent(request.params.id))
                    .del()
                    .asCallback(function (err, rows) {

                        if (err) {
                            reject(err);
                        }
                        resolve(rows);
                    });
            });
        }

        return deleteName();
    }

};
