require("dotenv").config(); // make sure you have '.env' file in pwd
const fs = require("fs");

fs.writeFileSync(
  "./public/swenv.js",
  `
const process = {
  env: {
    API_KEY: conf.API_KEY
  }
}
`
);
