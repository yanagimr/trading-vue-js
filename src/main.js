import Vue from 'vue'
import App from './App.vue'
import store from './store/store.js'

// MOB_DEBUG=true npm run test - Enables mobile debugging
// (sending console output to the webpack terminal)
if (MOB_DEBUG) {
    console.log = debug
    console.error = debug
    console.warn = debug
}

new Vue({
  el: '#app',
  store,
  render: h => h(App)
})

function debug(...argv) {
    fetch('/debug?argv=' + JSON.stringify(argv))
}
