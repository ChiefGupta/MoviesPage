const express = require("express");
const app = express();

const movies = [
  {
    id: 1,
    name: "Top Gun: Maverick",
    description: `After more than thirty years of service as one of the Navy/'s top aviators, Pete “Maverick” Mitchell (Tom Cruise) is where he belongs, pushing the envelope as a courageous test pilot and dodging the advancement in rank that would ground him. When he finds himself training a detachment of Top Gun graduates for a specialized mission the likes of which no living pilot has ever seen, Maverick encounters Lt. Bradley Bradshaw (Miles Teller), call sign: “Rooster,” the son of Mavericks late friend and Radar Intercept Officer Lt. Nick Bradshaw, aka “Goose”. Facing an uncertain future and confronting the ghosts of his past, Maverick is drawn into a confrontation with his own deepest fears, culminating in a mission that demands the ultimate sacrifice from those who will be chosen to fly it.`,
  },
  {
    id: 2,
    name: "Everything Everything All At Once",
    description: `Directed by Daniel Kwan and Daniel Scheinert, collectively known as Daniels, the film is a hilarious and big-hearted sci-fi action adventure about an exhausted Chinese American woman (Michelle Yeoh) who can't seem to finish her taxes`,
  },
  {
    id: 3,
    name: "All Quiet on The Western Front",
    description: `All Quiet on the Western Front tells the gripping story of a young German soldier on the Western Front of World War I. Paul and his comrades experience first-hand how the initial euphoria of war turns into desperation and fear as they fight for their lives, and each other, in the trenches.`,
  },
];

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/movies", (req, res) => {
  res.sendFile(__dirname + "/public/movies.html");
});

app.get("/movie/:id", (req, res) => {
  const id = req.params.id;
  let movie
  let i
  for (i = 0; i < movies.length; i++) {
    if (movies[i].id == id) {
      movie = movies[i]
      break
    }
  }
//   console.log(movie);
  res.send({
    movieName: movie.name,
    movieDescription: movie.description,
  });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
