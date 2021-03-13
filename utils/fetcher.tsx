export default async function Fetcher(url, ...args) {
  const res = await fetch(url, ...args);

  return res.json();
}
