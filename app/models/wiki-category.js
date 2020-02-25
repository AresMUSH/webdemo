import Model, { attr, belongsTo, hasMany } from '@ember-data/model';

export default Model.extend({
    title: attr(),
    icon: attr(),
    description: attr(),
    text: attr()
});