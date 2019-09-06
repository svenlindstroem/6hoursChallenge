### 6 h challenge
based on meteor pup boilerplate
[Read the Documentation](https://cleverbeagle.com/pup)

How to run

1. Install Meteor
```
$ curl https://install.meteor.com/ | sh
```

2. Install Dependencies 
```
$ meteor npm install
```
3. 
```
$ npm run dev
```

4. hit http://localhost:3000


5. Sign up with a new user account

#### test

```
$ npm run test
```

Runs all [Jest](https://jestjs.io/) test suites in the app once and then quits.

#### test-watch

```
$ npm run test-watch
```

Runs all [Jest](https://jestjs.io/) test suites in the app in watch mode and reruns whenever a test or file in the app changes.

#### test-e2e

```
$ npm run test-e2e
```

Runs all end-to-end tests using [TestCafe](https://github.com/DevExpress/testcafe) once and then quits.

### 6. Testing

There are two types of testing performed in relation to the app: manual and automated. Manual testing is any testing where you're _manually_ clicking around the app yourself to test things out. Automated testing is any where you're relying on the automated test suites in the app to test things out.

#### Test Users

When you start the app for the first time in development and staging mode, we create a set of test users to use when testing different permissions:

| Email Address | Password | Roles | Notes |
|:----------------|:--------:|:-------:|:-------------------------------|
| admin@admin.com | password | `admin` | Full access to the application.
| user+1@test.com | password | `user`  | Access to user-only features.
| user+2@test.com | password | `user`  | Access to user-only features.
| user+3@test.com | password | `user`  | Access to user-only features.
| user+4@test.com | password | `user`  | Access to user-only features.
| user+5@test.com | password | `user`  | Access to user-only features.

#### Test Data

When you start the app for the first time, we create test data for all collections in the application. If you ever want to "start over" with fresh data in your `development` environment, stop the app and in your terminal run:

```
meteor reset
```

Upon restarting the app, the databased will be reseeded with the default test data.