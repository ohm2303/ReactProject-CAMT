# Dockerfile

# Use the official OpenJDK image as the base image
FROM openjdk:11-jre-slim

# Set the working directory inside the container
WORKDIR /app

# Copy the application JAR file into the container
COPY /App.jar /app/App.jar

# Define the command to run your application
CMD ["java", "-jar", "App.jar"]

