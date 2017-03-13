import Ember from 'ember';

export default Ember.Controller.extend({
    chars: function() {  
        if (this.get('model.player.id') == 1) {            
            return this.get('model.chars').filter(function(x) { return x.id == 1 || x.id == 2; });
        }
        else
        {
            return [];
        }
    }.property('model')
});