import React from "react";
import {
  StyledProfileImageWrapper,
  StyledProfileImage,
  StyledBlurb,
  StyledBlurbSection,
  StyledDivider,
  StyledBlurbIntro,
} from "../styles/index.styles";

export default function Home() {
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
          best possible product. I believe that the work we do can and does make
          a difference and it's our responsibility to ensure that the tools we
          build make the world a better place for everyone.
        </StyledBlurbSection>
      </StyledBlurb>
    </>
  );
}
