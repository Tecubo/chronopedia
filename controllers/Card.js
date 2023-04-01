'use strict';

var utils = require('../utils/writer.js');
var Card = require('../service/CardService');

module.exports.createCard = function createCard (req, res, next, body, timelineID) {
  Card.createCard(body, timelineID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCard = function deleteCard (req, res, next, cardID) {
  Card.deleteCard(cardID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editCard = function editCard (req, res, next, body, cardID) {
  Card.editCard(body, cardID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editProperties = function editProperties (req, res, next, body, cardID) {
  Card.editProperties(body, cardID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getCard = function getCard (req, res, next, cardID) {
  Card.getCard(cardID)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
