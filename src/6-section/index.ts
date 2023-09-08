import express from 'express';
import usersRoute from './users'

const app = express();
app.use(express.json());
// Routes
app.use('/', usersRoute)

app.listen(3000, () => console.log('Servidor escuchando'))
