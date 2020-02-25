import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default Model.extend({
    title: attr(),
    lastPost: attr(),
    posters: attr()
});