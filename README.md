# HELLO WORLD

## Minimal NodeJS Example For Docker Testing

---

https://github.com/cogsmith/helloworld-nodejs

https://hub.docker.com/r/cogsmith/helloworld-nodejs

---

### No Server Show Message And Exit

~~~
docker run --rm --name hello cogsmith/helloworld-nodejs

# HELLOWORLD: 695144B4BC64 @ 2021-02-18T01:19:03.199Z
~~~

---

### Local Web Server @ Port 99

~~~
docker run -d --rm --name hellolocal -p 127.0.0.1:99:80 cogsmith/helloworld-nodejs 80 ; sleep 1 ; curl http://127.0.0.1:99

# HELLOWORLD: 88ECF5397338 @ 0.0.0.0:80 @ 127.0.0.1:99 @ 2021-02-18T01:19:21.288Z
~~~

---

### Public Web Server @ Port 80

~~~
docker run -d --rm --name helloworld -p 0.0.0.0:80:80 cogsmith/helloworld-nodejs 80 ; sleep 1 ; curl http://localhost:80

# HELLOWORLD: 7A36215AC9D8 @ 0.0.0.0:80 @ LOCALHOST @ 2021-02-18T01:19:51.723Z
~~~

---