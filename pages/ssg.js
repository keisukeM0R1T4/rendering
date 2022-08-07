import { apiUrl } from "../lib/api";

export default function StaticSiteGeneration({ data }) {
  return (
    <>
      {data.map((e) => (
        <h2 key={e.id}>{e.name}</h2>
      ))}
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch(apiUrl);
  const data = await res.json();

  return {
    props: {
      data,
    },
  };
}
