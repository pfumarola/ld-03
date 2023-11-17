import dotenv from 'dotenv';
import path from 'path';

if(process.env.NODE_ENV === 'test') {
    console.log("loading test env")
    dotenv.config({ path: path.resolve(process.env.PWD,'./.env.test') });
} else {
    console.log("loading env")
    dotenv.config();
}