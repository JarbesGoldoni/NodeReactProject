import express, { Request, Response } from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'

// Initialize the express application
const app = express()
// Set the port from environment or default to 4000
const port = process.env.PORT ? parseInt(process.env.PORT) : 4000

// Middleware to enable CORS (Cross-Origin Resource Sharing)
app.use(cors())
// Middleware to parse JSON bodies
app.use(express.json())

// Define the path to the JSON data file
const filePath = path.join(__dirname, 'data.json')

// Handle GET requests to '/api', to read and return data from the JSON file
app.get('/api', (req: Request, res: Response) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ error: 'Error reading data file' })
    }

    try {
      const fileData = JSON.parse(data)
      res.json(fileData)
    } catch (parseError) {
      console.error(parseError)
      res.status(500).json({ error: 'Error parsing data file' })
    }
  })
})

// Handle POST requests to '/api/update', to update the user data in the JSON file
app.post('/api/update', (req, res) => {
  const newUserData = req.body

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ error: 'Error reading data file' })
    }

    try {
      const fileData = JSON.parse(data)
      // Update the user data with new data from the request body
      fileData.user = newUserData

      fs.writeFile(
        filePath,
        JSON.stringify(fileData, null, 2), // Beautify the JSON output
        'utf8',
        (writeErr) => {
          if (writeErr) {
            console.error(writeErr)
            return res.status(500).json({ error: 'Error writing data file' })
          }
          res.json({ message: 'User data updated successfully' })
        }
      )
    } catch (parseError) {
      console.error(parseError)
      res.status(500).json({ error: 'Error parsing data file' })
    }
  })
})

// Start the server on the specified port
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`)
})

export { app }
