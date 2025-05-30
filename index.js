import express from 'express';
import { dirname } from "path"
import { fileURLToPath } from "url";
import bodyParser from 'body-parser';
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 7000

app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs'); 
app.set('views', __dirname); 
app.use(express.static('public'));


const posts = []; 

app.get('/', (req, res) => {
  res.render('main', { posts });
});

app.post('/create-post', (req, res) => {
  const { title, content } = req.body; 
  const newPost = { title, content }; 
  posts.push(newPost); 
  res.redirect('/'); 
});

app.post('/delete-post', (req, res) => {
  const { index } = req.body; 
  posts.splice(index, 1); 
  res.redirect('/'); 
});

app.get('/edit-post/:index', (req, res) => {
  const index = req.params.index;
  const post = posts[index]; 
  res.render('edit', { index, post }); 
});

app.post('/update-post/:index', (req, res) => {
  const index = req.params.index; 
  const { title, content } = req.body; 
  posts[index] = { title, content }; 
  res.redirect('/'); 
});


app.listen(port, () => {
  console.log(`App listening on port ${port}`)
})