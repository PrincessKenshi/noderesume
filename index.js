const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000;

const profile = {
    personalInfo: 
        {
                name: 'Princess Kenshi P. Quitor',
                birthdate: 'October 9, 2003',
                gender: 'Female',
                age: '20',
                address: 'Sitio San Vicente, Lahug, Cebu City',
                phoneNumber: '0927-515-0359',
                email: 'princesskenshi73@gmail.com',
                profile_pic: "https://scontent-mnl1-1.xx.fbcdn.net/v/t39.30808-6/336648301_873752613730450_320881333241351639_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHOtyirn024oKdxXd-_hmloPQJxbH9g4sM9AnFsf2Diw1xrhZHadgdRGf091QrdmqUTa3S8aChHsAgKktRqdI-7&_nc_ohc=BP4s9RXEejUAb7GKmUa&_nc_ht=scontent-mnl1-1.xx&oh=00_AfCWIfdumqzGLjjMHc6xJqtBb6emXQGY1yIf0rhBycB19g&oe=66298123"
        },

    fjob: [
        "Web Developer"
    ],
    
    aboutme:
            [
                "Hello, I am Princess Kenshi P. Quitor, but you can call me Kenshi. I'm a digital artist and 2nd year IT college student. I'm currently learning coding and exploring more things about programming. A hardworking person who wants to be a full-stack developer soon, in order to create new and more creative ideas."
            ],
    
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
            },

            {
                school: "University of Southern Philippines Foundation",
                level: "Junior High School",
                year: "2016-2020",
                address: "Salinas Drive, Lahug, Cebu City"
            },

            {
                school: "University of Southern Philippines Foundation",
                level: "Elementary School",
                year: "2012-2016",
                address: "Salinas Drive, Lahug, Cebu City"
            },

            {
                school: "Lahug Christian School",
                level: "Pre-School",
                year: "2010-2012",
                address: "Gorordo Ave, Lahug, Cebu City"
            },

            {
                school: "uspf",
                level: "elementary",
                year: "2009",
                address: "lahug cebu city"
            }
        ],
    
    experience: 
            [
                'No Working Experience Yet'
            ],

    awards: 
    [
        'Poster Making(1st place) - JHS (Grade 7)',
        'Poster Making(3rd place) - JHS (Grade 9)',
        'Deans List - College [BSIT] (1st Year)',
        'Deans List - College [BSIT] (2nd Year)',
        'Best in programming (2024)'
    ],
    
    references: 
    [
        { 
            name: 'Sir Ruben',
            work: 'Teacher',
            contactno: '09876543210'
        }
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