# Ghost Sample Blog Post Generator

This Typescript script generates sample blog posts (lorem ipsum) and exports them into a JSON, which can be directly uploaded to an existing Ghost installation.

This script has been developed for Ghost 4.41.3 and might get outdated in the future. To adapt this script to any future versions of Ghost, you can implement changes in Ghosts import structure (https://ghost.org/docs/migration/custom/) in the `/src/GhostJson.interface.ts` (and feel free to open an issue, so I can keep this project updated).

## I don't care about the script, I am just here because I need sample posts for my Ghost blog

No worries - that is literally why I created this script: out of frustration that there were no publically available sample JSONs that fit the current version of Ghost (4.41.3, as of March 2022). This repo includes a sample JSON ready to be uploaded: `/exports/sample.json`. Download this file to your computer and follow the instructions on how to [Upload the JSON to Ghost](#upload-the-json-to-ghost)

## Setup

1. Clone this repo into an empty folder of your choice
2. Run `npm i`
3. Adjust `numberOfPosts` in `/src/index.ts` (standard is 12)

## Run the script

To run the script, just use `npm start`. A JSON file will be generated in an `/exports` sub-directory

## Upload the JSON to Ghost

Go to `[insert your ghost url]/ghost/#/settings/labs` and select the JSON you just generated under "Import content". Click the "Import" button and the posts will be uploaded.
