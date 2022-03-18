const baseUrl = "https://api.adviceslip.com/advice";

export const getRandomAdvice = () => {
  return fetch(baseUrl)
    .then((res) => res.json())
    .then((data) => data.slip);
};

export const getAdviceById = (id: number) => {
  return fetch(`${baseUrl}/${id}`)
    .then((res) => res.json())
    .then((data) => data.slip);
};
