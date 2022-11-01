
# Business Card Generator

A web application that generates a QR Code that redirects directly to a business card with the user's name, description and contacts.
## Stack utilizada

**Front-end:** React, TailwindCSS, Axios, React Router

**Back-end:** Node, Express, Sequelize, MySQL


## API Documentation

#### Retorna todos os itens

```http
POST /card/
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `body` | `object` | **Required**. Body with keys: {name: string, description: string, linkedin: string, github: string} |

#### Retorna um item

```http
  GET /card/${name}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Required**. User's name|


## Install

Install the project dependencies with npm

```bash
  npm install init - first installation with DB creation
  *after that you should use only npm start
```
This project runs inside a Docker container, so these commands will be enough to install both backend and frontend dependencies and get the application working correctly.    
