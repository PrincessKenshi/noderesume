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
                Gender: "Female",
                Age: "20"
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
                School: "University of Southern Philippines Foundation",
                Level: "Bachelor of Science in Information Technology (BSIT)",
                Year: "2022-2026",
                Address: "Salinas Drive, Lahug, Cebu City"
            },

            {
                School: "University of Southern Philippines Foundation",
                Level: "Senior High School (STEM)",
                Year: "2020-2022",
                Address: "Salinas Drive, Lahug, Cebu City"
            },

            {
                School: "University of Southern Philippines Foundation",
                Level: "Junior High School",
                Year: "2016-2020",
                Address: "Salinas Drive, Lahug, Cebu City"
            },

            {
                School: "University of Southern Philippines Foundation",
                Level: "Elementary School",
                Year: "2012-2016",
                Address: "Salinas Drive, Lahug, Cebu City"
            },

            {
                School: "Lahug Christian School",
                Level: "Pre-school",
                Year: "2010-2012",
                Address: "Gorordo Ave, Lahug, Cebu City"
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
    console.log('Server running on port link ${3000}');
});