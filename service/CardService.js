'use strict';


/**
 * To create a card in a timeline
 * Send a form with all the necessary informations to create a card and return the id of the card
 *
 * body Card_body The informations to create the cards
 * timelineID timelineID The id of the desired timeline
 * returns timeline_move_body
 **/
exports.createCard = function(body,timelineID) {
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
 * To delete a card in a timeline
 * Send the id of the card to delete and return only a status code depending if the card has been deleted successfully
 *
 * cardID cardID To modify a card, we need the card's id but also the id of the timeline the card belongs to.
 * no response value expected for this operation
 **/
exports.deleteCard = function(cardID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * To edit the content of a card
 * Save the new content of the card
 *
 * body Object The new file to save
 * cardID cardID To modify a card, we need the card's id but also the id of the timeline the card belongs to.
 * no response value expected for this operation
 **/
exports.editCard = function(body,cardID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * To change properties of a card
 * Send a JSON object specifying the property to edit and its new value to edit the card
 *
 * body Card_editProperties_body JSON object specifying the property to edit and its new value
 * cardID cardID To modify a card, we need the card's id but also the id of the timeline the card belongs to.
 * no response value expected for this operation
 **/
exports.editProperties = function(body,cardID) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * To get a card
 * Ask for the id of the card in parameters and return the desired card
 *
 * cardID cardID To modify a card, we need the card's id but also the id of the timeline the card belongs to.
 * returns byte[]
 **/
exports.getCard = function(cardID) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

