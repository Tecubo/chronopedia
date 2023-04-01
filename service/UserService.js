'use strict';


/**
 * To create a user
 * Create a user with the informations provided in the requestBody and return its id
 *
 * body User_body_1 The informations needed to create the user (in JSON format)
 * returns userID
 **/
exports.createUser = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "id" : 130849
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * To delete a user
 * Delete a user identified by its id
 *
 * userID userID Id of a user
 * no response value expected for this operation
 **/
exports.deleteUser = function(userID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * To edit user's informations
 * To change the username, the email or the password of a user (one change by request)
 *
 * body User_body A JSON object with the field to change and its new value (optional)
 * userID userID Id of a user
 * no response value expected for this operation
 **/
exports.editUser = function(body,userID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * To get informations about a user
 * Ask for informations about a specific user with its id
 *
 * userID userID Id of a user
 * returns inline_response_200
 **/
exports.getUser = function(userID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "username" : "John",
  "email" : "john@company.com"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

