# HELLO WORLD

:raised_hand_with_fingers_splayed: Minimal NodeJS Example :raised_hand_with_fingers_splayed:
## Basic Script For Docker Testing

---

:octocat: https://github.com/cogsmith/helloworld-nodejs

🐳 https://hub.docker.com/r/cogsmith/helloworld-nodejs

---

<h1><code><a href='../../blob/master/app.js'>[VIEW APP SOURCE CODE]</a></code></h1>

---

### No Server Show Message And Exit

~~~
docker run --rm --name hello cogsmith/helloworld-nodejs

# HELLOWORLD: 695144B4BC64 @ 2021-02-18T01:19:03.199Z
~~~

---

### Local Web Server @ Port 99

~~~
docker run -d --rm --name hellolocal --env PORT=9 -p 127.0.0.1:99:9 cogsmith/helloworld-nodejs ; sleep 1 ; curl http://127.0.0.1:99

# HELLOWORLD: 88ECF5397338 @ 0.0.0.0:80 @ 127.0.0.1:99 @ 2021-02-18T01:19:21.288Z
~~~

---

### Public Web Server @ Port 80

~~~
docker run -d --rm --name helloworld --env PORT=9 -p 0.0.0.0:80:9 cogsmith/helloworld-nodejs ; sleep 1 ; curl http://localhost:80

# HELLOWORLD: 7A36215AC9D8 @ 0.0.0.0:80 @ LOCALHOST @ 2021-02-18T01:19:51.723Z
~~~

---

### Clean Up

~~~
docker stop hello ; docker stop hellolocal ; docker stop helloworld ; docker rm hello ; docker rm hellolocal ; docker rm helloworld ; docker rmi cogsmith/helloworld-nodejs
~~~

---