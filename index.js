import express from 'express';
import { dirname } from "path"
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 7000


app.set('view engine', 'ejs'); 
app.set('views', __dirname); 

app.get('/', (req, res) => {
  res.render("main");
})

app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})