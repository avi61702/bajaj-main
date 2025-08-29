# Bajaj REST API

A Node.js REST API that processes arrays and categorizes data according to specific requirements.

## Features

- Processes input arrays and categorizes data into:
  - Odd numbers
  - Even numbers
  - Alphabets (converted to uppercase)
  - Special characters
  - Sum of all numbers
  - Concatenated alphabets in reverse order with alternating caps

## Installation

1. Clone this repository
2. Install dependencies:
   ```bash
   npm install
   ```

## Usage

### Development
```bash
npm run dev
```

### Production
```bash
npm start
```

The server will run on port 3000 by default, or the port specified in the PORT environment variable.

## API Endpoints

### POST /bfhl
Main processing endpoint that accepts an array and returns categorized data.

**Request Body:**
```json
{
    "data": ["a", "1", "334", "4", "R", "$"]
}
```

**Response:**
```json
{
    "is_success": true,
    "user_id": "affan_ahmed_29081998",
    "email": "affan@example.com",
    "roll_number": "21BCI0001",
    "odd_numbers": ["1"],
    "even_numbers": ["334", "4"],
    "alphabets": ["A", "R"],
    "special_characters": ["$"],
    "sum": "339",
    "concat_string": "Ra"
}
```

### GET /bfhl
Returns operation code for testing purposes.

**Response:**
```json
{
    "operation_code": 1
}
```

## Testing

You can test the API using curl, Postman, or any HTTP client:

```bash
curl -X POST http://localhost:3000/bfhl \
  -H "Content-Type: application/json" \
  -d '{"data": ["a","1","334","4","R","$"]}'
```

## Deployment

This API can be deployed to various platforms:
- Vercel
- Railway
- Render
- Heroku
- AWS
- Any Node.js hosting provider

Make sure to set the PORT environment variable on your hosting platform.

## Configuration

Update the following values in `server.js` with your actual details:
- `user_id`: Your name in format "firstname_lastname_ddmmyyyy"
- `email`: Your email address
- `roll_number`: Your college roll number
