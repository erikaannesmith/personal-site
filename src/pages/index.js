import React from "react";
import {
  StyledTopContent,
  StyledProfileImage,
  StyledInfoTitle,
  StyledInfoSection,
  StyledBottomContent,
  StyledSectionInfo,
  StyledInfo,
  StyledLearnMore,
  StyledValue,
  StyledExperiences,
} from "../styles/index.styles";
import experiences from "../../public/data/experiences";

export default function Home({
  userData = {},
  activeSection,
  setActiveSection,
}) {
  return (
    <>
      <StyledTopContent>
        <StyledProfileImage width={300} src="./headshot.JPG" />
        <StyledExperiences>
          {experiences.map((experience) => (
            <StyledInfoSection
              key={experience.title}
              onClick={() => setActiveSection(experience.title)}
              isActive={activeSection === experience.title}
            >
              <StyledInfoTitle>{experience.title}</StyledInfoTitle>
              <StyledValue>
                {experience.items.map((item) => item.name).join(" → ")}
              </StyledValue>
            </StyledInfoSection>
          ))}
        </StyledExperiences>
      </StyledTopContent>
      {!activeSection && (
        <StyledLearnMore>
          hi there! click a section to learn more ☝🏼
        </StyledLearnMore>
      )}
      <StyledBottomContent>
        <SectionInfo section={activeSection} />
      </StyledBottomContent>
    </>
  );
}

const SectionInfo = ({ section }) => {
  const sectionData = experiences.find(
    (experience) => experience.title === section
  );
  return (
    section && (
      <StyledSectionInfo>
        {sectionData.items.map((item) => (
          <div key={item.name}>
            <a href={item.link} target="_blank">
              <StyledInfo className="name">{item.name}</StyledInfo>
            </a>
            <StyledInfo className="timeline">{item.timeline}</StyledInfo>
            <StyledInfo className="summary">{item.summary}</StyledInfo>
          </div>
        ))}
      </StyledSectionInfo>
    )
  );
};

export async function getStaticProps() {
  const response = await fetch(
    `https://api.github.com/users/erikaannesmith`
  ).then((response) => response.json());

  return {
    props: {
      userData: response,
    },
  };
}
