import bodyParser from "body-parser";
import e from "express";
import path from 'path'

import { fileURLToPath } from 'url';
import { dirname } from 'path';
import router from "./routes/user-routes.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
const app = e();

app.use(bodyParser.json())

app.use(e.static(path.join(__dirname, 'public')))

app.use('todo-list', router)

export default app