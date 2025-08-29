const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());

// Helper function to categorize data
function processData(data) {
    const result = {
        is_success: true,
        user_id: "affan_ahmed_29081998", // Replace with your actual details
        email: "affan@example.com", // Replace with your actual email
        roll_number: "21BCI0001", // Replace with your actual roll number
        odd_numbers: [],
        even_numbers: [],
        alphabets: [],
        special_characters: [],
        sum: "0",
        concat_string: ""
    };

    let numSum = 0;
    let alphabetChars = [];

    try {
        data.forEach(item => {
            const str = String(item);
            
            // Check if it's a number
            if (!isNaN(str) && str.trim() !== '') {
                const num = parseInt(str);
                numSum += num;
                
                if (num % 2 === 0) {
                    result.even_numbers.push(str);
                } else {
                    result.odd_numbers.push(str);
                }
            }
            // Check if it's alphabetic
            else if (/^[a-zA-Z]+$/.test(str)) {
                result.alphabets.push(str.toUpperCase());
                // Store individual characters for concatenation
                for (let char of str) {
                    alphabetChars.push(char);
                }
            }
            // Everything else is special character
            else {
                result.special_characters.push(str);
            }
        });

        result.sum = numSum.toString();
        
        // Create concatenation string: reverse order with alternating caps (start uppercase)
        alphabetChars.reverse();
        let concatStr = '';
        for (let i = 0; i < alphabetChars.length; i++) {
            if (i % 2 === 0) {
                concatStr += alphabetChars[i].toUpperCase();
            } else {
                concatStr += alphabetChars[i].toLowerCase();
            }
        }
        result.concat_string = concatStr;

    } catch (error) {
        result.is_success = false;
    }

    return result;
}

// POST /bfhl endpoint
app.post('/bfhl', (req, res) => {
    try {
        const { data } = req.body;
        
        // Validate input
        if (!data || !Array.isArray(data)) {
            return res.status(400).json({
                is_success: false,
                error: "Invalid input: 'data' must be an array"
            });
        }

        const result = processData(data);
        res.status(200).json(result);

    } catch (error) {
        console.error('Error processing request:', error);
        res.status(500).json({
            is_success: false,
            error: "Internal server error"
        });
    }
});

// GET /bfhl endpoint for testing
app.get('/bfhl', (req, res) => {
    res.status(200).json({
        operation_code: 1
    });
});

// Health check endpoint
app.get('/', (req, res) => {
    res.json({
        message: "Bajaj REST API is running",
        endpoints: {
            "POST /bfhl": "Main processing endpoint",
            "GET /bfhl": "Operation code endpoint"
        }
    });
});

// Error handling middleware
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({
        is_success: false,
        error: "Something went wrong!"
    });
});

// 404 handler
app.use('*', (req, res) => {
    res.status(404).json({
        is_success: false,
        error: "Route not found"
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    console.log(`API endpoint: http://localhost:${PORT}/bfhl`);
});

module.exports = app;
