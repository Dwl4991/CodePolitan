const jokes = document.querySelector("#jokes");

const addJoke = async () => {
  const jokeText = await getJokes();
  const newLI = document.createElement("LI");
  newLI.append(jokeText);
  jokes.append(newLI);
};

const getJokes = async () => {
  try {
    const config = {
      headers: {
        Accept: "application/json",
      },
    };
    const res = await axios.get("https://icanhazdadjoke.com23/", config);
    return res.data.joke;
  } catch (error) {
    return " joke g ada";
  }
};

// button.addEventListerner(`click`, addJoke);
document.querySelector("#jokeBtn").addEventListener("click", addJoke);
