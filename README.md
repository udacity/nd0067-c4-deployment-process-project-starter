# Udagram

This application is a fairly simple application that includes all the major components of a Full-Stack web application. You can use the application when you practice Amazon Web Services(AWS) and circleCI. The code of the application is mostly provided by Udacity. Please refer to [this] (https://github.com/udacity/nd0067-c4-deployment-process-project-starter)
for getting original starter code for deployment practicing. 

## Installation

Provision the necessary AWS services needed for running the application:

1. In AWS, provision a publicly available RDS database running Postgres. <Place holder for link to classroom article>
1. In AWS, provision a s3 bucket for hosting the uploaded files. <Place holder for tlink to classroom article>
1. Export the ENV variables needed or use a package like [dotnev](https://www.npmjs.com/package/dotenv)/.
1. From the root of the repo, run `npm run backend:install` to install the node_modules. After installation is done, navigate to udagram-api folder by running `cd udagram-api` and start the api in dev mode with `npm run dev`.
1. Without closing the terminal in step 1, run `npm run frontend:install` to intall the node_modules. After installation is done, navigate to the udagram-frontend by running `cd udagram-frontend` and start the frontend in dev mode with `npm run start`.

## Requirement of dependencies

```
- Node v14.15.1 (LTS) or more recent. While older versions can work it is advisable to keep node to latest LTS version

- npm 6.14.8 (LTS) or more recent, Yarn can work but was not tested for this project

- AWS CLI v2, v1 can work but was not tested for this project

- A RDS database running Postgres.

- A S3 bucket for hosting uploaded pictures.

```

## Testing

This project contains two different test suite: unit tests and End-To-End tests(e2e). Follow these steps to run the tests.

1. `cd udagram-frontend`
1. `npm run test`
1. `npm run e2e`

Please aware of this project has no Unit test on the back-end.

## Others
### Unit Tests:

Unit tests are using the Jasmine Framework.

### End to End Tests:

The e2e tests are using Protractor and Jasmine.

### Built With

- [Angular](https://angular.io/)
- [Node](https://nodejs.org)
- [Express](https://expressjs.com/)
