
# user-management-system

Backend code in node JS using MLab for db, MongoDB, ExpressJS

 - [Usage](#usage)
 - [Database](#database)
 - [Endpoints](#endpoints)
 - [ - - Users](#users)
 - [ - - Groups](#groups)


## Usage


``` bash

# install dependencies

$ npm install

# serve with hot reload at localhost:8005

$ npm start

```



## Database

Used MLab with Mongoose. <br />



## Endpoints

### Users

#### Users list

> POST /api/user/all

<br />




#### Single User by id

> POST /api/user/byid/:id



#### Users List by Group id

> POST /api/user/bygroup/:groupid


#### Search User

> POST /api/user/search/:term





#### Add New User

> POST /api/user/add



#### Edit User

> PUT /api/user/:id


#### Delete User

> DELETE /api/user/:id

### Groups

#### All Groups list

> POST /api/group/all


#### Single Group by id

> POST /api/group/byid/:id

#### Search Group

> POST /api/group/search/:term


#### Add New Group

> POST /api/group/add



#### Edit Group

> PUT /api/group/:id



#### Delete Group

> DELETE /api/group/:id


#### Content

> POST /api/stats/content
