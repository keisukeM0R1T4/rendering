// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  try {
    await res.unstable_revalidate("/isr-on/demand");
    return res.json({ revalidate: true });
  } catch (err) {
    return res.status(500).send("Error revalidating");
  }
}
