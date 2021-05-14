import dotenv from 'dotenv';
import { app } from './app';

dotenv.config();

app.listen(3333, () => {
  console.log('Server is running on port 3333!');
});
