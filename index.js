const express = require('express');
const app = express();
const port = 3000;

//routes
app.get('/', (req, res) => {
    const resume = 
    {
        Personal_Information: 
        [
            {
                name: "Princess Kenshi P. Quitor",
                Address: "Sitio San Vicente, Lahug, Cebu City",
                ContactNo: "0927-515-0359",
                Email: "princesskenshi73@gmail.com",
                Birthdate: "October 9, 2003",
                Gender: "Female"
    
            }
        ],

        About_Me: 
        [
            { 
                Description: "Hello, I am Princess Kenshi P. Quitor, but you can call me Kenshi. I'm a digital artist and 2nd year IT college student. I'm currently learning coding and exploring more things about programming. A hardworking person who wants to be a full-stack developer soon, in order to create new and more creative ideas."
            }
        ],
        
        Skills: 
        [
            {
                SkillName: "Illustrator",
                SkillName: "HTML/CSS",
                SkillName: "Javascript"
            }
        ],
        
        Work_Experience:
        [
            {
                Description: "No Experience Yet"
            }
        ],

        Education:
        [
            {
                Level: "College",
                Degree: "Bachelor of Science in Information Technology (BSIT)",
                School: "University of Southern Philippines Foundation (USPF)",
                Year: "2023-2024"

            }
        ],

        References: 
        [
            {
                Description: "No Reference Yet"

            }
        ],
    };

    res.json(resume);
});

//start
app.listen(port, () => {
    console.log('Server running on port ${3000}');
});