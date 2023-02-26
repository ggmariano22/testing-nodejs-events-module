import express from 'express';
import orderRoutes from './src/routes/orderRoute.js';

const port = 3000;
const app = express();

app.use(express.json())
app.use('/orders', orderRoutes);

app.listen(port, () => {
    console.log(`Server running at port ${port}`);
})

