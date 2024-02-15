import React from "react";
import NaveBar from "./Component/NaveBar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import All from "./Component/Components2/All";
import FullStack from "./Component/Components2/FullStack";
import CyberSecurity from "./Component/Components2/CyberSecurity";
import DataScience from "./Component/Components2/DataScience";
import Career from "./Component/Components2/Career";
import "./index.css";

const App = () => {
  const data = [
    {
      id: 1,
      field: "fullstack",
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-What-Does-a-Top-Backend-Developer-Do-The-Ultimate-Guide.webp",
      title: "What Does a Top Backend Developer Do? The Ultimate Guide",
      desc: "Backend development plays a vital role in the functioning of websites and web applications. While",
      date: "15 february 2024",
      comment: "No comments",
    },
    {
      id: 2,
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/02/who_is_a_front_end_developer.webp",
      field: "fullstack",
      title:
        "What is Frontend Development? Roles, Responsibilities, Skills & Salary",
      desc: "Backend development plays a vital role in the functioning of websites and web applications. While",
      date: "15 february 2024",
      comment: "No comments",
    },

    {
      id: 3,
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/02/Feature-image-Top-Full-Stack-Development-Trends-What-to-Expect.webp",
      field: "fullstack",
      title: "Top Full Stack Development Trends for 2024: What to Expect",
      desc: "In the ever-evolving world of technology, developers must stay up-to-date with the latest trends. Full",
      date: "15 february 2024",
      comment: "No comments",
    },
    {
      id: 4,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-Top-High-Paying-Non-Coding-Jobs-in-Data-Science.webp",
      field: "dataScience",
      title: "Top 10 High Paying Non-Coding Jobs in Data Science in 2024",
      desc: "Are you someone who’s not interested in coding, but wants to get placed in tech",
      date: "28 November 2023",
      comment: "No comments",
    },
    {
      id: 5,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Feature-image-1-2048x1024.webp",
      field: "dataScience",
      title: "Impact of Certification Programs on Hiring Data Scientists",
      desc: "Data scientists are the creators behind transforming the raw data into edible data insights. These",
      date: "15 february 2024",
      comment: "No comments",
    },
    {
      id: 6,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/feature-image-product-based-companies-for-data-science-freshers.webp",
      field: "dataScience",
      title: "Top Product-Based Companies for Data Science Freshers",
      desc: "Data scientists are the creators behind transforming the raw data into edible data insights. These",
      date: "15 february 2024",
      comment: "No comments",
    },
    {
      id: 7,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Non-Coding-Jobs-in-Cybersecurity.webp",
      field: "cybersecurity",
      title: "Non-Coding Jobs in Cybersecurity: A Comprehensive Guide",
      desc: "In the rapidly evolving field of cybersecurity, there is a common misconception that coding skills",
      date: "4 december 2023",
      comment: "No comments",
    },
    {
      id: 8,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/09/Feature-image-What-Is-Hacking_-Types-of-Hacking-More.webp",
      field: "cybersecurity",
      title: "What Is Hacking? Types of Hacking & More",
      desc: "Have you ever wondered what hacking is all about? It’s a big deal in today’s",
      date: "15 february 2024",
      comment: "No comments",
    },
    {
      id: 9,
      img: "https://d2ds8yldqp7gxv.cloudfront.net/Blog+Images/474.webp",
      field: "cybersecurity",
      title: "Cybersecurity Vs Ethical Hacking: Top 10 Differences",
      desc: "Cybersecurity & Ethical hacking and have been key in making sure that your data online",
      date: "15 february 2024",
      comment: "No comments",
    },
    {
      id: 10,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/11/Featured-Image-2048x1072.webp",
      field: "career",
      title: "9 Best Product-Based Companies for Project Management",
      desc: "In today’s tech-driven world, the demand for project managers is higher than before. The workload",
      date: "15 february 2024",
      comment: "No comments",
    },
    {
      id: 11,
      img: "https://www.guvi.in/blog/wp-content/uploads/2024/01/Feature-image-Top-Technologies-to-Learn-Jumpstart-a-Successful-Tech-Career.webp",
      field: "career",
      title:
        "Top Technologies to Learn in 2024: JumpStart a Successful Tech Career",
      desc: "Data scientists are the creators behind transforming the raw data into edible data insights. These",
      date: "15 february 2024",
      comment: "No comments",
    },
    {
      id: 12,
      img: "https://www.guvi.in/blog/wp-content/uploads/2023/12/Feature-image-Top-IT-Jobs-for-Commerce-Students.webp",
      field: "career",
      title: "Top IT Jobs for Commerce Students: A Lucrative Career Path",
      desc: "With the rapid advancement of technology, the demand for IT professionals has soared in recent",
      date: "15 february 2024",
      comment: "No comments",
    },
  ];
  return (
    <>
      <BrowserRouter>
        <div className="container">
          <div>
            <NaveBar />
          </div>

          <Routes>
            <Route path="/" element={<All data={data} />} />
            <Route path="/FullStack" element={<FullStack data={data} />} />
            <Route path="/DataScience" element={<DataScience data={data} />} />
            <Route
              path="/CyberSecurity"
              element={<CyberSecurity data={data} />}
            />
            <Route path="/Career" element={<Career data={data} />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default App;
