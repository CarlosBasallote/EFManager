// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // Initialize Firebase
  firebase:{
    apiKey: "AIzaSyDcsct_-byM3rw5sZyLcWbhgchddTa_hFw",
    authDomain: "efmanager-251bc.firebaseapp.com",
    databaseURL: "https://efmanager-251bc.firebaseio.com",
    projectId: "efmanager-251bc",
    storageBucket: "efmanager-251bc.appspot.com",
    messagingSenderId: "260508425079"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
