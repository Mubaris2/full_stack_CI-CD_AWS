pipeline {
agent any

```
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
            script {
                docker.build("${DOCKERHUB_USERNAME}/${ROLL_NUMBER}_backend", "./backend")
            }
        }
    }

    stage('Build Frontend Image') {
        steps {
            script {
                docker.build("${DOCKERHUB_USERNAME}/${ROLL_NUMBER}_frontend", "./frontend")
            }
        }
    }

    stage('Login to DockerHub') {
        steps {
            withCredentials([string(
                credentialsId: 'dockerhub-pat',
                variable: 'DOCKER_PAT'
            )]) {
                sh '''
                echo $DOCKER_PAT | docker login \
                -u mubaris2004 \
                --password-stdin
                '''
            }
        }
    }

    stage('Push Docker Image') {
        steps {
            sh '''
                sh 'docker push $DOCKERHUB_USERNAME/${ROLL_NUMBER}_backend:latest'
                sh 'docker push $DOCKERHUB_USERNAME/${ROLL_NUMBER}_frontend:latest'
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