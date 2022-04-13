# Bugfender

Bugfender is a game-changing platform that logs every detail your users experience and feeds the data straight to an easy-to-use web console. Bugfender SDK is multi-platform and available for mobile and web apps, so you can use the same tool for all your apps.

## Bugfender SDK Vue.js Sample

This repository contains a sample application written in HTML and Vue.js framework and using Bugfender SDK to collect user logs.

If you plan to use Bugfender SDK on an **vanilla Javascript app**, visit https://github.com/bugfender/BugfenderSDK-JS-Sample

### SDK Installation

Here are the main points to getting Bugfender working on your apps:

* Get an app key at [bugfender.com](https://bugfender.com/)
* Import Bugfender SDK JavaScript file in your `<head>` tag.

```html
<script defer src="https://js.bugfender.com/bugfender-v2.js"></script>
```

* Initialize on your script

```javascript
// Later on your JavaScript code
// Initialize. `appKey` is the only required option.
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
});

// Bugfender now can be used
Bugfender.log('Hello world!');
```

Remember to change `<YOUR_APP_KEY_HERE>` with the app key of your app and also your version & build numbers.

### Using Bugfender

After you have initialized the SDK, you can start using it:

```javascript
Bugfender.log('This is a log');
```

### Handling crashes

Vue.js registers a global error handler that overrides Bugfenders default global error handler. So, to catch unhandled errors and report them to Bugfender you'll need a custom Vue `errorHandler`. This repository contains an example on how to implement this, you just need to set `errorHandler` on the Vue `app` instance:

    app.config.errorHandler = function (msg, vm, trace) {
      Bugfender.sendCrash('Error: ' + msg, ' VUE Error:' + trace);
    } 

- [See Vue documentation](https://vuejs.org/v2/api/#errorHandler).

## More information

### Docs

For more information on all methods available, please go to the [Bugfender JS SDK reference documentation](https://js.bugfender.com/).

### SDK status

The SDK is suitable for production. Please feel free to open an issue or contact us at [bugfender.com](https://bugfender.com) .
