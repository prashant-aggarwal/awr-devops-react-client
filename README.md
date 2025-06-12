## This is a very simple react client.

#### Dockerfile is created such that:
1. Uses the builder pattern
2. Copies the /build folder and all its contents from the transient builder image to a static web server (e.g. nginx)

Also remember that in React, environment variables are set at BUILD time. Ensure that the .env file in the root contains the correct REACT_APP_SERVER variable for the environment for which you are building the application (e.g. the full address of a backend service if the app is deployed to Kubernets)

