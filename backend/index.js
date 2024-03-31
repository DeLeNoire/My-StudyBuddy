//import express from 'express';
const express  = require('express')
//import cors from 'cors';
const cors = require('cors')

const host = process.env.HOST ?? 'localhost';
const port = process.env.PORT ? Number(process.env.PORT) : 3001;

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send({ message: 'Hello API' });
});

app.get('/repos', async (req, res) => {
  try {
    const repoResponse = await fetch('https://api.github.com/users/DeLeNoire/repos');
    const repoData = await repoResponse.json();

    // Map the repository data to extract name and description
    const mappedData = repoData.map(repo => ({
      name: repo.name,
      description: repo.description
    }));

    // Send the mapped data as JSON response
    res.json(mappedData);
  } catch (error) {
    // Handle any errors that occur during fetching or processing
    console.error('Error:', error);
    res.status(500).json({ error: 'An error occurred' });
  }
});


app.listen(port, host, () => {
  console.log(`[ ready ] http://${host}:${port}`);
});


