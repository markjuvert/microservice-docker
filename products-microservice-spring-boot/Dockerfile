FROM maven as build 
WORKDIR /app
COPY . .
RUN mvn install 

FROM openjdk:11.0.10-jre
WORKDIR /app
COPY --from=build /app/target/products-0.0.1-SNAPSHOT.jar /app
EXPOSE 1002
CMD ["java","-jar","products-0.0.1-SNAPSHOT.jar"]