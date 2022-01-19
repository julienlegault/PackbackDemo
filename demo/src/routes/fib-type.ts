import express from 'express';

const router = express.Router();

router.get('/api/fibtype', (req, res) => {
    let {a1, a2, n} = req.body;
    let result = a1;
    switch(n){
        case 1:
            break;
        case 2:
            result = a2;
            break;
        default:
            let i = 3;
            while(i <= n){
                let temp = a1 + a2;
                a1 = a2;
                a2 = temp;
                i++;
            }
            result = a2;
            break;
    }
    res.status(200).send(String(a2));
});

export { router as fibTypeRouter };