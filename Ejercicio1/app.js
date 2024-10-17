import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import router from './public/src/routes/user.routes.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});