pipeline {
  agent any
  stages {
     stage('Initialize') {
        steps{
            script {
                def dockerHome = tool 'docker'
                env.PATH = "${dockerHome}/bin:${env.PATH}"
            }
        }
    }
    stage('Clone') {
      steps {
        git 'https://github.com/NAT1804/ang-supabase'
      }
    }
    stage('Build') {
      steps {
        script {
          withDockerRegistry(credentialsId: 'dockerhub-ang-supabase', toolName:'docker', url: 'https://index.docker.io/v1/') {
            sh 'docker build -t tuanna18042000/ang-supabase:latest .'
            sh 'docker push tuanna18042000/ang-supabase:latest'
          }
        }
      }
    }
  }
}
