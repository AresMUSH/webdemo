import Ember from 'ember';

export default Ember.Route.extend({
    model() {
        this.get('store').push({
            data: [{
                id: 1,
                type: 'character',
                attributes: {
                    name: 'Cate Rhodes',
                    rank: 'Lance Corporal',
                    faction: 'Marines',
                    position: 'Combat Medic',
                    age: '30',
                    profile_image: 'cate.jpg',
                    played_by: 'Moon Bloodgood',
                    gender: 'Female'
                },
                relationships: {}
            }, {
                id: 2,
                type: 'character',
                attributes: {
                    name: 'Diego Kallas',
                    rank: 'Major',
                    faction: 'Navy',
                    position: 'Viper Pilot',
                    age: '35',
                    profile_image: 'kallas.jpg',
                    played_by: 'Jon Seda',
                    gender: 'Male'
                },
                relationships: {}
            },
            {
                id: 3,
                type: 'character',
                attributes: {
                    name: 'Julia Collins',
                    rank: 'Colonel',
                    faction: 'Navy',
                    position: 'Doctor',
                    age: '45',
                    profile_image: 'Collins.jpg',
                    played_by: 'Jane Seymour',
                    gender: 'Female'
                },
                relationships: {}
            },
            {
                id: 4,
                type: 'character',
                attributes: {
                    name: 'Jacob Ryan',
                    rank: 'Colonel',
                    faction: 'Navy',
                    position: 'XO',
                    age: '50',
                    profile_image: 'Ryan.jpg',
                    played_by: 'Kevin Costner',
                    gender: 'Male'
                },
                relationships: {}
            },
            {
                id: 1,
                type: 'wiki-category',
                attributes: {
                    title: 'Setting',
                    description: 'Game setting',
                    icon: 'globe',
                    text: 'Blah blah setting stuff.'
                },
                relationships: {}
            },
            {
                id: 2,
                type: 'wiki-category',
                attributes: {
                    title: 'Policies',
                    description: 'Game rules',
                    icon: 'bank',
                    text: 'Blah blah rules stuff.'
                },
                relationships: {}
            },
            {
                id: 3,
                type: 'wiki-category',
                attributes: {
                    title: 'System',
                    description: 'Game system',
                    icon: 'cubes',
                    text: 'Blah blah system stuff.'
                },
                relationships: {}
            },
            {
                id: 1,
                type: 'player',
                attributes: {
                    name: 'Faraday',
                    profile_image: 'Faraday.jpg'
                },
                relationships: {}
            },
            {
                id: 2,
                type: 'player',
                attributes: {
                    name: 'Barnacles',
                    profile_image: 'Barnacles.jpg'
                },
                relationships: {}
            },
  
        ]
    });
}
});