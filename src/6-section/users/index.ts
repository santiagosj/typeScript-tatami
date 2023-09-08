import { Router } from "express";

type Ususario = {
    id: string,
    name: string,
}

const router = Router();

router.get('/', (req, res) => {
    res.send('Hello world')
})

router.post('/users', (req, res) => {
    const { name } = req.body as Ususario
    console.log(name);
    res.send('ok')
});

export default router;