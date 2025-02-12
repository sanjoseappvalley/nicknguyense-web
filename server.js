const express = require('express')
const cors = require('cors')
const dotenv = require("dotenv")

dotenv.config()

const app = express()
app.use(cors()) // Allow frontend to connect

app.use(express.json())

// Define API routes first
app.get('/api/hello', (req, res) => {
    console.log('API /api/hello was called')
    res.json({ message: 'Hello from the backend!' })
})

app.get('/api/info', (req, res) => {
    console.log('API /api/info was called')
    res.json({
        name: 'Nick Nguyen',
        vietname: 'Nghia Nguyen',
        jobs: [
            'Software Engineer',
            'Cook'
        ],
        age: '25+',
        height: '1m8',
        weight: 'not fat but need to lose some',
        language: 'English and Vietnamese',
        location: 'San Jose, CA',
        companies: [
            'Meta',
            'IBM'
        ],
        experiences: [
            'Automation Engineer',
            'Backend Engineer',
            'Web developer',
            'QA Software Engineer',
            'Data Analyst'
        ]
    })
})

app.get('/api/projects', (req, res) => {
    console.log('API /api/projects was called')
    res.json({
        p1: 'Personal site',
        p2: 'Playwright Automation Testing',
        p3: 'Selenium Automation Testing',
        p4: 'API Testing with Python Pytest'
    })
})

// Serve static frontend files after API routes
app.use(express.static('public'))

app.get('*', (req, res) => {
    res.sendFile(__dirname + '/public/index.html')
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`Backend running on http://localhost:${PORT}`)
});

