// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyBnWKsST6jmH5LpVjAu8_B-4XRQ4Y5rayM",
    authDomain: "booknotes-db8f5.firebaseapp.com",
    databaseURL: "https://booknotes-db8f5.firebaseio.com",
    projectId: "booknotes-db8f5",
    storageBucket: "booknotes-db8f5.appspot.com",
    messagingSenderId: "945116369965"
  }
};
