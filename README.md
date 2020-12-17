# Hosting a Full-Stack Application



In this project students will learn how to take a newly developed Full-Stack application built for a retailer and deploy it to a cloud service provider so that it is available to customers. They will use the aws console to start and configure the services the application needs such as a database to store product information and a web server allowing the site to be discovered by potential customers. They will modify their package.json scripts and replace hard coded secrets with environment variables in their code.

After the initial setup, students will learn to interact with the services they started on aws and will deploy manually the application a first time to it. As they get more familiar with the services and interact with them through a CLI, students will gradually understand all the moving parts. 

Students will then register for a free account on CircleCi and connect their Github account to it. Based on the manual steps used to deploy the app, students will write a config.yml file that will make the process reproducible in CircleCi. They will set up the process to be executed automatically based when code is pushed on the main Github branch.

The project will also include writing documentation and runbooks covering the operations of the deployment process. Those runbooks will serve as a way to communicate with future developers and anybody involved in diagnosing outages of the Full-Stack application.

## Getting Started

1. Clone this repo locally into the location of your choice.
1. Open a terminal and navigate to the root of the repo
1. follow the instructions in the installation step

The project can run but is missing some information to connect to the database and storage service. These will be setup during the course of the project

### Dependencies

```
- Node v14.15.1 (LTS) or more recent. While older versions can work it is advisable to keep node to latest LTS version

- npm 6.14.8 (LTS) or more recent, Yarn can work but was not tested for this project

- AWS CLI v2, v1 can work but was not tested for this project

- A RDS database running Postgres.

- A S3 bucket for hosting uploaded pictures.

```

### Installation


Provision the necessary AWS services needed for running the application:




1. In AWS, provision a publicly available RDS database running Postgres. <Place holder for link to classroom article>
1. In AWS, provision a s3 bucket for hosting the uploaded files. <Place holder for tlink to classroom article>
1. Export the ENV variables needed or use a package like [dotnev](https://www.npmjs.com/package/dotenv)/.
1. From the root of the repo, navigate udagram-api folder `cd starter/udagram-api` to install the node_modules `npm install`. After installation is done start the api in dev mode with `npm run dev`.
1. Without closing the terminal in step 1, navigate to the udagram-frontend `cd starter/udagram-frontend` to intall the node_modules `npm install`.  After installation is done start the api in dev mode with `npm run start`.

## Testing

This project contains two different test suite: unit tests and End-To-End tests(e2e). Follow these steps to run the tests.
1. `cd starter/udagram-frontend`
1. `npm run test`
1. `npm run e2e`

There are no Unit test on the back-end

### Unit Tests:

Unit tests are using the Jasmine Framework. 

### End to End Tests:

The e2e tests are using Protractor and Jasmine.

## Project Instructions

todo
## Built With

* [Angular](https://angular.io/) - Single Page Application Framework
* [Node](https://nodejs.org) - Javascript Runtime
* [Express](https://expressjs.com/) - Javascript API Framework

## License

[License](LICENSE.txt)
