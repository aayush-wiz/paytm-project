# Paytm Solution App
An intermediate Full Stack Application using MERN.

## User can perform the following operations:
- Create a new Account.
- Login to an exisiting Account.
- Check Balance in his exisiting Account.
- Send Money to exisiting Users.
- Filter a User according to their Firstname and Lastname.

## Application has following features
- Validation for Inputs (using ZOD).
- Has Authentication for Sign In and Sign Up (Using JWT).
- All the transactions are done within a session (Mongodb Sessions). If a backend or database server crashes then all the intermediate transactions will be rollbacked to its original state.
- Routing within Application using Token (JWT).
- Stores Authentication Token in local storage which helps sending requests to Database through backend server to access Account data for a specific User.