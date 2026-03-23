pipeline {
    agent any

    options { 
        skipDefaultCheckout(true) 
    }
    
    environment {
        DOCKERHUB_USERNAME = 'mubaris2004'
        ROLL_NUMBER = '23bcs62'
    }

    stages {

        stage('Checkout Code') {
            steps {
                git branch: 'main', url: 'https://github.com/Mubaris2/full_stack_CI-CD_AWS'
            }
        }

        stage('Build Backend Image') {
            steps {
                sh 'docker build -t $DOCKERHUB_USERNAME/${ROLL_NUMBER}_backend ./backend'
            }
        }

        stage('Build Frontend Image') {
            steps {
                sh 'docker build -t $DOCKERHUB_USERNAME/${ROLL_NUMBER}_frontend ./frontend'
            }
        }

        stage('Login to DockerHub') {
            steps {
                withCredentials([usernamePassword(
                credentialsId: 'dockerhub-pat',
                usernameVariable: 'DOCKER_USER',
                passwordVariable: 'DOCKER_PASS'
                )]) {
                    sh '''
                    echo $DOCKER_PASS | docker login \
                    -u $DOCKER_USER \
                    --password-stdin
                    '''
                }
            }
        }

        stage('Push Docker Image') {
            steps {
                sh '''
                    docker push $DOCKERHUB_USERNAME/${ROLL_NUMBER}_backend:latest
                    docker push $DOCKERHUB_USERNAME/${ROLL_NUMBER}_frontend:latest
                '''
            }
        }
    }

    post {
        success {
            echo 'Pipeline executed successfully!'
        }
        failure {
            echo 'Pipeline failed!'
        }
    }
}