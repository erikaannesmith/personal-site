import React from "react";
import {
  StyledContent,
  StyledExperience,
  StyledExperienceItems,
  StyledExperienceSummary,
  StyledDivider,
  StyledExperienceHeader,
  StyledItemLink,
} from "../styles/about.styles.js";
import experiences from "../../public/data/experiences";

const About = () => {
  return (
    <StyledContent>
      {experiences.map((experience) => (
        <StyledExperience>
          <StyledExperienceHeader>
            {experience.title}
            <StyledDivider />
          </StyledExperienceHeader>
          <StyledExperienceItems>
            {experience.items.map((item) => (
              <div>
                <StyledItemLink href={item.link} target="_blank">
                  {item.name}
                </StyledItemLink>
                <br />
                {item.timeline}
                <StyledExperienceSummary>
                  {item.summary}
                </StyledExperienceSummary>
              </div>
            ))}
          </StyledExperienceItems>
        </StyledExperience>
      ))}
    </StyledContent>
  );
};

export default About;
