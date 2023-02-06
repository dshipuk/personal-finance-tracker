require("dotenv").config();
const PORT = process.env.PORT || 9000;
const app = require("./api/server");

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});
