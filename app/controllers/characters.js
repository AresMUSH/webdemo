import Ember from 'ember';

export default Ember.Controller.extend({
    chars_for_faction: function(faction) { 
        return this.get('model').filter(function(c) { 
            return c.get('faction') === faction; }
           );
    },
    factions: function() {  
        return [
            { name: 'Navy', chars: this.chars_for_faction('Navy'), active: true, blurb: 'Something about the Navy.' },
            { name: 'Marines', chars: this.chars_for_faction('Marines'), active: false,
        blurb: 'Something about the marines.' }
        ];
    }.property('model')
});