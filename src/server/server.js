const express = require("express")
const cors = require("cors")
const connectDB = require("../db")
const routerPhone = require("./routes/PhoneRouter")
const app = express()
const PORT = 5000
connectDB()
app.use(cors());
app.use(express.json())
app.use("/api/phone", routerPhone)
app.listen(PORT , () => {
    console.log(`Сторінку знайдено", ${PORT}`)
})