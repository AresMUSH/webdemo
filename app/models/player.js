import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default Model.extend({
    name: attr(),
    profile_image: attr()
});