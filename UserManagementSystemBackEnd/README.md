
# user-management-node

Simple User Management System - REST API with Nodejs, ExpressJS &amp; MongoDB.

  
  

 - [Live demo](#live-demo)
 - [Usage](#usage)
 - [Database](#database)
 - [Endpoints](#endpoints)
 - [ - - Users](#users)
 - [ - - Groups](#groups)
 - [ - - Statistics](#statistics)

## Live demo:

https://user-management-node.herokuapp.com/

  
  

## Usage

  

``` bash

# install dependencies

$ npm install

# serve with hot reload at localhost:7001

$ npm start

```

  

## Database

Used MongoDB with Mongoose. <br />

You can change database details from **./config.js** file

  
  

## Endpoints

### Users

#### Users list

> POST /api/user/all

<br />
Body:

```javascript

{

skip: int,

limit: int

}

```

  

#### Single User by id

> POST /api/user/byid/:id

<br />
Body:

```javascript

null

```

  

#### Users List by Group id

> POST /api/user/bygroup/:groupid

<br />
Body:

```javascript

null

```

  

#### Search User

> POST /api/user/search/:term

<br />
*if search in exact group*
<br />
Body:

```javascript

{

groupid: string

}

```
*if search in all users*
<br />
Body:
```javascript

{

groupid: null

}

```

  

#### Add New User

> POST /api/user/add

<br />
Body:

```javascript

{

fullname: string,

email: string,

group: group  id

}

```

  

#### Edit User

> PUT /api/user/:id

<br />
Body:

```javascript

{

fullname: string,

email: string,

group: group  id

}

```

  
  

#### Delete User

> DELETE /api/user/:id

<br />
Body:

```javascript

null

```

  

### Groups

#### All Groups list

> POST /api/group/all

<br />
Body:

```javascript

null

```

  

#### Single Group by id

> POST /api/group/byid/:id

<br />
Body:

```javascript

null

```

  

#### Search Group

> POST /api/group/search/:term

<br />
Body:

```javascript

null

```

  

#### Add New Group

> POST /api/group/add

<br />
Body:

```javascript

{

title: string

}

```

  

#### Edit Group

> PUT /api/group/:id

<br />
Body:

```javascript

{

title: string

}

```

  
  

#### Delete Group

> DELETE /api/group/:id

<br />
Body:

```javascript

null

```

  

### Statistics

#### Content

> POST /api/stats/content

<br />
Body:

```javascript

null

```
