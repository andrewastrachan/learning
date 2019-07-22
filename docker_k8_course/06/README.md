# Section 6: Creating a Production-Grade Workflow

## [59] Development Workflow
Workflow we're going to automate (standard)
Development -> Testing -> Deployment -> Development

**! In this section, we're implementing the standard production workflow**

## [60] Flow Specifics
Specifics of the workflow

Github repo (using this repo, will create feature branch of this guy):
- feature 'docker_k8_06_feature'
- master

* We'll make a PR -> master
* Workflow to Travis CI (tests)
* Travis CI will deploy to AWS assuming passing tests; prod will use AWS Elastic Beanstalk

**! We're setting up testing using Travis CI and deploying to AWS Elastic Beanstalk**

## [61] Docker's Purpose
**! While docker is not necessary for the CI workflow, it makes executing these tasks much easier.**

## [62] Project Generation
**! Focus of this section is not the code running in the container, but we'll be testing and deploying a react FE. Project generator is available via npm`**

## [63] More on Project Generation
**! download project gen tool with `npm install -g create-react-app` to generate `create-react-app frontend`**

## [64] Necessary Commands
```bash
npm run start # development only command; development server, no appropriate for production
npm run test
npm run build # builds a production version of our application
```
**! The above commands are the standard list we will be using for this section**