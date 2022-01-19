import express from 'express';

const router = express.Router();

router.get('/api/helloworld', (req, res) => {
    res.status(200).send('Hello World!');
});

export { router as helloWorldRouter };