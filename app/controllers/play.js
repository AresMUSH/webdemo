import { computed } from '@ember/object';
import Controller from '@ember/controller';

export default Controller.extend({
    connected: false,
    consoleText: '',
    text1: '',
    text2: '',
    windowVisible: true,
    
    idleKeepalive: function() {
    },
    
    showDisconnect: computed('connected', function() {
        return this.connected;
    }),
    
    showConnect: computed('connected', function() {  
        return !this.connected;
    }),
    
    sendInput: function() {

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