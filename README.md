# HELLO WORLD

## Minimal NodeJS Example For Docker Testing

---

https://github.com/COGSMITH/helloworld-nodejs

https://hub.docker.com/r/cogsmith/helloworld-nodejs

---

~~~
# DOCKER-RUN
docker run -d --name helloworld -p 127.0.0.1:80:80 cogsmith/helloworld-nodejs ; sleep 1 ; curl http://localhost:80

# OUTPUT
HELLOWORLD: d8e6338341ff @ 0.0.0.0:80 @ LOCALHOST @ 2021-02-17T09:02:04.404Z
~~~

---