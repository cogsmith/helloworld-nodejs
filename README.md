# HELLO WORLD

## Minimal NodeJS Example For Docker Testing

---

https://github.com/COGSMITH/helloworld-nodejs

https://hub.docker.com/r/cogsmith/helloworld-nodejs

---

~~~
docker run -d --name helloworld -p 127.0.0.1:80:80 cogsmith/helloworld-nodejs ; sleep 1 ; curl http://localhost:80
~~~

---