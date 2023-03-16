import { Bugfender } from '@bugfender/sdk'
import { createApp } from 'vue'
import App from './App.vue'

import './assets/main.css'

Bugfender.init({
    appKey: '<YOUR_APP_KEY_HERE>'
})

const app = createApp(App)

// Register global error handler
app.config.errorHandler = (err, _, info) => {
    if (err instanceof Error) {
        Bugfender.sendCrash(
            `${err.name}: ${err.message ?? 'N/A'}`,
            `Vue error info: ${info}\nStack: ${err.stack ?? 'N/A'}`,
        )
    } else {
        Bugfender.sendCrash(String(err), `Vue error info: ${info}`)
    }
}

app.mount('#app')
