

const express = require("express");
const axios = require("axios");

const app = express();

const PORT = process.env.PORT || 3000 ;


app.get('/api/number/:number',async (request,response)=>{
    try{
        const {number} = request.params;

        const apiResponse = await axios.get(`http://numbersapi.com/${number}/math`);
        return apiResponse;
    }catch (error) {
        
        console.error(error);
        response.status(500).json({ error: 'Internal Server Error' });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
