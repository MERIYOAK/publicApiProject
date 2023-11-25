// Import required modules
import express from 'express'; // Import the Express framework
// Create an Express app and set the port number
const app = express();
const port = 3000;

// Serve static files from the "public" folder
app.use(express.static("public"));

// Define a route for the home page
app.get('/', async (req, res) => {
    try {
        // Send a GET request to the Coingecko API to get exchange rates
        const response = await axios.get("https://api.coingecko.com/api/v3/exchange_rates");
        res.render("index.ejs", { content: response.data }); // Render the "index.ejs" view with the API data
    }
    catch (error) {
        console.log(error.response.data); // Log the error response data to the console
        res.render("index.ejs", { error: error.response.data }); // Render the "index.ejs" view with the error data
    }
})

// Start the server and listen on the specified port
app.listen(port, () => {
    console.log(`Listening on port ${port}`);
})
