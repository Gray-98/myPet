pipeline {
  agent any

  environment {
    IMAGE_API_NAME = "mypet_api:latest"
    IMAGE_PLATFORM_NAME = "mypet_platform:latest"
  }

  stage("Build Api") {
    steps {
      container('docker'){
        sh """
          cd mypet-api
          docker build -t $IMAGE_API_NAME -f ./Dockerfile .
        """
      }
    }
  }

  stage("Build Platform") {
    steps {
      container('docker'){
        sh """
          cd mypet-platform/nextjs-mypet
          docker build -t $IMAGE_PLATFORM_NAME -f ./Dockerfile .
        """
      }
    }
  }

  stage("Deploy") {
    steps {
      container('docker'){
        sh """
          docker run -d -p 8080:8080 --name mypet-api mypet-api:latest
          docker run -d -p 3000:3000 --name mypet-platform mypet_platform:latest
        """
      }
    }
  }
}