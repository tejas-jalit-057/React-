import { useState } from 'react'
import './App.css'
import Card from "./components/Card.jsx"

function App() {
  const jobOpenings = [
  {
    companyName: "Google",
    datePosted: "2 days ago",
    post: "Frontend Developer",
    tag1: "React",
    tag2: "JavaScript",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
    pay: "₹12–18 LPA"
  },
  {
    companyName: "Microsoft",
    datePosted: "5 days ago",
    post: "Software Engineer",
    tag1: "C++",
    tag2: "DSA",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
    pay: "₹15–22 LPA"
  },
  {
    companyName: "Amazon",
    datePosted: "1 week ago",
    post: "Full Stack Developer",
    tag1: "Node.js",
    tag2: "React",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
    pay: "₹10–16 LPA"
  },
  {
    companyName: "Netflix",
    datePosted: "3 days ago",
    post: "UI Engineer",
    tag1: "UI/UX",
    tag2: "CSS",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
    pay: "₹18–25 LPA"
  },
  {
    companyName: "Meta",
    datePosted: "Today",
    post: "React Developer",
    tag1: "React",
    tag2: "Hooks",
    brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
    pay: "₹20–28 LPA"
  }
];


  return (
    <>
      <div className="parent">
        {jobOpenings.map((elem, idx) => (
          <div key={idx}>
            <Card
              company={elem.companyName}
              datePosted={elem.datePosted}
              post={elem.post}
              tag1={elem.tag1}
              tag2={elem.tag2}
              brandLogo={elem.brandLogo}
              pay={elem.pay}
            />
          </div>
        ))}
      </div>

    </>
  )
}

export default App
