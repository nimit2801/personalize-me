# Personalize Me
<b>A very strong but minimalistic API, for task scheduling and tracking </b><br/>
API End-Point: TBD

## Motive
Personalize me is started of as a personal project for me to tab on to some of my daily tasks. While I was developing the API i tought of adding more things and making the API stronger and which could be used directly by the clients and orgs. I tried to bridge the gap between having a complex api for clients and and personal use, and tried to make it more minimalistic

## Introduction
A minmalistic Task API to help you complete your daily, weekly, monthly, personal, private, tasks.

##Routes Information
1. `/Client`: 
  a. Add new client
  b. Get existing client
2. `/TaskClass`:
  a. Create new TaskClass
  b. Get All task class
  c. Delete Task Class
3. `Task`:
  a. `/:userName`: Get all tasks of user
  b. `:userName/:taskClass`: Get all tasks of Task Class
  c. `('/')`: Create Task
  d. `'/userName/:id'`: 
    i. Get SingleTask
    ii. Delete Single Task

## Use Case:
Postman API use case link: TBD

## How deploy locally
Step 1: Clone the repo
```cli
git clone https://github.com/nimit2801/personalize-me.git
```
Step 2: Install dependencies:
```cli
cd personalize-me
npm install
```
Step 3: Add `MONGOURI` in config folder
Step 4: Run local development server
```cli
npm install -D nodemon
npm run dev
```
Step 5: Test with postman or your favorite REST Client

Happy Hacking!

## Tech Stack used:
1. MongoDB (Database)
2. Express.js (Server)

## Future Release updated
1. Making passwords encrypted
2. Adding more middlewares to make the api more strong
3. Adding test cases to make the API bullet proof
4. Add contribution.md for devs to contribute to the api

## About the Author
I'm an open source enthusiast and developer who wants to make life of developers easy.
- [@nimit2801](https://github.com/nimit2801)
- Discord: Nimit#4979
- [Twitter](https://twitter.com/SavantNimit)
