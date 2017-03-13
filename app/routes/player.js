import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    return {
        chars: this.get('store').peekAll('character'),
        player: this.get('store').peekRecord('player', params.player_id )
      }
  }
});