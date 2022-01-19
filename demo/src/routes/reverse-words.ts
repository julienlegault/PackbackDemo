import express from 'express';

const router = express.Router();

router.get('/api/reversewords', (req, res) => {
    const reversed = req.body.string;
    res.status(200).send(reversed.split(' ').reverse().join(' '));
});

export { router as reverseStringRouter };