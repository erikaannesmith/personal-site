import React from "react";

export default function Home({ userData = {} }) {
  return <><img width={100} src={userData.avatar_url}/>ERIKA SMITH</>;
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
