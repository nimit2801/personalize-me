import { join } from 'path'
import { Low, JSONFile } from 'lowdb'

// Use JSON file for storage
const file = join(__dirname, 'db.json')
const adapter = new JSONFile(file)
const db = new Low(adapter)

// Read data from JSON file, this will set db.data content
await db.read()

// If file.json doesn't exist, db.data will be null
// Set default data
db.data ||= { posts: [] }

// Create and query items using plain JS
db.data.posts.push('hello world')
db.data.posts[0]

// You can also use this syntax if you prefer
const { posts } = db.data
posts.push('hello world')

// Write db.data conten