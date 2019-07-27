# Section 7: Continuous Integration and Deployment with AWS

## [82] Services Overview
- Github
- Travis CI
- AWS

**! Standard stuff explaining what each of the services are. Self-explanatory.**

## [83] Github Setup

**! The instructor wants a separate git repo called docker-react.**

## [84] Travis CI Setup

**! We're going to use Travis for both testing and deployment.**

## [85] Travis YML File Configuration

**Instructions in `.travis.yml`:**
1) Tell Travis we need a copy of docker running.
2) Build our image using our `Dockerfile.dev`.
3) Tell Travis how to run our test suite.
4) Tell Travis how to deploy our code to AWS.

```yml
# docker requires sudo
sudo: required
# we need the docker service
services:
  - docker
# what to run for setup
before_install:
  - docker build -t andrewastrachan92/docker-react -f Dockerfile.dev
```

**! The travis.yml file makes integration with docker easy. See above.**

## [86] Fix for Failing Travis Builds

```yml
sudo: required
script:
  - docker run -e CI=true USERNAME/docker-react npm run test
```

**! There were some changes to the `.travis.yml` due to recent jest changes.**

## [87] A Touch More Travis Setup

**! synopsis here**

## [88] Automatic Build Creation

**! synopsis here**

## [89] AWS Elastic Beanstalk

**! synopsis here**

## [90] More on Elastic Beanstalk

**! synopsis here**

## [91] Travis Config for Deployment

**! synopsis here**

## [92] Automated Deployments

**! synopsis here**

## [93] Exposing Ports Through the

**! synopsis here**

## [94] AWS Build Still Failing?

**! synopsis here**

## [95] Workflow With Github

**! synopsis here**

## [96] Redeploy on Pull Request Merge

**! synopsis here**

## [97] Deployment Wrapup

**! synopsis here**

## [98] Environment Cleanup

**! synopsis here**
