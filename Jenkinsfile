pipeline {
  agent any
  stages {
    stage('Clone') {
      steps {
        git 'https://github.com/NAT1804/ang-supabase'
      }
    }
    stage('Build') {
      steps {
        withDockerRegistry(credentialsId: 'dockerhub-ang-supabase', url: 'https://hub.docker.com/') {
          sh 'docker build -t tuanna18042000/ang-supabase:latest .'
          sh 'docker push tuanna18042000/ang-supabase:latest'
        }
      }
    }
  }
}
