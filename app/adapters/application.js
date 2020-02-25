//import DS from 'ember-data';
//export default DS.JSONAPIAdapter.extend({
//});


import { underscore } from '@ember/string';


import Ember from 'ember';
import JSONAPIAdapter from '@ember-data/adapter/json-api';


const { String: {
  pluralize
} } = Ember;

export default JSONAPIAdapter.extend({

  pathForType(type) {
    return pluralize(underscore(type));
  }
});