import Model, { attr } from '@ember-data/model';

export default Model.extend({
    title: attr(),
    lastPost: attr(),
    posters: attr()
});