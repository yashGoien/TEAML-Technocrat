const teams = [
  {
    _id: "1",
    members: ["5b21ca3eeb7f6fbccd472315"],
    name: "Peach"
  },
  {
    _id: "2",
    members: ["5b21ca3eeb7f6fbccd472315", "5b21ca3eeb7f6fcdcd472314"],
    name: "Lemon"
  },
  {
    _id: "3",
    members: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fcdcd472314"],
    name: "Sugar"
  },
  {
    _id: "4",
    members: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fcdcd472314"],
    name: "KOKO"
  },
  {
    _id: "5",
    members: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fcdcd472314"],
    name: "Ard---ino"
  },
  {
    _id: "6",
    members: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fcdcd472314"],
    name: "i/o"
  },
  {
    _id: "7",
    members: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fcdcd472314"],
    name: "heyThere!"
  },
  {
    _id: "8",
    members: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fcdcd472314"],
    name: "Shhhh.."
  },
  {
    _id: "9",
    members: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fcdcd472314"],
    name: "master"
  },
  {
    _id: "10",
    members: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fcdcd472314"],
    name: "Korin"
  },
  {
    _id: "11",
    members: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fcdcd472314"],
    name: "Kraken"
  },
  {
    _id: "12",
    members: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fcdcd472314"],
    name: "PineAPP"
  },
  {
    _id: "13",
    members: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fcdcd472314"],
    name: "Fantastik"
  },
  {
    _id: "20",
    members: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fcdcd472314"],
    name: "High5"
  },
  {
    _id: "21",
    members: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fcdcd472314"],
    name: "deccans"
  },
  {
    _id: "22",
    members: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fcdcd472314"],
    name: "Creator"
  }
];

export function getTeams() {
  return teams;
}

export function getTeam(id) {
  return teams.find(m => m._id === id);
}

export function saveTeam(team) {
  let teamInDb = teams.find(m => m._id === team._id) || {};
  teamInDb.members = team.members;

  if (!teamInDb._id) {
    teamInDb._id = Date.now().toString();
    teams.push(teamInDb);
  }

  return teamInDb;
}

export function deleteMovie(id) {
  let teamInDb = teams.find(m => m._id === id);
  teams.splice(teams.indexOf(teamInDb), 1);
  return teamInDb;
}
