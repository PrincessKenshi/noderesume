const express = require('express');
const cors = require('cors'); 
const app = express();
const port = 3000;

const profile = {
    personalInfo: [
            {
                name: "Princess Kenshi P. Quitor",
                Address: "Sitio San Vicente, Lahug, Cebu City",
                ContactNo: "0927-515-0359",
                Email: "princesskenshi73@gmail.com",
                Birthdate: "October 9, 2003",
                Gender: "Female",
                Age: "20",
                profile_pic: "https://scontent-mnl1-1.xx.fbcdn.net/v/t39.30808-6/336648301_873752613730450_320881333241351639_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeHOtyirn024oKdxXd-_hmloPQJxbH9g4sM9AnFsf2Diw1xrhZHadgdRGf091QrdmqUTa3S8aChHsAgKktRqdI-7&_nc_ohc=BP4s9RXEejUAb7GKmUa&_nc_ht=scontent-mnl1-1.xx&oh=00_AfCWIfdumqzGLjjMHc6xJqtBb6emXQGY1yIf0rhBycB19g&oe=66298123"
            }
    ],
    
    About_Me: [
            {
                Description: "Hello, I am Princess Kenshi P. Quitor, but you can call me Kenshi. I'm a digital artist and 2nd year IT college student. I'm currently learning coding and exploring more things about programming. A hardworking person who wants to be a full-stack developer soon, in order to create new and more creative ideas."
            }
    ],
    
        Skills: [
            {
                SkillName: "Illustrator",
                Percentage: "85%"
            },
            {
                SkillName: "HTML/CSS",
                Percentage: "30%"
            },
            {
                SkillName: "Javascript",
                Percentage: "15%"
            }
        ],
    
        Education: [
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
    
        Work_Experience: [
            {
                Description: "No Experience Yet"
            }
        ],
    
        References: [
            {
                Description: "No Reference Yet"
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