import { Bugfender } from '@bugfender/sdk'
import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

Bugfender.init({
    appKey: '<YOUR_APP_KEY_HERE>'
})

createApp(App).mount('#app')
