import Route from '@ember/routing/route';

export default Route.extend({
  model(params) {
    return {
        chars: this.store.peekAll('character'),
        player: this.store.peekRecord('player', params.player_id )
      };
  }
});