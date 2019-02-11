import * as genresAPI from "./fakeGenreService";

const user = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    username: "deathStroke",
    gender: "Male",
    phoneNo: 9829184116,
    email: "abc@gmail.com",
    github: "www.github.com/yashGoien",
    linkedin: "www.linkedin.com/yash",
    visibility: true,
    currentTeams: [
      {
        _id: "1",
        title: "Bee",
        members: ["5b21ca3eeb7f6fbccd472315"],
        projectId: "1"
      },
      {
        _id: "2",
        title: "TrueKi",
        members: ["5b21ca3eeb7f6fbccd472315", "5b21ca3eeb7f6fcdcd472314"],
        projectId: "2"
      },
      {
        _id: "3",
        title: "red",
        members: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fcdcd472314"],
        projectId: "3"
      }
    ],
    upvotes: [
      "5b21ca3eeb7f6fbccd472315",
      "5b21ca3eeb7f6fcdcd472314",
      "5b21ca3eeb7f6fcdcd472315"
    ],
    previousPartners: [""],
    projectsCompleted: [
      {
        _id: "99",
        title: "eclipse",
        teamId: "99"
      },
      {
        _id: "98",
        title: "shadow",
        teamId: "98"
      }
    ]
  },
  {
    _id: "5b21ca3eeb7f6fbccd472315",
    username: "yash",
    gender: "Male",
    phoneNo: 9877689890,
    email: "YASH@gmail.com",
    github: "www.github.com/ABCD",
    linkedin: "www.linkedin.com/abcd",
    visibility: true,
    currentTeams: [
      {
        _id: "4",
        title: "wow",
        members: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fcdcd472314"],
        projectId: "4"
      },
      {
        _id: "5",
        title: "its",
        members: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fcdcd472314"],
        projectId: "5"
      },
      {
        _id: "6",
        title: "amazing",
        members: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fcdcd472314"],
        projectId: "6"
      }
    ],
    upvotes: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fbccd471815"],
    previousPartners: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fbccd471815"],
    projectsCompleted: [
      {
        _id: "7",
        title: "hehe",
        teamId: "7"
      }
    ]
  },
  {
    _id: "5b21ca3eeb7f6fcdcd472314",
    username: "kulpreet",
    gender: "Male",
    phoneNo: 1234567890,
    email: "kullu@gmail.com",
    github: "www.github.com/kullu",
    linkedin: "www.linkedin.com/kullu",
    visibility: true,
    currentTeams: [
      {
        _id: "8",
        title: "hello",
        members: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fcdcd472314"],
        projectId: "8"
      },
      {
        _id: "9",
        title: "to",
        members: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fcdcd472314"],
        projectId: "9"
      },
      {
        _id: "10",
        title: "everyone",
        members: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fcdcd472314"],
        projectId: "10"
      }
    ],
    upvotes: ["5b21ca3eeb7f6fcdcd472315"],
    previousPartners: ["", ""],
    projectsCompleted: [
      {
        _id: "11",
        title: "hihihihi",
        teamId: "11"
      }
    ]
  },
  {
    _id: "5b21ca3eeb7f6fcdcd472315",
    username: "naman",
    gender: "Male",
    phoneNo: 1234567890,
    email: "naman@gmail.com",
    github: "www.github.com/naman",
    linkedin: "www.linkedin.com/naman",
    visibility: true,
    currentTeams: [
      {
        _id: "12",
        title: "india",
        members: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fcdcd472314"],
        projectId: "12"
      },
      {
        _id: "9",
        title: "is",
        members: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fcdcd472314"],
        projectId: "9"
      },
      {
        _id: "13",
        title: "myCountry",
        members: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fcdcd472314"],
        projectId: "13"
      }
    ],
    upvotes: [
      "5b21ca3eeb7f6fbubi472315",
      "5b21ca3eeb7f6fcdcd472315",
      "5b21ca3eeb7f6fbccd472315"
    ],
    previousPartners: [
      "5b21ca3eeb7f6fbubi472315",
      "5b21ca3eeb7f6fcdcd472315",
      "5b21ca3eeb7f6fbccd472315"
    ],
    projectsCompleted: [
      {
        _id: "14",
        title: "liveFree",
        teamId: "14"
      }
    ]
  },
  {
    _id: "5b21ca3eeb7f6fbubi472315",
    username: "chotu",
    gender: "Male",
    phoneNo: 1551661552,
    email: "chotu@gmail.com",
    github: "www.github.com/chotu",
    linkedin: "www.linkedin.com/chotu",
    visibility: true,
    currentTeams: [
      {
        _id: "20",
        title: "india",
        members: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fcdcd472314"],
        projectId: "20"
      },
      {
        _id: "21",
        title: "is",
        members: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fcdcd472314"],
        projectId: "21"
      },
      {
        _id: "22",
        title: "myCountry",
        members: ["5b21ca3eeb7f6fcdcd472315", "5b21ca3eeb7f6fcdcd472314"],
        projectId: "22"
      }
    ],
    upvotes: [],
    previousPartners: ["5b21ca3eeb7f6fcdcd472315"],
    projectsCompleted: [
      {
        _id: "23",
        title: "Elephants",
        teamId: "23"
      }
    ]
  }
];

export function getUsers() {
  return users;
}

export function getUser(id) {
  return users.find(m => m._id === id);
}

export function saveUser(user) {
  let userInDb = users.find(m => m._id === movie._id) || {};
  userInDb.title = movie.title;
  userInDb.genre = genresAPI.genres.find(g => g._id === movie.genreId);
  userInDb.numberInStock = movie.numberInStock;
  userInDb.dailyRentalRate = movie.dailyRentalRate;

  if (!userInDb._id) {
    userInDb._id = Date.now().toString();
    users.push(userInDb);
  }

  return userInDb;
}

export function deleteUser(id) {
  let userInDb = users.find(m => m._id === id);
  users.splice(users.indexOf(userInDb), 1);
  return userInDb;
}
