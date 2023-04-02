# Blog - Microservices App

This application is a simple blog which is built purely using the microservices concept. This project contains a total of 5 different microservices namely: posts, comments, event-bus, moderations and query. The functinality of these microservices are explained below.

- **Posts** - A service that handles creation of Posts.
- **Comments** - A service that handles creation of Comments in a specific Post
- **Event-Bus** - Custom message broker service built from scratch, that handles sending message/events to other services.
- **Moderatons** - A service that detects hate speech in comments and blocks the comment if any.
- **Query** - A service that queries posts and comments posted.

---

- **client/** - Folder consists of frontend code written in react.
- **/infra/k8s/** - Folder consists the list of config files required by kubernetes
- **skaffold.yml** - Skaffold config file for automating build, redeploy and termination of kubernetes objects.

Below is the folder structure.

```
.
├── README.md
├── client
│   ├── Dockerfile
│   ├── components
│   │   ├── Comments
│   │   │   ├── CommentCreate.jsx
│   │   │   └── CommentList.jsx
│   │   └── Posts
│   │       ├── PostCreate.jsx
│   │       └── PostList.jsx
│   ├── index.html
│   ├── package.json
│   ├── public
│   │   └── vite.svg
│   ├── src
│   │   ├── App.jsx
│   │   └── main.jsx
│   ├── vite.config.js
│   └── yarn.lock
├── comments
│   ├── Dockerfile
│   ├── index.js
│   ├── package.json
│   └── yarn.lock
├── event-bus
│   ├── Dockerfile
│   ├── index.js
│   ├── package.json
│   └── yarn.lock
├── infra
│   └── k8s
│       ├── client-depl.yml
│       ├── comments-depl.yml
│       ├── event-bus-depl.yml
│       ├── ingress-srv.yml
│       ├── moderations-depl.yml
│       ├── posts-depl.yml
│       ├── posts-srv.yml
│       └── query-depl.yml
├── moderations
│   ├── Dockerfile
│   ├── index.js
│   ├── package.json
│   └── yarn.lock
├── posts
│   ├── Dockerfile
│   ├── index.js
│   ├── package.json
│   └── yarn.lock
├── query
│   ├── Dockerfile
│   ├── index.js
│   ├── package.json
│   └── yarn.lock
└── skaffold.yml
```

## Tech Stack

React, Node, Express, Docker, Kubernetes and Skaffold.
