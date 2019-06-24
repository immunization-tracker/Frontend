const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 5000;
const app = express();
const token =
  'esfeyJ1c2VySWQiOiJiMDhmODZhZi0zNWRhLTQ4ZjItOGZhYi1jZWYzOTA0NUIhkufemQifQ';

let nextId = 7;

let patients = [
  {
    id: 1,
    name: 'Ben',
    age: 30,
    email: 'ben@lambdaschool.com',
    gender: 'm',
    vaccine: 'mmr'
  },
  {
    id: 2,
    name: 'Austen',
    age: 45,
    email: 'austen@lambdaschool.com',
    gender: 'm',
    vaccine: 'mmr'
  },
  {
    id: 3,
    name: 'Ryan',
    age: 15,
    email: 'ryan@lambdaschool.com',
    gender: 'm',
    vaccine: 'mmr'
  },
  {
    id: 4,
    name: 'Dustin',
    age: 25,
    email: 'D-munny@lambdaschool.com',
    gender: 'm',
    vaccine: 'mmr'
  },
  {
    id: 5,
    name: 'Sean',
    age: 35,
    email: 'sean@lambdaschool.com',
    gender: 'm',
    vaccine: 'mmr'
  },
  {
    id: 6,
    name: 'Michelle',
    age: 67,
    email: 'michelle@gmail.com',
    gender: 'm',
    vaccine: 'mmr'
  }
];

app.use(bodyParser.json());

app.use(cors());

function authenticator(req, res, next) {
  const { authorization } = req.headers;
  if (authorization === token) {
    next();
  } else {
    res.status(403).json({ error: 'User be logged in to do that.' });
  }
}

app.post('/api/login', (req, res) => {
  const { username, password } = req.body;
  if (username === 'a' && password === 'a') {
    req.loggedIn = true;
    res.status(200).json({
      payload: token
    });
  } else {
    res
      .status(403)
      .json({ error: 'Username or Password incorrect. Please see Readme' });
  }
});

app.get('/api/patients', authenticator, (req, res) => {
  setTimeout(() => {
    res.send(patients);
  }, 1000);
});

app.get('/api/patients/:id', authenticator, (req, res) => {
  const patient = patients.find(f => f.id == req.params.id);

  if (patient) {
    res.status(200).json(patient);
  } else {
    res.status(404).send({ msg: 'Patient not found' });
  }
});

app.post('/api/patients', authenticator, (req, res) => {
  const patient = { id: getNextId(), ...req.body };

  patients = [...patients, patient];

  res.send(patients);
});

app.put('/api/patients/:id', authenticator, (req, res) => {
  const { id } = req.params;

  const patientIndex = patients.findIndex(f => f.id == id);

  if (patientIndex > -1) {
    const patient = { ...patients[patientIndex], ...req.body };

    patients = [
      ...patients.slice(0, patientIndex),
      patient,
      ...patients.slice(patientIndex + 1)
    ];
    res.send(patients);
  } else {
    res.status(404).send({ msg: 'Patient not found' });
  }
});

app.delete('/api/patients/:id', authenticator, (req, res) => {
  const { id } = req.params;

  patients = patients.filter(f => f.id !== Number(id));

  res.send(patients);
});

function getNextId() {
  return ++nextId;
}

app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
