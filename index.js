const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000;

const profile = {
    personalInfo: {
        name: 'Princess Kenshi P. Quitor',
        birthdate: 'October 9, 2003',
        gender: 'Female',
        age: '20',
        address: 'Sitio San Vicente, Lahug, Cebu City',
        phoneNumber: '0927-515-0359',
        email: 'princesskenshi73@gmail.com'
    },
    aboutme: {
        description: "Hello, I am Princess Kenshi P. Quitor, but you can call me Kenshi. I'm a digital artist and 2nd year IT college student. I'm currently learning coding and exploring more things about programming. A hardworking person who wants to be a full-stack developer soon, in order to create new and more creative ideas."
    },
    skills: [
        'Illustrator',
        'HTML/CSS',
        'Javascript'
    ],
  education: [
    {
    school: 'University of Southern Philippines Foundation',
    level: 'Bachelor of Science in Information Technology (BSIT)',
    year: '2022-2026',
    address: 'Salinas Drive, Lahug, Cebu City',
  },
 {
    school: 'University of Southern Philippines Foundation',
    level: 'Senior High School [STEM]',
    year: '2020-2022',
    address: 'Salinas Drive, Lahug, Cebu City'
  }
],
  experience: [
    'No Experience Yet'
  ],
  reference: [
    'No Reference Yet'
  ],
};

// Enable CORS for all routes
app.use(cors());

app.get('/', (req, res) => {
  res.json(profile);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});