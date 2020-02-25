import Ember from 'ember';
import { A } from '@ember/array';

export default Ember.Route.extend({
    model() {
       this.get('store').push({
            data: [
                {
                    id: 1,
                    type: 'forum-topic',
                    attributes: {
                        title: 'Furious Debate',
                        lastPost: 'Barnacles',
                        posters: A([ 'Faraday', 'Barnacles' ])
                    }
                },
                
                {
                    id: 2,
                    type: 'forum-topic',
                    attributes: {
                        title: 'Best Game Evar',
                        lastPost: 'Faraday',
                        posters: A([ 'Barnacles', 'Phoebe', 'Faraday' ])
                    }
                },
                
                {
                id: 1,
                type: 'character',
                attributes: {
                    name: 'Luka Hale',
                    rank: 'Lieutenant',
                    faction: 'Marines',
                    position: 'Rifleman',
                    age: '32',
                    profile_image: 'Hale.jpg',
                    played_by: 'Assaad Bouab',
                    gender: 'Male'
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
                    profile_image: 'Kallas.jpg',
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
                    icon: 'university',
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
            
            {
                id: 3,
                type: 'player',
                attributes: {
                    name: 'Phoebe',
                    profile_image: 'Phoebe.jpg'
                },
                relationships: {}
            },
  
        ]
    }); 
}
});