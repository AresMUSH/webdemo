import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
    chars_for_faction: function(faction) { 
        return this.model.filter(function(c) { 
            return c.get('faction') === faction; }
           );
    },
    factions: computed('model', function() {  
        return [
            { name: 'Navy', chars: this.chars_for_faction('Navy'), active: true, blurb: 'Something about the Navy.' },
            { name: 'Marines', chars: this.chars_for_faction('Marines'), active: false,
        blurb: 'Something about the marines.' }
        ];
    })
});