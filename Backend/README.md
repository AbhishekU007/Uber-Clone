# User Registration Endpoint

## Endpoint
`POST /users/register`

## Description
This endpoint is used to register a new user.

## Request Body
The request body should be a JSON object containing the following fields:

- `email` (string): The user's email address. Must be a valid email.
- `fullname` (object): An object containing the user's full name.
  - `firstname` (string): The user's first name. Must be at least 3 characters long.
  - `lastname` (string): The user's last name. Optional, but if provided, must be at least 3 characters long.
- `password` (string): The user's password. Must be at least 6 characters long.

### Example
```json
{
  "email": "user@example.com",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "password": "password123"
}
```

## Responses

### Success
- **Status Code**: `201 Created`
- **Response Body**: A JSON object containing the authentication token and user details.

#### Example
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60c72b2f9b1e8b001c8e4d5a",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com"
  }
}
```

### Validation Errors
- **Status Code**: `400 Bad Request`
- **Response Body**: A JSON object containing an array of validation error messages.

#### Example
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

### User Already Exists
- **Status Code**: `400 Bad Request`
- **Response Body**: A JSON object containing an error message.

#### Example
```json
{
  "message": "User already exist"
}
```

# User Login Endpoint

## Endpoint
`POST /users/login`

## Description
This endpoint is used to authenticate an existing user.

## Request Body
The request body should be a JSON object containing the following fields:

- `email` (string): The user's email address. Must be a valid email.
- `password` (string): The user's password. Must be at least 6 characters long.

### Example
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

## Responses

### Success
- **Status Code**: `200 OK`
- **Response Body**: A JSON object containing the authentication token and user details.

#### Example
```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "_id": "60c72b2f9b1e8b001c8e4d5a",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "user@example.com"
  }
}
```

### Validation Errors
- **Status Code**: `400 Bad Request`
- **Response Body**: A JSON object containing an array of validation error messages.

#### Example
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

### Invalid Credentials
- **Status Code**: `401 Unauthorized`
- **Response Body**: A JSON object containing an error message.

#### Example
```json
{
  "message": "Invalid email or password"
}
```

# User Profile Endpoint

## Endpoint
`GET /users/profile`

## Description
This endpoint is used to get the authenticated user's profile.

## Request Headers
- `Authorization` (string): The user's authentication token.

## Responses

### Success
- **Status Code**: `200 OK`
- **Response Body**: A JSON object containing the user's profile details.

#### Example
```json
{
  "_id": "60c72b2f9b1e8b001c8e4d5a",
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "user@example.com"
}
```

### Unauthorized
- **Status Code**: `401 Unauthorized`
- **Response Body**: A JSON object containing an error message.

#### Example
```json
{
  "message": "Unauthorized"
}
```

# User Logout Endpoint

## Endpoint
`GET /users/logout`

## Description
This endpoint is used to log out the authenticated user.

## Request Headers
- `Authorization` (string): The user's authentication token.

## Responses

### Success
- **Status Code**: `200 OK`
- **Response Body**: A JSON object containing a success message.

#### Example
```json
{
  "message": "Logged out"
}
```

### Unauthorized
- **Status Code**: `401 Unauthorized`
- **Response Body**: A JSON object containing an error message.

#### Example
```json
{
  "message": "Unauthorized"
}
```

# Captain Registration Endpoint

## Endpoint
`POST /captains/register`

## Description
This endpoint is used to register a new captain.

## Request Body
The request body should be a JSON object containing the following fields:

```json
{
  "email": "captain@example.com", // string, required, must be a valid email
  "fullname": {
    "firstname": "Jane", // string, required, must be at least 3 characters long
    "lastname": "Doe" // string, optional, if provided, must be at least 3 characters long
  },
  "password": "password123", // string, required, must be at least 6 characters long
  "vehicle": {
    "color": "red", // string, required, must be at least 3 characters long
    "plate": "ABC123", // string, required, must be at least 3 characters long
    "capacity": 4, // number, required, must be at least 1
    "vehicleType": "car" // string, required, must be one of 'car', 'motorcycle', or 'auto'
  }
}
```

## Responses

### Success
- **Status Code**: `201 Created`
- **Response Body**: A JSON object containing the authentication token and captain details.

```json
{
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "captain": {
    "_id": "60c72b2f9b1e8b001c8e4d5a",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "captain@example.com",
    "vehicle": {
      "color": "red",
      "plate": "ABC123",
      "capacity": 4,
      "vehicleType": "car"
    }
  }
}
```

### Validation Errors
- **Status Code**: `400 Bad Request`
- **Response Body**: A JSON object containing an array of validation error messages.

```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 6 characters long",
      "param": "password",
      "location": "body"
    },
    {
      "msg": "Color must be at least 3 characters long",
      "param": "vehicle.color",
      "location": "body"
    },
    {
      "msg": "Plate must be at least 3 characters long",
      "param": "vehicle.plate",
      "location": "body"
    },
    {
      "msg": "Capacity must be at least 1",
      "param": "vehicle.capacity",
      "location": "body"
    },
    {
      "msg": "Invalid vehicle type",
      "param": "vehicle.vehicleType",
      "location": "body"
    }
  ]
}
```

### Captain Already Exists
- **Status Code**: `400 Bad Request`
- **Response Body**: A JSON object containing an error message.

```json
{
  "message": "Captain already exists"
}
```
