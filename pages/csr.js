import { useEffect, useState } from "react";
import { apiUrl } from "../lib/api";

export default function ClientSideRendered() {
  const [state, setState] = useState([]);

  async function getData() {
    const res = await fetch(apiUrl);
    const data = await res.json();
    setState(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      {state.map((e) => (
        <h2 key={e.id}>{e.name}</h2>
      ))}
    </>
  );
}
