import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default Model.extend({
    name: attr(),
    background: attr(),
    rank: attr(),
    age: attr(),
    faction: attr(),
    position: attr(),
    profile_image: attr(),
    played_by: attr(),
    gender: attr(),
    origin: attr(),
    damage: attr()
});