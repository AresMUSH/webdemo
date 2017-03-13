import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    icon: DS.attr(),
    description: DS.attr(),
    text: DS.attr()
});