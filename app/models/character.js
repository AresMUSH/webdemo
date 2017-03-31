import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    rank: DS.attr(),
    age: DS.attr(),
    faction: DS.attr(),
    position: DS.attr(),
    profile_image: DS.attr(),
    played_by: DS.attr(),
    gender: DS.attr(),
    origin: DS.attr()
});