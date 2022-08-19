// this is just a test to show the structure

// exports.emailExists = require('./emailExists.js');
// exports.createUser = require('./createUser.js');
// exports.matchPassword = require('./matchPassword.js');

exports.getNote = require("./getNote.ts");
exports.updateNote = require("./updateNote.ts");
exports.getTripID = require('./getTripID.js');
exports.postCities = require("./postCities.ts");
exports.shareTrip = require("./shareTrip.js");

exports.addPOI = require("./addPOI.ts");

//Trip Viewer / Editor routes
exports.getTripById = require('./getTripById.ts');
exports.deleteDestination = require('./deleteDestination.ts')
exports.deletePOI = require('./deletePOI.ts')

exports.updateDestinationOrder = require('./updateDestinationOrder');
exports.updatePOIOrder = require('./updatePOIOrder');

exports.getUserTrips = require("./getUserTrips.ts");
exports.getArchiveTrips = require("./getArchiveTrips.ts");
exports.postNewTrip = require("./postNewTrip.ts");

exports.deleteTrip = require("./deleteTrip.js");
exports.recoverTrip = require("./recoverTrip.js");


exports.getActiveTripId = require("./getActiveTripId.ts");

