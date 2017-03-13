import Ember from 'ember';

export default Ember.Component.extend({
    bgskills: function() {
        
        let bg = [
            Ember.Object.create( { name: "Some skill" , rating: 2, ratingName: 'Proficiency' }),
            Ember.Object.create( { name: "Another skill" , rating: 1, ratingName: 'Interest' }),            
            
        ];
        return bg;
    }.property(),
    
    langskills: function() {
        
        let lang = [
            Ember.Object.create( { name: "Standard" , rating: 3, ratingName: 'Fluent' })
            
        ];
        return lang;
    }.property(),
    
    fs3attrs: function() {
        
        let attrs = [
            Ember.Object.create( { name: "Brawn", desc: "Physical strength and toughness." }),
            Ember.Object.create( { name: "Reflexes", desc: "Reflexes, dexterity, and hand-eye coordination." }),
            Ember.Object.create( { name: "Grit", desc: "Willpower and determination." }),
            Ember.Object.create( { name: "Wits", desc: "Practical intelligence, inventiveness and creativity." }),
            Ember.Object.create( { name: "Perception", desc: "Noticing things and being aware of your surroundings." }),
            Ember.Object.create( { name: "Presence", desc: "Charisma and beauty." }),
        ];
        attrs.forEach(function (attr) {
            attr.set('rating', 2);
            attr.set('ratingName', 'Average');
        });
        return attrs;
    }.property(),
    
    fs3action: function() {
        
        let skills = [
        Ember.Object.create( { name: "Alertness", desc: "Noticing things and being aware of your surroundings. (Perception)" }),
        Ember.Object.create( { name: "Athletics", desc: "General running, jumping, climbing, etc. (Brawn)" }),
        Ember.Object.create( { name: "Composure", desc: "Coolness under pressure. (Grit)" }),
        Ember.Object.create( { name: "Demolitions", desc: "Blowing stuff up. (Wits)" }),
        Ember.Object.create( { name: "Firearms", desc: "Shooting guns. (Reflexes)" }),
        Ember.Object.create( { name: "Gunnery", desc: "Vehicle and heavy weapons. (Reflexes)" }),
        Ember.Object.create( { name: "Medicine", desc: "Tending to the ill and injured. (Wits)" }),
        Ember.Object.create( { name: "Melee", desc: "Fighting with fists, knives, and hand-to-hand weapons. (Brawn)" }),
        Ember.Object.create( { name: "Piloting", desc: "Flying spacecraft. (Reflexes)" }),
        Ember.Object.create( { name: "Stealth", desc: "Being sneaky. (Reflexes)" }),
        Ember.Object.create( { name: "Technician", desc: "General mechanics/electronics and fixing things. (Wits)" })
        ];      
        
        skills.forEach(function (skill) {
            skill.set('rating', 1);
            skill.set('ratingName', 'Everyman');
        });
        
        return skills;
    }.property()
    
   
});
