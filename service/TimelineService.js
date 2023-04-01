'use strict';


/**
 * To create a timeline
 * Create an empty timeline and return its id if the timeline has been created successfully
 *
 * body Timeline_body Timeline's title
 * returns inline_response_201
 **/
exports.createTimeline = function(body) {
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
 * To delete a timeline
 * Delete the specified timeline
 *
 * timelineID timelineID The id of the desired timeline
 * no response value expected for this operation
 **/
exports.deleteTimeline = function(timelineID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * To get a timeline
 * Return the desired timeline in JSON format identified by its id
 *
 * timelineID timelineID The id of the desired timeline
 * returns Timeline
 **/
exports.getTimeline = function(timelineID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "title" : "My first timeline",
  "events" : [ {
    "title" : "My first date",
    "category" : "date",
    "start" : "26/03/2023",
    "end" : "",
    "weight" : 1,
    "place" : "Home",
    "cardID" : 103975
  }, {
    "title" : "My first epoch",
    "category" : "epoch",
    "start" : "26/03/2023",
    "end" : "31/03/2023",
    "weight" : 2,
    "place" : "CentraleSupelec",
    "cardID" : 149734
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * To move a timeline from a folder to an other
 * Return only a status code depending if the timeline has been moved successfully
 *
 * body Timeline_move_body The id of the new parent
 * timelineID timelineID The id of the desired timeline
 * no response value expected for this operation
 **/
exports.moveTimeline = function(body,timelineID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * To change the title of a timeline
 * Return only a status code depending if the timeline has been renamed successfully
 *
 * body Timeline_rename_body The new title of the timeline
 * timelineID timelineID The id of the desired timeline
 * no response value expected for this operation
 **/
exports.renameTimeline = function(body,timelineID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * To share a timeline with a group of person
 * To share a timeline with a group of person identified by an array of user's id
 *
 * body List A JSON array of the ids of people we want to share the timeline with, and their role
 * timelineID timelineID The id of the desired timeline
 * message Boolean Precise if you want to warn people with an email when you share the timeline with them (optional)
 * no response value expected for this operation
 **/
exports.shareTimeline = function(body,timelineID,message) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

