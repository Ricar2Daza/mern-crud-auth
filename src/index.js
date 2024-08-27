import app from "./app.js"
import { connectDB } from "./db.js"

connectDB();
app.listen(2000)
console.log('Server on port',2000)
