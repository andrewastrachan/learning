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

## [65] Creating the Dev Dockerfile
**! We'll have two Dockerfiles; dev naming convention is `Dockerfile.dev`. We can run it with the `docker run ` + `-f` option: `docker run -f Dockerfile.dev .`**

## [66] Duplicating Dependencies
**! Careful what you copy over to your Docker image. One no-no would be to send your local npm cache to the image. 1) It makes the install slow 2) You end up overwriting the cache there with your local one (bad if you installed in prod mode).**

## [67] Starting the Container
- Remember to port-map using the -p command
- Lame thing here is that we really want the container to show local changes as they happen in dev mode
**! This section reviews a problem noted earlier: Local changes do not show up yet without a rebuild.**

## [68] Quick Note for Windows Users
**! N/A**

## [69] Docker Volumes
How do we get source code changes to update in a running docker container without rebuilding?

Instead of using `COPY` in our `Dockerfile` we'll use docker volumes
- Docker volumes are references to local files
- Like port mapping for storage

```bash
docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <image_id>
```

- `$(pwd)`: shell command encoded in volume, meaning map the pwd into the /app folder

Why can't we just do this?
```bash
docker run -p 3000:3000 -v $(pwd):/app 3bbe8ebfdc95
```
- we're missing our node_modules because we didn't install them locally


**! the `-v` option is the docker volume switch for the docker run command**

## [70] Bookmarking Volumes

- `-v /app/node_modules`: put a bookmark on the node_modules folder
  - meaning we wan't this to be a placeholder for a folder in the container
  - no mapping to an outside folder

full command:
```bash
docker run -p 3000:3000 -v /app/node_modules -v $(pwd):/app <image_id>
```

**! We can bookmark internal docker volumes to prevent them from be overwritten by a reference.**

## [71] Shorthand with Docker Compose
Docker compose can make executing the docker run commands with volumes much simpler

To add a volume:
```yml
services:
  service-name:
    ...
    volumes:
      - /app/node_modules
      - .:/app
```
**! We can add volume mapping to a `docker-compose.yml` file with the `volunes:` key**

## [72] Overriding Dockerfile Selection
Since our `Dockerfile` for development is named `Dockerfile.dev`, we have to make a slight tweak to the `build:` key in the `docker-compose.yml`.
```yml
services:
  service-name:
    ...
    build:
      context: .
      dockerfile: Dockerfile.dev
```
- `context`: Where to look for project files
- `dockerfile`: Where is the dockerfile
**! We can tweak the `build` key in our `docker-compose.yml` file to allow for a development Dockerfile**

## [73] Do we need Copy?
We could probably get away without using `COPY` but:
1. We might not use docker compose in the future
2. We might like to see it as a reminder when creating our production `Dockerfile`
**! We don't really need to keep the main COPY command, but it serves as a nice reminder.**

## [74] Executing Tests
Recall the way to run a docker image with an alternate startup command.
```bash
docker run <image_id> <cmd>
# in this case
docker run b324277d1305 npm run test
```
also remember to allow stdin with the `-it` option, so you can interact our test commands:
```bash
docker run -it <image_id> <cmd>
```
**! This section explains how to interactively run our app testing features using the `docker run` command.**

## [75] Live Updating tests
We quickly run into the same issue as before. We need to link volumes with this docker run command to ensure that our test and main files are updated with changes.

Options:
1) Set up a second service for running tests
2) Run off a docker-compose container
  1) `docker-compose up`
  2) `docker ps`
  3) `docker exec -it <image_id> npm run test`

**! In this section we ran option 2 for automatically runnint tests.**

## [76] Docker Compose for Running Tests
We might set up a test service within docker-compose (still not a perfect solution):

```sh
# ./docker-compose.yml
services:
  test:
    build:
      context: .
      dockerfile: Dockerfile.dev
    volumes:
      - /app/node_modules
      - .:/app
    command: ["npm", "run", "test"]
```

Problem with this approach: it's not interactive (no STDIN).

**! In this section we added a test service to tbe `docker-compose.yml` file. While this worked, it's not interactive (no bound STDIN) out the box.**

## [77] Shortcomings on Testing
In order to solve the STDIN problem of Docker Compose, we're going to use `docker attach`.

```sh
docker ps #get id
docker attach <image_id>
```
`docker attach`: attach to STDIN, STDOUT, STDERR of a container.
\* doesn't work (this is a good as it's going to get).
**Why?**
it comes down to the processes running in the container:
if you...
```sh
docker ps #get id
docker exec -it <image_id> sh #shell in
ps #=>
```
you'll see the processes:
```text
PID   USER     TIME  COMMAND
    1 root      0:00 npm

   17 root      0:00 node /app/node_modules/.bin/react-scripts test
   24 root      0:06 node /app/node_modules/react-scripts/scripts/test.js
   39 root      0:00 sh
   47 root      0:00 ps
```
When we run `docker attach`, we always attach to the STDIN of the primary process running in the container (PID 1). In order to interact with the test suite, we'd want to attach to the secondary test process.

**! So the first option for running tests via docker compose is less than ideal. Essentially, it's up to preference when choosing between running tests with `docker exec` vs. testing via a service in our `docker-compose.yml`**

## [78] Need for Nginx
In production, we don't need (or want) a heavy server running for sending assets to the client. In this course, we'll choose NGINX to service static assets.
**! We're using NGINX for our webserver in production. In the next section, we set up our Dockerfile for this.**

## [79] Multi-Step Docker Builds
**Initial outline of steps:**
1) Use node:alpine
2) Copy the package.json over
3) Install Dependencies
4) Run `npm run build`
5) Start nginx

2 big issues with that:
- A ton of the dependencies are only required when trying to build. We don't need them when running in production (it only adds bloat).
- Where is NGINX coming from?

probably want to use the `nginx:alpine` as the base, but we also want `node:alpine`

_Solution: We'll have 2 phases in our Dockerfile (build and run)_
**New outline of steps:**
BUILD:
1) Use node:alpine
2) Copy the package.json over
3) Install Dependencies
4) Run `npm run build`
RUN:
1) Use nginx
2) Copy the result of `npm run build`
3) Start nginx
**! In order to make our production deployment work, we'll need to use a multi-step deployment (multiple base images).**

## [80] Implementing Multi-Step Builds
```Dockerfile
# ./Dockerfile

# tag a phase by using 'as'
FROM node:alpine as builder
WORKDIR '/app'
COPY package.json .
RUN npm install
COPY . .
# build our production bundle
RUN npm run build
# output ends up in /app/build

# switch to run phase (only need the FROM command)
FROM nginx
# use the --from option to copy from a tagged phase
COPY --from=builder /app/build /usr/share/nginx/html
# the default command of the nginx container is the startup command, so no need for a command
```
**! In this section we learned how to tag build with `as`, how to start new phases, and how to copy from other phases with the `--from` option of `COPY`.**

## [81] Running Nginx
To test locally, we'll run and route traffic from local 8080 to the nginx default port 80.

```sh
docker build .
docker run -p 8080:80 <image_id>
```
**! We can launch the nginx container fairly simply with `docker run` command bound to port 80.**
