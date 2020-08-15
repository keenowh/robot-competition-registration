import axios from "axios";

const registerCompetition = (data, comp) => {
  let playersData = {};
  Object.keys(data).map((k) => {
    if (k.charAt(0) === "p") {
      playersData[k] = data[k];
    }
  });
  const toSubmit = {
    compName: comp["name"],
    players: playersData,
    coach: data["coach"],
    school: data["school"],
  };

  // console.log(toSubmit);
  axios.post("/register", toSubmit);
};

export default registerCompetition;
