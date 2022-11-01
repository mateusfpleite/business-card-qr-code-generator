
# Business Card Generator

A web application that generates a QR Code that redirects directly to a business card with the user's name, description and contacts.
## Stacks

**Front-end:** React, TailwindCSS, Axios, React Router

**Back-end:** Node, Express, Sequelize, MySQL


## API Documentation

#### Create a card in the database
```http
POST /card/
```

| Parâmetro   | Tipo       | Descrição                           |
| :---------- | :--------- | :---------------------------------- |
| `body` | `object` | **Required**. Body with keys: {name: string, description: string, linkedin: string, github: string} |

#### Returns one item

```http
  GET /card/${name}
```

| Parâmetro   | Tipo       | Descrição                                   |
| :---------- | :--------- | :------------------------------------------ |
| `name`      | `string` | **Required**. User's name|


## Environment Variables 

For the project to run properly locally, it is necessary to set the environment variables in the frontend and backend folders. In each of them there is a .env.example file with default values that can be used. If you don't wish to make any changes, just remove the ".example" from each file's name and that will be enough for the project to work properly.


## Install

Install the project dependencies with npm

```bash
  npm run init - first installation with DB creation
  *after that you should use only npm start
```
This project runs inside a Docker container, so these commands will be enough to install both backend and frontend dependencies and get the application working correctly.    

## Using the application

If the installation was successful, just access port 3000 of localhost to see the project running normally. The backend and the database will be allocated respectively to ports 3001 and 3306.
