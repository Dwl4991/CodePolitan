const form = document.querySelector("#search-form");

form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const keyword = form.elements.query.value;
  const config = {
    params: { q: keyword },
  };
  const res = await axios.get("https://api.tvmaze.com/search/shows", config);
  console.log(res.data);
});
