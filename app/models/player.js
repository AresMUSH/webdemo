import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr(),
    profile_image: DS.attr()
});