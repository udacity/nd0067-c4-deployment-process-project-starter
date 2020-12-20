# Hosting a Full-Stack Application

### **You can use you own project completed in previous courses or use the provided Udagram app for completing this final project.**

---

In this project students will learn how to take a newly developed Full-Stack application built for a retailer and deploy it to a cloud service provider so that it is available to customers. They will use the aws console to start and configure the services the application needs such as a database to store product information and a web server allowing the site to be discovered by potential customers. They will modify their package.json scripts and replace hard coded secrets with environment variables in their code.

After the initial setup, students will learn to interact with the services they started on aws and will deploy manually the application a first time to it. As they get more familiar with the services and interact with them through a CLI, students will gradually understand all the moving parts.

Students will then register for a free account on CircleCi and connect their Github account to it. Based on the manual steps used to deploy the app, students will write a config.yml file that will make the process reproducible in CircleCi. They will set up the process to be executed automatically based when code is pushed on the main Github branch.

The project will also include writing documentation and runbooks covering the operations of the deployment process. Those runbooks will serve as a way to communicate with future developers and anybody involved in diagnosing outages of the Full-Stack application.
