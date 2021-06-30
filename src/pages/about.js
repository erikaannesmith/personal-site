import React from "react";
import {
  StyledContent,
  StyledExperience,
  StyledExperienceItems,
  StyledExperienceSummary,
  StyledDivider,
  StyledExperienceHeader,
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
                {item.name}
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
