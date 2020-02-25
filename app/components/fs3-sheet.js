import { computed } from '@ember/object';
import EmberObject from '@ember/object';
import Component from '@ember/component';

export default Component.extend({
    bgskills: computed(function() {
        
        let bg = [
            EmberObject.create( { name: "Some skill" , rating: 2, ratingName: 'Proficiency' }),
            EmberObject.create( { name: "Another skill" , rating: 1, ratingName: 'Interest' }),            
            
        ];
        return bg;
    }),
    
    langskills: computed(function() {
        
        let lang = [
            EmberObject.create( { name: "Standard" , rating: 3, ratingName: 'Fluent' })
            
        ];
        return lang;
    }),
    
    fs3attrs: computed(function() {
        
        let attrs = [
            EmberObject.create( { name: "Brawn", desc: "Physical strength and toughness." }),
            EmberObject.create( { name: "Reflexes", desc: "Reflexes, dexterity, and hand-eye coordination." }),
            EmberObject.create( { name: "Grit", desc: "Willpower and determination." }),
            EmberObject.create( { name: "Wits", desc: "Practical intelligence, inventiveness and creativity." }),
            EmberObject.create( { name: "Perception", desc: "Noticing things and being aware of your surroundings." }),
            EmberObject.create( { name: "Presence", desc: "Charisma and beauty." }),
        ];
        attrs.forEach(function (attr) {
            attr.set('rating', 2);
            attr.set('ratingName', 'Average');
        });
        return attrs;
    }),
    
    fs3action: computed(function() {
        
        let skills = [
        EmberObject.create( { name: "Alertness", desc: "Noticing things and being aware of your surroundings. (Perception)" }),
        EmberObject.create( { name: "Athletics", desc: "General running, jumping, climbing, etc. (Brawn)" }),
        EmberObject.create( { name: "Composure", desc: "Coolness under pressure. (Grit)" }),
        EmberObject.create( { name: "Demolitions", desc: "Blowing stuff up. (Wits)" }),
        EmberObject.create( { name: "Firearms", desc: "Shooting guns. (Reflexes)" }),
        EmberObject.create( { name: "Gunnery", desc: "Vehicle and heavy weapons. (Reflexes)" }),
        EmberObject.create( { name: "Medicine", desc: "Tending to the ill and injured. (Wits)" }),
        EmberObject.create( { name: "Melee", desc: "Fighting with fists, knives, and hand-to-hand weapons. (Brawn)" }),
        EmberObject.create( { name: "Piloting", desc: "Flying spacecraft. (Reflexes)" }),
        EmberObject.create( { name: "Stealth", desc: "Being sneaky. (Reflexes)" }),
        EmberObject.create( { name: "Technician", desc: "General mechanics/electronics and fixing things. (Wits)" })
        ];      
        
        skills.forEach(function (skill) {
            skill.set('rating', 1);
            skill.set('ratingName', 'Everyman');
        });
        
        return skills;
    })
    
   
});
