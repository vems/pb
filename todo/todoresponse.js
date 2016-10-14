/**
 * @fileoverview
 * @enhanceable
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!

goog.provide('proto.pb.TodoResponse');

goog.require('jspb.Message');


/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.pb.TodoResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.pb.TodoResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  proto.pb.TodoResponse.displayName = 'proto.pb.TodoResponse';
}


if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto suitable for use in Soy templates.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     com.google.apps.jspb.JsClassTemplate.JS_RESERVED_WORDS.
 * @param {boolean=} opt_includeInstance Whether to include the JSPB instance
 *     for transitional soy proto support: http://goto/soy-param-migration
 * @return {!Object}
 */
proto.pb.TodoResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.pb.TodoResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Whether to include the JSPB
 *     instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.pb.TodoResponse} msg The msg instance to transform.
 * @return {!Object}
 */
proto.pb.TodoResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: msg.getId(),
    title: msg.getTitle(),
    completed: msg.getCompleted()
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Creates a deep clone of this proto. No data is shared with the original.
 * @return {!proto.pb.TodoResponse} The clone.
 */
proto.pb.TodoResponse.prototype.cloneMessage = function() {
  return /** @type {!proto.pb.TodoResponse} */ (jspb.Message.cloneMessage(this));
};


/**
 * optional int64 id = 1;
 * @return {number}
 */
proto.pb.TodoResponse.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldProto3(this, 1, 0));
};


/** @param {number} value  */
proto.pb.TodoResponse.prototype.setId = function(value) {
  jspb.Message.setField(this, 1, value);
};


/**
 * optional string title = 2;
 * @return {string}
 */
proto.pb.TodoResponse.prototype.getTitle = function() {
  return /** @type {string} */ (jspb.Message.getFieldProto3(this, 2, ""));
};


/** @param {string} value  */
proto.pb.TodoResponse.prototype.setTitle = function(value) {
  jspb.Message.setField(this, 2, value);
};


/**
 * optional bool completed = 3;
 * Note that Boolean fields may be set to 0/1 when serialized from a Java server.
 * You should avoid comparisons like {@code val === true/false} in those cases.
 * @return {boolean}
 */
proto.pb.TodoResponse.prototype.getCompleted = function() {
  return /** @type {boolean} */ (jspb.Message.getFieldProto3(this, 3, false));
};


/** @param {boolean} value  */
proto.pb.TodoResponse.prototype.setCompleted = function(value) {
  jspb.Message.setField(this, 3, value);
};


