pipeline {
    agent any
    environment {
        DOCKER_IMAGE = 'coolduck84/awr-devops-react-client'
        DOCKER_TAG = 'latest'
    }
    stages {
        stage('Checkout Code') {
            steps {
                git branch: 'main', 
                    credentialsId: 'Github', 
                    url: 'https://github.com/prashant-aggarwal/awr-devops-react-client.git'
            }
        }
		
		stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t ${DOCKER_IMAGE}:${DOCKER_TAG} ."
                }
            }
        }
		
		stage('Push to DockerHub') {
            steps {
                script {
                    docker.withRegistry('https://index.docker.io/v1/', 'DockerHub') {
                        def customImage = docker.build("${DOCKER_IMAGE}:${DOCKER_TAG}")
                        customImage.push()
                    }
                }
            }
        }
    }
    post {
        always {
            cleanWs()
        }
    }
}