//import DS from 'ember-data';
//export default DS.JSONAPIAdapter.extend({
    //});


import Ember from 'ember';
import DS from 'ember-data';
import DataAdapterMixin from 'ember-simple-auth/mixins/data-adapter-mixin';

//import JSONAPIAdapter from 'ember-data/adapters/json-api';

//export default DS.RESTAdapter.extend({
//  host: 'http://localhost:4203',
//  namespace: '/'
//});

const { String: { pluralize, underscore } } = Ember;

//export default JSONAPIAdapter.extend({
//  pathForType(type) {
//    return pluralize(underscore(type));
// }

//});


export default DS.JSONAPIAdapter.extend(DataAdapterMixin, {
  authorizer: 'authorizer:token',
    host: 'http://localhost:4203',
    namespace: ''
});