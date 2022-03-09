const express = require("express");
const app = express();
const cors = require('cors')

app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = process.env.PORT || 8080;

require("./routes")(app);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
