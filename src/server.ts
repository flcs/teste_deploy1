import express, { json, Router } from 'express';
// 
const app = express();
app.use(json());

const router = Router();
router.get('/', (req, res) => {
    console.log('aqui');
    res.status(200).json({msg: 'ok'})
})

app.use(router)


app.listen(3000, () =>{
    console.log('ouvindo 3000');
})

