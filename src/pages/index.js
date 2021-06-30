import React from "react";
import {
  StyledProfileImageWrapper,
  StyledProfileImage,
  StyledBlurb,
  StyledBlurbSection,
  StyledDivider,
  StyledBlurbIntro,
} from "../styles/index.styles";

export default function Home({ userData = {} }) {
  return (
    <>
      <StyledProfileImageWrapper>
        <StyledProfileImage src="./headshot.JPG" />
      </StyledProfileImageWrapper>
      <StyledBlurb>
        <StyledBlurbIntro>
          Hi there! I'm Erika.
          <StyledDivider />
        </StyledBlurbIntro>
        <StyledBlurbSection>
          I'm a Denver-based software engineer primarily playing in the
          front-end space. I love developing clean, simple solutions to complex
          problems. I believe that collaborating with a broad range of
          backgrounds, experiences, and perspectives enables us to deliver the
          best possible product.
        </StyledBlurbSection>
      </StyledBlurb>
    </>
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
