import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    lastPost: DS.attr(),
    posters: DS.attr()
});