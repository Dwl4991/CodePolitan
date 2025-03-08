const loadPeople = async () => {
  try {
    const res = await fetch("https://swapi.dev/api/peoplesdfg/1");
    const data = await res.json();
    console.log(data);
    const res2 = await fetch("https://swapi.dev/api/people/2");
    const data2 = await res2.json();
    console.log(data2);
  } catch (error) {
    console.log("error", error);
  }
};

loadPeople();
