# State Management

It's time to introduce three concepts in our React learning:

1. **Props:** Allow you to pass data into your components.
2. **Functional Components:** An alternative, and probably more intuitive approach to creating components.
3. **Controlled Components:** Allow you to hook up the forms in your application to your component state.

Before to start with our Contact app you should remove default files installed with `create-react-app` command.

## The Backend Server

The Contacts app project that we're building is a front-end project. However, we'll eventually be storing the contacts on a backend server. Since we're only really focusing on the front-end for this course, we've gone ahead and built this server for you so you can focus on just the React parts of this program.

The server is a simple Node/Express app that it is stored in the `contacts-app/reactnd-contacts-server2` path. Once you've started the server, you can forget about it. The Contacts project we're working on will interact with this server, but we won't ever modify any of the server code.

> ## Running Two Servers
> At this point, you should be running two different servers on your local machine:
> - Front-end development server: Accessible on **port 3000** (with `npm start` or `yarn start`)
> - Back-end server: Accessible on **port 5001** (with `node server.js`) Please be sure that both are running before moving on in this Lesson.