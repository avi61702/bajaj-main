const axios = require('axios');

const testAPI = async () => {
    const baseURL = 'http://localhost:3000';
    
    console.log('Testing Bajaj REST API...\n');
    
    // Test Example A
    console.log('=== Test Example A ===');
    try {
        const responseA = await axios.post(`${baseURL}/bfhl`, {
            data: ["a", "1", "334", "4", "R", "$"]
        });
        console.log('Request:', JSON.stringify({ data: ["a", "1", "334", "4", "R", "$"] }, null, 2));
        console.log('Response:', JSON.stringify(responseA.data, null, 2));
    } catch (error) {
        console.error('Error in Example A:', error.message);
    }
    
    console.log('\n=== Test Example B ===');
    try {
        const responseB = await axios.post(`${baseURL}/bfhl`, {
            data: ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"]
        });
        console.log('Request:', JSON.stringify({ data: ["2", "a", "y", "4", "&", "-", "*", "5", "92", "b"] }, null, 2));
        console.log('Response:', JSON.stringify(responseB.data, null, 2));
    } catch (error) {
        console.error('Error in Example B:', error.message);
    }
    
    console.log('\n=== Test Example C ===');
    try {
        const responseC = await axios.post(`${baseURL}/bfhl`, {
            data: ["A", "ABcD", "DOE"]
        });
        console.log('Request:', JSON.stringify({ data: ["A", "ABcD", "DOE"] }, null, 2));
        console.log('Response:', JSON.stringify(responseC.data, null, 2));
    } catch (error) {
        console.error('Error in Example C:', error.message);
    }
    
    console.log('\n=== Test GET /bfhl ===');
    try {
        const getResponse = await axios.get(`${baseURL}/bfhl`);
        console.log('GET Response:', JSON.stringify(getResponse.data, null, 2));
    } catch (error) {
        console.error('Error in GET request:', error.message);
    }
};

testAPI();
