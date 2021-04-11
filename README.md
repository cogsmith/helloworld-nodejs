# 🖐️ HELLOWORLD: Basic NodeJS Docker Example 🖐️
### Minimal example script for testing NodeJS and Docker instances

---

<a href='https://github.com/cogsmith/helloworld-nodejs'><img src='https://github-readme-stats.vercel.app/api/pin/?username=cogsmith&repo=helloworld-nodejs' align='right'></a>

#### <code><a href='https://github.com/cogsmith/helloworld-nodejs'><img src='https://github.githubassets.com/images/icons/emoji/octocat.png' width='22'> [GITHUB REPO]</a></code>

#### <code><a href='https://hub.docker.com/r/cogsmith/helloworld-nodejs'>🐳 [DOCKER IMAGE]</a></code>

#### <code><a href='https://github.com/cogsmith/helloworld-nodejs/blob/main/app.js'>🧾 [VIEW APP SOURCE CODE]</a></code>

---

[![](https://shields.io/github/package-json/v/cogsmith/helloworld-nodejs?label=codebase)](http://github.com/cogsmith/helloworld-nodejs)
[![](https://shields.io/github/last-commit/cogsmith/helloworld-nodejs)](https://github.com/cogsmith/helloworld-nodejs/commits/main)
[![](https://github.com/cogsmith/helloworld-nodejs/actions/workflows/DEVKING_CHECK.yml/badge.svg)](https://github.com/cogsmith/helloworld-nodejs/actions/workflows/DEVKING_CHECK.yml)

[![](https://shields.io/github/v/release/cogsmith/helloworld-nodejs?label=latest+release)](https://github.com/cogsmith/helloworld-nodejs/releases)
[![](https://shields.io/github/release-date/cogsmith/helloworld-nodejs?color=blue)](https://github.com/cogsmith/helloworld-nodejs/releases)
[![](https://shields.io/github/commits-since/cogsmith/helloworld-nodejs/latest)](https://github.com/cogsmith/helloworld-nodejs/commits/main)
<!-- [![](https://shields.io/github/commit-activity/m/cogsmith/helloworld-nodejs)](https://github.com/cogsmith/helloworld-nodejs/commits/main) -->

[![](https://shields.io/github/license/cogsmith/helloworld-nodejs?color=lightgray)](https://github.com/cogsmith/helloworld-nodejs/blob/main/LICENSE)
[![](https://shields.io/github/languages/code-size/cogsmith/helloworld-nodejs)](http://github.com/cogsmith/helloworld-nodejs)
[![](https://shields.io/github/repo-size/cogsmith/helloworld-nodejs)](http://github.com/cogsmith/helloworld-nodejs)
[![](https://shields.io/docker/image-size/cogsmith/helloworld-nodejs?sort=date&label=docker+size)](https://hub.docker.com/r/cogsmith/helloworld-nodejs)
[![](https://shields.io/github/issues-raw/cogsmith/helloworld-nodejs)](https://github.com/cogsmith/helloworld-nodejs/issues)

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