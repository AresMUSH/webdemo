import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
    chars: computed('model', function() {  
        if (this.get('model.player.id') == 1) {            
            return this.get('model.chars').filter(function(x) { return x.id == 1 || x.id == 2; });
        }
        else
        {
            return [];
        }
    })
});