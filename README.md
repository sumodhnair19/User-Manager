
# user-manager

This Project is created using ReactJS for frontend, and NodeJS for backend with MongoDB, Express etc.


 - [Directories](#directories)
 - [Usage](#Usage)
 - [Features](#features)
 - [ - - Users](#users)
 - [ - - Groups](#groups)
 - [ - - Dashboard](#dashboard)
 - [ - - Others](#others)

## Directories:

 # Comprises of two folders mainly:
 1) FrontEnd
 2) Backend


## Usage


``` bash

# install dependencies via navigating to the FrontEnd, Backend folders

$ npm install

#By default will run the FrontEnd code in 3000 port, and backend at 8005
$ npm start

```



## Features

### User List Page

1) I can see a list of existing users
2) I can create new users
3) I can assign users to a group they aren't part of
4) I can remove users from a group
5) I can delete users
6) I can edit users where I can assign him/her to some other group and also change basic details
7) I can search a user based on Id, name etc.

### Groups List Page

1) I can see a list of existing group
2) I can create new groups
4) I can remove a group
5) I can edit a group
6) I can view list of users who are part of the group
7) I can search a group based on Id, name etc.

### Dashboard Page

1) Basic summary showing the count of Groups, Users present.

### Others

1) The Page is responsive.
2) It has loader functionality.
3) ES6 Syntax
4) ESLint for error checks.
