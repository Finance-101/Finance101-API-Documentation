/**
 * Server setup and configuration for the Finance101 application.
 * @module server
 */

// Import required modules
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const fs = require('fs');
const YAML = require('yaml')

// Create an Express application
const app = express();

// Swagger options
const file = fs.readFileSync('./docs/swagger.yaml', 'utf8')
const swaggerDocument = YAML.parse(file)

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs',
    swaggerUi.setup(swaggerDocument, {
        explorer: true,
        customCssUrl:
            "https://cdn.jsdelivr.net/npm/swagger-ui-themes@3.0.0/themes/3.x/theme-material.css",
    }));

const port = 8082;
app.listen(port, () => {
    console.log("Server started...")
});