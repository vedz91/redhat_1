# redhat_1
REST service for basic CRUD operation on JSON dataset

Routes
=====

#### USERS
* GET   /users - Get all the users

```
/users

{
  "users": [
    {
      "gender": "female",
      "name": {
        "title": "miss",
        "first": "alison",
        "last": "reid"
      },.....
```

* GET   /users/:regId - Get the user based on registered number
```
/users/1237176893

{
  "users": [
    {
      "gender": "female",
      "registered": 1237176893,
      "name": {
        "title": "miss",
        "first": "alison",
        "last": "reid"
      },.....
```
* POST  /users - Add new users into database
* PUT   /users/:regId - Update the requested user with the request JSON body
* DELETE    /users/:regId - Delete the requested user


#### SEARCH
* GET /search? - Allows you to search for a set of users with the requested parameter
```
/search?gender=female
/search?gender=female&registered=1237176893
/search?gender=female&registered=1237176893&pps=3302243T
```

Project Setup
=============

####NPM

To pull in all the required files for the client side:

```
npm install
```

####Run
To run project localy, go to main project folder and execute 'app.js' from command line.

```
node app.js
```

####Test
To test functionality of endpoints run:

```
mocha
```

####Environments
*local
    *localhost:3001


