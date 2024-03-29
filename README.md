# News-Management-Backend
# Assessment of Macro Labs Pvt Ltd


## Table of Contents

- [Project Overview](#project-overview)
- [Demo](#demo)
- [Installation](#installation)
- [Usage](#usage)
- [Endpoints](#endpoints)
- [Environment variables](#environment-variables)


## project-overview
This is a backend  project of news managment, that allows admin to manage their news. admin can create, view, update, and delete news through an intuitive user interface. non-registered users can view the news.

## Demo
Check out the live demo
[here](https://vercel.com/asankagamage98s-projects/news-management-backend/2PfoyCCSH7mCiV7Z21nVyzTJ1qav).

Domains
[here](news-management-backend-ss910w62k-asankagamage98s-projects.vercel.app).



## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/asankagamage98/News-Management-Backend.git

2. Navigate to the project directory:
    cd News-Management-Backend

3. Install dependencies:
    npm install


## Usage
To run the project, use the following command:
    npm start || npm run dev

The application will be accessible at http://localhost:3020


## endpoints
Create News:
Endpoint: POST - http://localhost:3020/api/news/
Description: Create a new news.
Authentication: authenticated

Get all news:
Endpoint: GET - http://localhost:3020/api/news/    
Description: Retrieve all news information.
Authentication: Non-authenticated

Update news:
Endpoint: PUT - http://localhost:3020/api/news/:id
Description: Update the news.
Authentication: authenticated

Get news by id:
Endpoint:GET - http://localhost:3020/api/news/:id
Description: Retrieve news information for given id.
Authentication: authenticated

Delete news by id:
Endpoint:DELETE - http://localhost:3020/api/news/:id
Description: delete the news information by id.
Authentication: authenticate

## ----------------------
Create user:
Endpoint: POST - http://localhost:3020/api/user/create
Description: Create(register) a new user.
Authentication: Non-authenticated

Login user:
Endpoint: POST - http://localhost:3020/api/user/login
Description: login user.
Authentication: Non-authenticated


Get all user :
Endpoint: GET - http://localhost:3020/api/user/
Description: Retrieve all user information.
Authentication: authenticated

Update user:
Endpoint: PUT - http://localhost:3020/api/user/:id
Description: Update the user.
Authentication: authenticated

Get user by id:
Endpoint:GET - http://localhost:3020/api/user/:id
Description: Retrieve user information for given id.
Authentication: authenticated

Delete user by id:
Endpoint:DELETE - http://localhost:3020/api/user/:id
Description: delete the user information by id.
Authentication: authenticated

## environment-variables

```
PORT=3020
# mongodb atlas connection string
MONGODB_URL=
```
