const fetch = require(`node-fetch`)
exports.sourceNodes = async ({
  actions: { createNode },
  createContentDigest,
}) => {
  // get data from GitHub API at build time
  const result = await fetch(`https://public-apps-ws.onrender.com/`)
  const resultData = await result.json()
  // create node for build time data example in the docs
  createNode({
    // apps arbitrary fields from the data
    apps: resultData.apps,
    // required fields
    id: `example-build-time-data`,
    parent: null,
    children: [],
    internal: {
      type: `Example`,
      contentDigest: createContentDigest(resultData),
    },
  })
}
