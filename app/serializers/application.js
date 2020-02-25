import JSONAPISerializer from '@ember-data/serializer/json-api';

export default JSONAPISerializer.extend({
  payloadKeyFromModelName(modelName) {
    return singularize(capitalize(modelName));
  }
});