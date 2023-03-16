# Bugfender + Vue sample

[Bugfender](https://bugfender.com/) is a game-changing platform that logs every detail your users experience and feeds the data straight to an easy-to-use web console. Bugfender SDK is multi-platform and available for mobile and web apps, so you can use the same tool for all your apps.

## Sample

This repository contains a sample application written in Vue and using Bugfender SDK to collect user logs.

If you plan to use Bugfender SDK on an **vanilla Javascript app**, visit https://github.com/bugfender/BugfenderSDK-JS-Sample

To run the sample:

- `npm ci`: install dependencies
- `npm run dev`: run example dev server

## SDK Installation

Here are the main points to getting Bugfender working on your apps:

- Get an **app key** at [bugfender.com](https://bugfender.com/)
- Install NPM package: `npm i @bugfender/sdk`
- Once initialized, you're ready to use it:

    ```typescript
    // See: `src/main.ts`
    // Initialize: `appKey` is the only required option
    import { Bugfender } from '@bugfender/sdk'

    Bugfender.init({
        appKey: '<YOUR_APP_KEY_HERE>',
        // apiURL: 'https://api.bugfender.com',
        // baseURL: 'https://dashboard.bugfender.com',
        // deviceName: '',
        // overrideConsoleMethods: true,
        // printToConsole: true,
        // registerErrorHandler: true,
        // logBrowserEvents: true,
        // logUIEvents: true,
        // version: '',
        // build: '',
    })

    // See: `src/App.vue`
    // Later on your code Bugfender can be used
    import { Bugfender } from '@bugfender/sdk'

    Bugfender.log('Hello world!');
    ```

    **⚠️ Remember to change `<YOUR_APP_KEY_HERE>`** with the app key of your app. It's also recommended to add version & build numbers.

### Handling crashes

Vue registers a global error handler that overrides Bugfenders default global error handler. So, to catch unhandled errors and report them to Bugfender you'll need a custom Vue `errorHandler`. This repository contains an example on how to implement this, you just need to set `errorHandler` on the Vue `app` instance:

```typescript
// See: `src/main.ts`
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
```

- [See Vue documentation](https://vuejs.org/api/application.html#app-config-errorhandler).

## More information

### Docs

For more information on all methods available, please go to the [Bugfender Web SDK reference documentation](https://js.bugfender.com/).

### SDK status

The SDK is suitable for production. Please feel free to open an issue or contact us at [bugfender.com](https://bugfender.com).
