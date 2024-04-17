const mongoose = require("mongoose");

const username = "nabeelnazeer2565"; // Replace with your actual username
const password = "UEhYYWZIFkKzskfW"; // Replace with your actual password

mongoose.connect(`mongodb+srv://${username}:${password}@cluster0.eddiswq.mongodb.net/otterly?retryWrites=true&w=majority&appName=Cluster0`, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {
  console.log("MongoDB connected");
})
.catch((err) => {
  console.error("MongoDB connection error:", err);
});

const newSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});

const collection = mongoose.model("collection", newSchema);

module.exports = collection;
