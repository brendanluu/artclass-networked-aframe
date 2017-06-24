var options = require('./NafOptions');
var util = require('./NafUtil');
var physics = require('./NafPhysics');
var NafLogger = require('./NafLogger');
var Schemas = require('./Schemas');
var NetworkEntities = require('./NetworkEntities');
var NetworkConnection = require('./NetworkConnection');

var naf = {};
naf.app = '';
naf.room = '';
naf.clientId = '';
naf.options = options;
naf.utils = util;
naf.physics = physics;
naf.log = new NafLogger();
naf.schemas = new Schemas();
naf.version = "0.2.0";

var entities = new NetworkEntities();
var connection = new NetworkConnection(entities);
naf.connection = naf.c = connection;
naf.entities = naf.e = entities;

module.exports = window.NAF = naf;