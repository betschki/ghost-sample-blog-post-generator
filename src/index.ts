import { loremIpsum } from "lorem-ipsum";
import { GhostJson, Post } from "./GhostJson.interface";
import writeJson from "./WriteJson";

const numberOfPosts = 12;

const ghostData: GhostJson = {
  meta: {
    exported_on: Date.now(),
    version: "4.41.3",
  },
  data: {
    posts: generatePosts(numberOfPosts),
  },
};

function generateMobileDoc(content: string) {
  return JSON.stringify({
    version: "0.3.1",
    markups: [],
    atoms: [],
    cards: [["html", { cardName: "html", html: content }]],
    sections: [[10, 0]],
  });
}

function generatePosts(numberOfPosts: number) {
  const postArray = [];
  for (let i = 1; i <= numberOfPosts; i++) {
    const post: Post = {
      id: i,
      title: loremIpsum({ format: "plain", count: 1, units: "sentence" }),
      mobiledoc: generateMobileDoc(
        loremIpsum({ format: "html", count: 8, units: "paragraphs" })
      ),
      status: "published",
      published_at: Date.now(),
      published_by: 1,
      author_id: 1,
      created_at: Date.now(),
      created_by: 1,
    };

    postArray.push(post);

    if (i === 12) {
      return postArray;
    }
  }
}

writeJson(JSON.stringify(ghostData));
