import express, { Application } from 'express';

// defining the Express app
const app: Application = express();

const sum = (a: number, b: number) => a + b;

console.log(sum(1, 1));


