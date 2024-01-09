import express, { Request, Response } from 'express'
import cors from 'cors'
import fs from 'fs'
import path from 'path'

const app = express()
const port = process.env.PORT ? parseInt(process.env.PORT) : 4000

app.use(cors())
app.use(express.json())

// Change file path to point to data.json
const filePath = path.join(__dirname, 'data.json')

// GET request to retrieve data from the file
app.get('/api', (req: Request, res: Response) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ error: 'Error reading data file' })
    }

    try {
      // Directly parse the data since it's already in JSON format
      const fileData = JSON.parse(data)
      res.json(fileData)
    } catch (parseError) {
      console.error(parseError)
      res.status(500).json({ error: 'Error parsing data file' })
    }
  })
})

// POST request to update data in the file
app.post('/api/update', (req, res) => {
  const newUserData = req.body

  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error(err)
      return res.status(500).json({ error: 'Error reading data file' })
    }

    try {
      const fileData = JSON.parse(data)
      fileData.user = newUserData

      // Write the updated object back to the file
      fs.writeFile(
        filePath,
        JSON.stringify(fileData, null, 2),
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

// Start the server
app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}/`)
})

export { app }
