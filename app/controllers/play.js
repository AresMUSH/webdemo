import Ember from 'ember';

export default Ember.Controller.extend({
    connected: false,
    consoleText: '',
    text1: '',
    text2: '',
    windowVisible: true,
    
    idleKeepalive: function() {
    },
    
    onMessage: function(self, evt) {
        
    },
    onConnect: function(self) {
        document.getElementById("sendMsg").focus();
        self.set('connected', true);        
    },
    onDisconnect: function(self) {
        self.set('connected', false);
    },

    showDisconnect: function() {
        return this.get('connected');
    }.property('connected'),
    
    showConnect: function() {  
        return !this.get('connected');
    }.property('connected'),
    
    sendInput: function(msg) {

    },
    
    actions: {
        connect() {
           

            },
        disconnect() {
        },
        sendMsg1() {
        },
        sendMsg2() {
        }
        }
    });