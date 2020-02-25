import Model, { attr } from '@ember-data/model';

export default Model.extend({
    title: attr(),
    icon: attr(),
    description: attr(),
    text: attr()
});