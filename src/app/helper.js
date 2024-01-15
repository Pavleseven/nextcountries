export const getCountries = async function (state) {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  state(data);
  console.log(data);
};

export const searchCountry = async function (state, q) {
  const res = await fetch(`https://restcountries.com/v3.1/name/${q}`);
  const data = await res.json();
  state(data);
};

export const singleCountry = async function (q) {
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${q}?fullText=true`
  );
  //restcountries.com/v3.1/name/{name}?fullText=true

  return await res.json();
};
