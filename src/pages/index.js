import React from "react";
import { StyledContent, StyledProfileImage, StyledInfoTitle, StyledInfoSection } from "../styles/index.styles"

export default function Home({ userData = {} }) {
  return (
    <StyledContent>
      <StyledProfileImage width={200} src={userData.avatar_url} />
      <div>
        <StyledInfoSection>
          <StyledInfoTitle>location</StyledInfoTitle>
          michigan → san francisco → colorado
        </StyledInfoSection>
        <StyledInfoSection>
          <StyledInfoTitle>education</StyledInfoTitle>
          michigan state university → turing school of software & design
        </StyledInfoSection>
        <StyledInfoSection>
          <StyledInfoTitle>work</StyledInfoTitle>
          stitch fix → formidable labs
        </StyledInfoSection>
      </div>
    </StyledContent>
  );
}

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
