import * as _ from "lodash-es";
import { writeFileSync } from "fs";

const books = [
  {
    id: "1",
    image: "/project-images/world.jpg",
    title: "The World of Astronomy",
    author: "John Hudson Tiner",
    overview:
      "Think you know all there is to know about our solar system? You might be surprised at some of the amazing details that you find when you begin Exploring the World of Astronomy! From the rugged surface of the moon to the distant and mysterious constellations",
    isFavorite: false,
  },
  {
    id: "2",
    image: "/project-images/guide-to-universe.jpg",
    title: "Guide to the Universe",
    author: "Institute for creation of Research",
    overview:
      "From our radiant sun to the brilliance of distant galaxies, the vast universe reveals breathtaking beauty and majesty. Yet scientists tell conflicting accounts of its origins. Did God create it? Or did the universe just explode into existence? Find answers to these and other intriguing questions, such as... ",
    isFavorite: false,
  },
  {
    id: "3",
    image: "/project-images/origin-of-time.jpg",
    title: "The origin of Time",
    author: "Thomas Hertog",
    overview:
      "On the Origin of Time offers a striking new vision of the universe’s birth that will profoundly transform the way we think about our place in the order of the cosmos and may ultimately prove to be Hawking’s greatest legacy.",
    isFavorite: false,
  },
  {
    id: "4",
    image: "/project-images/visual.jpg",
    title: "Visual Galaxy",
    author: "National Geographic",
    overview:
      "Visual Galaxy is a deep dive into the past, present, and future of our home galaxy, the Milky Way. In this mind-expanding visual tour through the cosmos, spectacular photographs are converted into interpretive graphics, starting with the sun and moving outward into space where stars are born, black holes lurk...",
    isFavorite: false,
  },
  {
    id: "5",
    image: "/project-images/secret-life-universe.jpg",
    title: "The Secret Life of the Universe",
    author: "Nathalie A. Cabrol",
    overview:
      "We are in a golden age in astronomy, living on the cusp of breakthroughs that will revolutionize our understanding of our place in the cosmos in. Yet a profound question remains: Are we alone in the universe?",
    isFavorite: false,
  },
  {
    id: "6",
    image: "/project-images/cosmic-journey.jpg",
    title: "Cosmic Journey",
    author: "Christopher P.Carter",
    overview:
      "If you have an interest in both the spiritual and scientific foundations of the Cosmos, then this book is for you! Christopher Paul Carter takes you on an illustrated journey through myth, history, Biblical scripture, and our modern scientific understanding so that you can see the stars and planets from a new, holistic perspective. ",
    isFavorite: false,
  },
  {
    id: "7",
    image: "/project-images/space-atlas.jpg",
    title: "Space Atlas",
    author: "James Trefil",
    overview:
      "In this guided tour of our planetary neighborhood, the Milky Way and other galaxies, and beyond, detailed maps and fascinating imagery from recent space missions partner with clear, authoritative scientific information.",
    isFavorite: false,
  },
  {
    id: "8",
    image: "/project-images/mystery-of-universe.webp",
    title: "The Mysteries of the Universe",
    author: "Will Gater",
    overview:
      "Space is so much bigger than young minds can fathom and there is always more to learn. The Mysteries of the Universe is a stunning space encyclopedia for young readers to explore, with reference pages packed with fascinating information, little learners will be captivated as they journey through the vastness of the Universe.",
    isFavorite: false,
  },
  {
    id: "9",
    image: "/project-images/dom-outer-space.jpg",
    title: "The Dome and Outer Space Projection",
    author: "Claudio Nocelli",
    overview:
      "In a world where reality is not what it seems, the true nature of the “Invisible Dome Projector” is revealed, an enigmatic structure covering the known continents of this Dome-World, with a simulation of the cosmos designed to shape our thinking.",
    isFavorite: false,
  },
  {
    id: "10",
    image: "/project-images/Space-human-story.png",
    title: "Space The Human Story",
    author: "Tim Peake",
    overview:
      "In Space: The Human Story, astronaut Tim Peake traces the lives of these remarkable men and women who have forged the way, from Yuri Gagarin to Neil Armstrong.",
    isFavorite: false,
  },
];
const users = [
  { id: "1", name: "user1", email: "user1@gmail.com", password: "pass1" },
  { id: "2", name: "user2", email: "user2@gmail.com", password: "pass2" },
  { id: "3", name: "user3", email: "user3@gmail.com", password: "pass3" },
];

const favorites = [];

const db = {
  books: books,
  users: users,
  favorites: favorites,
};

writeFileSync("db.json", JSON.stringify(db, null, 2), { encoding: "utf-8" });

console.log("Database seeded successfully!");
