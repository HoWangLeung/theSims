FROM adoptopenjdk/openjdk11:latest
VOLUME /tmp
EXPOSE 5000
ADD target/*.jar app.jar
ENV JAVA_OPTS="" 
ENV MYSQL_ROOT_PASSWORD=PASS 
ENV MYSQL_USER=DEREK  
ENV MYSQL_PASSWORD=PASS
ENV MYSQL_DATABASE=thesims
ENTRYPOINT [ "sh", "-c", "java $JAVA_OPTS -Djava.security.egd=file:/dev/./urandom -jar /app.jar" ]