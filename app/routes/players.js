import Ember from 'ember';
import { A } from '@ember/array';
import EmberObject from '@ember/object';

export default Ember.Route.extend({
  model() {
    return this.get('store').peekAll('player');    
  }
});