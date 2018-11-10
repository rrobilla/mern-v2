MERN Application
v2
--------------------------
This is a boilerplate for a MERN application running inside a docker container.

--------------------------
How it works:

There are 3 containers: client(React App), server(Node Express), db(MongoDB)

The user makes connections on http://localhost:3000 and is served the REACT CLIENT. When
a call is made to the api (eg. localhost:3000/list), the REACT CLIENT routes the request 
through REACT ROUTER via proxy to the EXPRESS SERVER (via server:5000). The EXPRESS SERVER makes the calls
to the DATABASE to retrieve the data, then hands the data back to the REACT CLIENT to render.

---------------------------
How to run the application:

You have two ways of running this application base.

You can create the two Dockerfiles into images located in the react and expapi folders. Edit the 'image' and
'environment DEBUG=' lines in both services to match the image names you chose, then run docker-compose up -d 
from the root folder to create and run the docker containers.

You can clone the repo onto an environment running the required dependencies (Node, Express, React), 
edit the package.json in the client folder and change line 27 to this:  "proxy": "http://localhost:5000 and
run the startup.sh script.

[WIP] Still working on implementing the database into the app.