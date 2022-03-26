import * as fs from "fs";

function writeJson(json: string) {
  const fileName = `./exports/sample-blog-posts_${Date.now()}.json`;
  fs.writeFile(fileName, json, "utf8", function (err) {
    if (err) {
      console.log("An error occured while to JSON file.");
      return console.log(err);
    }

    console.log("JSON file has been saved to ", fileName);
  });
}

export default writeJson;
