import React from "react";
import {
  StyledPortfolioItems,
  StyledPortfolioItem,
} from "../styles/portfolio.styles";

const Portfolio = () => {
  return (
    <StyledPortfolioItems>
      {items.map((item, i) => (
        <StyledPortfolioItem
          href={item.link}
          target="_blank"
          key={item.title + i}
        >
          <div className="title">{item.title}</div>
          <div className="preview">{item.preview}</div>
        </StyledPortfolioItem>
      ))}
    </StyledPortfolioItems>
  );
};

const items = [
  {
    title: "What's in Your Water",
    preview:
      "NextJS + Mapbox app to show water quality breakdown in Denver, CO by location from 2011-2020.",
    link: "https://heuristic-ramanujan-718439.netlify.app/",
  },
  {
    title:
      "The Case for Consistent Documentation (Or, How to Leave a Client in 10 Days)",
    preview:
      "Words can't begin to express the anxiety I felt leaving my first job last spring. I'd been at the company for just under two years and felt an immense amount of loyalty to the team. (I think something about them hiring me as a junior engineer without experience made me feel indebted to them, even years down the line.) As I put in my notice, a question kept nagging me: how could I wrap up two years in two weeks?",
    link: "https://formidable.com/blog/2021/good-documentation/",
  },
];

export default Portfolio;
