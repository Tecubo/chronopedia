'use strict';

var utils = require('../utils/writer.js');
var Timeline = require('../service/TimelineService');

module.exports.createTimeline = function createTimeline (req, res, next, body) {
  Timeline.createTimeline(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTimeline = function deleteTimeline (req, res, next, timelineID) {
  Timeline.deleteTimeline(timelineID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTimeline = function getTimeline (req, res, next, timelineID) {
  Timeline.getTimeline(timelineID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.moveTimeline = function moveTimeline (req, res, next, body, timelineID) {
  Timeline.moveTimeline(body, timelineID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.renameTimeline = function renameTimeline (req, res, next, body, timelineID) {
  Timeline.renameTimeline(body, timelineID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.shareTimeline = function shareTimeline (req, res, next, body, timelineID, message) {
  Timeline.shareTimeline(body, timelineID, message)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
