## Deploy react application image using CI/CD Jenkins pipeline

#### Create a Dockerfile for generation of Docker image:
1. Use the official Python base image.
2. Set relevant environment variables.
3. Set the working directory
4. Install system dependencies
5. Install Python dependencies
6. Copy the application code
7. Specify the command to run the app

#### Create a Jenkinsfile for building Docker image using Dockerfile and pushing the image to DockerHub:
1. Create a pipeline.
2. Set relevant environment variables.
3. Create various stages within the pipeline:
   - Checkout code from the repository.
   - Build the Docker image using Docker build command.
   - Push the Docker image to DockerHub.
  
#### Setup Jenkins server:
1. Create an EC2 instance to install Jenkins. Follow the instructions carefully as per https://www.jenkins.io/doc/book/installing/ for deploying the Jenkins server inside a Docker container.
2. Ensure that the auto start mode for non Docker Jenkins server is disabled.
3. Ensure that you run the docker commands for creating pods with Jenkins whenever the EC2 instance is started.
4. Install necessary plugins using Manage Jenkins -> Plugins option.
5. Add Github credentials in Jenkins -> Manage Jenkins -> Credentials -> Add Credentials -> Kind (Username and Password).
6. Add DockerHub credentials in Jenkins -> Manage Jenkins -> Credentials -> Add Credentials -> Kind (Username and Password).
7. Create a Jenkins pipeline using **New Item** option.
8. Set this repository as the SCM source with necessary GIT settings.
9. Set the Script Path as Jenkinsfile using Pipeline -> Pipeline script from SCM section.
10. Save the changes and click **Build Now** to trigger the pipeline.
11. Check the Console Output associated with the lastest job for verification.
