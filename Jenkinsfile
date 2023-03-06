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
        withDockerRegistry(credentialsId: 'dockerhub-ang-supabase', url: 'https://index.docker.io/v1/') {
          sh 'docker build -t tuanna18042000/ang-supabase:latest .'
          sh 'docker push tuanna18042000/ang-supabase:latest'
        }
      }
    }
  }
}
