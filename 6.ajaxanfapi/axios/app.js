// axios
//   .get("https://swapi.dev/api/peoplesdaf/1")
//   .then((res) => {
//     console.log(res.data);
//   })
//   .catch((err) => {
//     console.log(err);
//     alert(err.message);
//   });

const getPeople = async (id) => {
  try {
    const res = await axios.get(`https://swapi.dev/api/people/${id}`);
    console.log(res.data);
  } catch (error) {
    console.log(error);
    console.log(error.message);
    console.log(error.message.status);
    console.log(error.message.data);
  }
};
