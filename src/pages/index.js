import React from "react";
import { StyledProfileImage } from "../styles/index.styles"

export default function Home({ userData = {} }) {
  return (
    <>
      <StyledProfileImage width={200} src={userData.avatar_url} />
      content content content....
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
