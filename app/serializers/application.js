import DS from 'ember-data';

//export default DS.JSONAPISerializer.extend({
//  payloadKeyFromModelName(modelName) {
//    return singularize(capitalize(modelName));
//  }
//});


export default DS.RESTSerializer.extend({
  isNewSerializerAPI: true,
  normalizeResponse: function(store, primaryType, payload, id, requestType) {
    return this._super(store, primaryType, {[primaryType.modelName]: payload}, id, requestType);
  },
  serializeIntoHash: function(hash, type, record) {
    var propertyName, jsonRecord = record.toJSON();
    for (propertyName in jsonRecord) {
      hash[propertyName] = jsonRecord[propertyName];
    }
  }
});