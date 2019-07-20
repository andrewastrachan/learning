# Section 5: Docker Compose with Multiple Local Containers

## [47] App overview
**! We're building a multi-container application. We're doing this because we want to scale components individually and allow uniform data access across containers.**

## [48] App Server Code
## [49] Completed Node Code

## [50] Assembling a Dockerfile
```bash
  docker build -t andrewastrachan92/visits:latest
  docker run andrewastrachan92/visits
```
! Created a Dockerfile for the node application
## [51] Introducing Docker Compose
- Our Node docker application fails to start because there is no redis server to connect to

So we could try this, but the networking between containers won't work.
```bash
docker run redis
docker run andrewastrachan92/visits
```

Option 1: Use docker CLI to expose ports
```bash
docker run -p 6379:6379 redis
docker run andrewastrachan92/visits
```
**Why this is bad**:
- A ton of commands to run every time we want this to start up
- When scripted, not easily parsable
- Not the industry best-practice
- Instructor has never seen this done in industry

Option 2: Use docker compose.

### What is Docker Compose?
- CLI that comes installed along with the Docker CLI
- Allows configurability that prevents you from having to run a ton of repetitive commands
- Makes it very easy to start and connect multiple Docker containers

run with:
```bash
docker-compose
```

**! Docker compose is a separate CLI and allows us to easily configure multi-container applications.**


## [52] Docker Compose Files

* docker-compose.yml

High level structure of file:

- Here are the containers I want:
  - redis-server
    - use the 'redis image'
  - node-app
    - use the Dockerfile in the working directory
    - map port 8081 to local 8081

**! The docker-compose.yml is used to define the containers you want docker compose to run along with their configuration.**

## [53] Networking with Docker Compose
Docker compose makes networking between containers very straightforward. By simply defining the containers in a docker compose file, the two containers will have free access to speak with one another. Not port declaration need other than local to the containers.

Because of the way docker compose networking works, we can communicate with our redis instance from our node instance like so:
```bash
const client = redis.createClient({
  host: 'redis-server' # typically this host would be a to some external instance of redis, ex. https://my-redis-server.
});
```
So what's happening above?:
- The redis client attempts to connect to the hostname: `redis-server`
- Docker sees the attempt to access the host `redis-server`, automatically redirects the request to the container running redis.

**! Docker compose handles networking between containers by default.**

## [54] Docker Compose Commands
```bash
docker-compose up # start up containers
docker-compose up --build # start up containers and attempts rebuild
```

**! use `docker-compose up` to start up containers per your `docker-compose.yml` file configuration**

## [55] Stopping Docker Compose Containers
```bash
docker-compose up -d # runs containers in the background
docker-compose down # stop all containers
```
**! `use docker-compose down` to tear down containers**

## [56] Container Maintenance with Compose
How to mitigate crashes

_We might force container stoppage like so:_
```bash
app.get('/', (req, res) => {
  process.exit(0);
  client.get('visits', (err, visits) => {
    res.send('Number of visits is ' + visits)
    client.set('visits', parseInt(visits) + 1)
  })
});
```

```bash
docker ps #=> returns only one running container (redis)
```
**! next section includes solution**

## [57] Automatic Container Restarts
Docker compose can automatically maintain and restart containers.

* Process exit codes matter
  - 0: all good, meant to.
  - any other code: bad.
  - docker will watch this.

Restart Policies:
- "no": **default**; never restart
- "always": self explanatory
- "on-failure": only if the container stops with error
- "unless stopped": not unless forcibly stopped

ex.
```yml
# docker-compose.yml
...:
  node-app:
    restart: always
```

* note: for `no` restart policy, you have to put it in as `"no"` because yml will interpret `no` as `false`

Why use always vs on-failure
- Always makes sense for a web server.
- On failure might make sense for a worker container that runs processing an then we want it to exit.

**! Docker compose can automatically restart crashed or stopped containers. You configure this via a restart policy in your `docker-compose.yml` file.**

## [58] Container Status with Docker Compose
Similar to the docker cli, you can also run the `ps` with the docker-compose cli.
```bash
docker-compose ps
```

**! Use `docker-compose ps` to see your docker compose orchestrated container statuses**
