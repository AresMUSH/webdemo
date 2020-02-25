import { computed } from '@ember/object';
import EmberObject from '@ember/object';
import Controller from '@ember/controller';

String.prototype.capitalizeFirstLetter = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
};

export default Controller.extend({
    fs3attrs: [],
    fs3action: null,
    attrErrors: [],
    skillErrors: [],
    langskills: [],
    bgskills: [],
    powerLevel: 0,
    
    
    resetSkills: function() {
        let bg = [
            EmberObject.create( { name: "Enter A Skill Name" , rating: 1, ratingName: 'Interest' })
        ];
        this.set('bgskills', bg);
        
        let lang = [
            EmberObject.create( { name: "Standard" , rating: 3, ratingName: 'Fluent' }),
            EmberObject.create( { name: "Leonese" , rating: 0, ratingName: 'Unskilled' }),
            EmberObject.create( { name: "Sagittaran" , rating: 0, ratingName: 'Unskilled' }),
            EmberObject.create( { name: "Scoripian" , rating: 0, ratingName: 'Unskilled' }),
            EmberObject.create( { name: "Gemenese" , rating: 0, ratingName: 'Unskilled' }),
            EmberObject.create( { name: "Celtan" , rating: 0, ratingName: 'Unskilled' })
            
        ];
        this.set('langskills', lang);
        
        let attrs = [
            EmberObject.create( { name: "Brawn", desc: "Physical strength and toughness.", rating: 2, ratingName: 'Average' }),
            EmberObject.create( { name: "Reflexes", desc: "Reflexes, dexterity, and hand-eye coordination.", rating: 2, ratingName: 'Average' }),
            EmberObject.create( { name: "Grit", desc: "Willpower and determination.", rating: 2, ratingName: 'Average' }),
            EmberObject.create( { name: "Wits", desc: "Practical intelligence, inventiveness and creativity.", rating: 2, ratingName: 'Average' }),
            EmberObject.create( { name: "Perception", desc: "Noticing things and being aware of your surroundings.", rating: 2, ratingName: 'Average' }),
            EmberObject.create( { name: "Presence", desc: "Charisma and beauty.", rating: 2, ratingName: 'Average' }),
        ];
        this.set('fs3attrs', attrs);
        
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
        
        this.set('fs3action', skills);
    },     
    showAttrErrors: computed('attrErrors', function() {
        if (this.attrErrors.length > 0) {
            return true;
        }
        return false;
    }),

    showSkillErrors: computed('skillErrors', function() {
        if (this.skillErrors.length > 0) {
            return true;
        }
        return false;
    }),
        
    attrPoints: function() {
        let totalAttrs = 0;
        let fa = this.fs3attrs;
        
        Object.keys(fa).forEach(function (key) {
            let rating = fa[key]['rating'];
            if (rating > 2) {
                totalAttrs = totalAttrs + rating - 2;
            } 
        });
        return totalAttrs * 2;
    },
    
    skillPoints: function() {
        let totalSkills = 0;
        let fa = this.fs3action;
        
        Object.keys(fa).forEach(function (key) {
            let rating = fa[key]['rating'];
            if (rating > 1) {
                totalSkills = totalSkills + rating - 1;
            } 
        });
        
        fa = this.bgskills;
        let bgPoints = 0;
                Object.keys(fa).forEach(function (key) {
                    let rating = fa[key]['rating'];
                    bgPoints = bgPoints + rating;
                });
        
        bgPoints = bgPoints - 6;
        if (bgPoints < 0) {
            bgPoints = 0;
        }
        
        totalSkills = totalSkills + bgPoints;
         
        fa = this.langskills;
        let langPoints = 0;
                Object.keys(fa).forEach(function (key) {
                    let rating = fa[key]['rating'];
                    langPoints = langPoints + rating;
                });
        
        let freeLangs = 5;
        langPoints = langPoints - freeLangs;
        if (langPoints < 0) {
            langPoints = 0;
        }
                   
        totalSkills = totalSkills + langPoints;
        
        
        return totalSkills;
    },    
    countHigh: function(stats, highLimit) {     
        let high = 0;
        Object.keys(stats).forEach(function (key) {
            let rating = stats[key]['rating'];
            if (rating >= highLimit) {
                high = high + 1;
            }                
        });
        return high;
    },
    validateChar: function() {
        this.set('attrErrors', []);
        this.set('skillErrors', []);
        
        let highAttrs = this.countHigh(this.fs3attrs, 5);
        let highAttrs2 = this.countHigh(this.fs3attrs, 4);
        let highSkills = this.countHigh(this.fs3action, 7);
        let highSkills2 = this.countHigh(this.fs3action, 5);
        
        if (highAttrs > 1)
        {
            //this.notifications.error('You can only have one attribute at 5.');
            this.attrErrors.push('You can only have one attribute at 5.  If you think this limit is bad, please send feedback when you are done.');
        }
        
        if (highAttrs2 > 2)
        {
            //this.notifications.error('You can only have one attribute at 5.');
            this.attrErrors.push('You can only have two attributes at 4+.  If you think this limit is bad, please send feedback when you are done.');
        }

        if (highSkills > 1)
        {
            this.skillErrors.push('You can only have 1 skill at 7+.  If you think this limit is bad, please send feedback when you are done.');
        }
                
        if (highSkills2 > 3)
        {
            this.skillErrors.push('You can only have 3 skills at 5+.  If you think this limit is bad, please send feedback when you are done.');
        }
        
        let totalAttrs = this.attrPoints();
        let totalSkills = this.skillPoints();
        
        if (totalAttrs > 16)
        {
            //this.notifications.error('You have too many attribute points.');
            this.attrErrors.push('You have too many points in attributes.  If you think this limit is bad, please send feedback when you are done.');
        }
        
        this.set('powerLevel', totalSkills + totalAttrs);
    },
    
    actions: {
        addBackgroundSkill() {
            this.bgskills.pushObject( EmberObject.create( { name: "Skill Name" , rating: 1, ratingName: 'Interest' }) );  
            this.validateChar();
        },
        addLanguage() {
            this.langskills.pushObject( EmberObject.create( { name: "Language Name" , rating: 1, ratingName: 'Beginner' }) );  
            this.validateChar();
        },
        abilityChanged() {
            this.validateChar();
        },
        
        
        submit() {
        }
    }
});
