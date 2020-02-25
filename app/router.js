import EmberRouter from '@ember/routing/router';
import config from './config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function() {
  this.route('home', { path: '/' });
  this.route('login');
  this.route('signup');
  this.route('intro');
  this.route('characters');
  this.route('wiki');
  this.route('scenes');
  this.route('reset-pw');
  this.route('messages');
  this.route('player', { path: '/player/:player_id' });
  this.route('character', { path: '/character/:character_id' });
  this.route('chargen');
  this.route('edit-char', { path: '/edit-char/:character_id' });
  this.route('wiki-category', { path: '/wiki-category/:wiki_category_id' });
  this.route('factions');
  this.route('locations');
  this.route('tutorials');
  this.route('support');
  this.route('forum');
  this.route('play');
  this.route('admin');
  this.route('notifications');
  this.route('location');
  this.route('events');
  this.route('who');
  this.route('account');
  this.route('players');
  this.route('weapons');
  this.route('vehicles');
  this.route('armor');
  this.route('skills');
  this.route('create-scene');
  this.route('scene');
  this.route('running-scenes');
  this.route('forum-topic', { path: '/forum-topic/:forum_topic_id' });
});
