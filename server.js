// Import the Express library
const express = require('express');
const app = express();

// Set the port. Render uses the PORT environment variable.
// Use 3000 as a fallback for testing in Codespaces.
const port = process.env.PORT || 3000;

// Define the content for the web page
const fullName = "Your Full Name Here"; // Replace with your name [cite: 28]
const classSection = "Your Class Section Here"; // Replace with your section [cite: 29]
const inspirationalQuote = "Any inspirational quotation goes here!"; // Replace with your quote [cite: 30]

// Define a route for the homepage (/)
app.get('/', (req, res) => {
  // Use HTML to format the output for a browser
  res.send(`
    <!DOCTYPE html>
    <html>
    <head>
        <title>IT 412 Project</title>
        <style>
            body { font-family: Arial, sans-serif; text-align: center; padding: 50px; }
            h1 { color: #333; }
            p { font-size: 1.2em; }
            .quote { font-style: italic; color: #555; margin-top: 30px; }
        </style>
    </head>
    <body>
        <h1>IT 412 Final Project Deployment Test</h1>
        <p><strong>Full Name:</strong> ${fullName}</p>
        <p><strong>Class Section:</strong> ${classSection}</p>
        <p class="quote">"${inspirationalQuote}"</p>
        <hr>
        <p>Server is running Node.js and Express!</p>
    </body>
    </html>
  `);
});

// Start the server and listen on the defined port
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
