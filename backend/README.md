# Awaaz AI - Backend

This is a minimal Spring Boot backend scaffold for development.

Run locally (requires Java 21 and Maven):

```bash
mvn spring-boot:run
```

Or build and run the jar:

```bash
mvn package
java -jar target/awaaz-ai-backend-0.0.1-SNAPSHOT.jar
```

Health endpoint: `GET /api/health`
Auth: `POST /api/auth/login`, `POST /api/auth/register`
Upload: `POST /api/documents/upload` (multipart `file`)
