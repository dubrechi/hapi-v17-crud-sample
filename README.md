# Hapi v17 CRUD sample #

A simple CRUD sample using Hapi v17.

### What is this repository for? ###

* Having an enormous revision on the release of v17, this sample code can serve as a guide on creating a simple CRUD using hapi v17. This code uses postgreSQL as database.

### Setup ###

* Create a table named 'promise' with columns 'id' as primary key and 'name' on your postgre db.
* run npm start.

# Usage #

### Create ###
* url - http://localhost:8000/create
* method - post
* Body
```js
{
    "name": "luke"
}
```

### Read ###
* url - http://localhost:8000/read/{id}
* method - get

### Update ###
* url - http://localhost:8000/update/{id}
* method - patch or put
* Body
```js
{
    "name": "chewy"
}
```

### Delete ###
* url - http://localhost:8000/delete/{id}
* method - delete