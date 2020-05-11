FROM gradle:6.3.0-jdk11
WORKDIR /app
COPY . /app
RUN gradle build
ENTRYPOINT java -jar build/libs/demo.jar
EXPOSE 8080
