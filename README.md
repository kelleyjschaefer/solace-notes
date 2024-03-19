## Description

Backend (and contains Frontend) projects for Solace Notes
Run the NodeJS backend framework with
```bash
$ npm run start
```

You can also run the ReactJS frontend on a separate port with
```bash
$ PORT=3001 npm start
```

## Installation

To install necessary packages

```bash
$ npm install
```

## Running the app

It is necessary to have a MySQL server set up to host the database- everything is synchronized with NodeJS instead of utilizing migrations for simplicity
In this project's main directory provide a .env file with your database's information
```
DB_PORT=
DB_HOST=
DB_user=
DB_PASSWORD=
DB_name=
```

## Devlog

This Notes log is fairly straightforward;

I utilized NestJS and ReactJS to make the backend and frontend, respectively.
Some initial designs I attempted to have a sort of User signature for every note,
but quickly realized it would put the project a bit out of scope.

Instead, I scaled back with the Topics feature; 
Every note can have a Topic, which can be used as an alternative to searching, providing a pseudo-tagging system.

The two longest parts of development were actual setup of the entire project; Installation, planning, structure, etc.
And syncing New Note creation, edit, and deletion with the active dashboard.

## Stretch Goals
If I were to return and take more time, I'd like to actually implement the Users and encapsulate the Dashboard into its own object;
Ideally a simple login and authentication would mean multiple users could have a Dashboard, and grant permission(s) to other Users to CRUD each others Notes.

I'd also like to go back and write a whole test suite as well as provide a cleaner, more elegant error handling UX.
