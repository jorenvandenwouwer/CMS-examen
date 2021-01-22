const { createRemoteFileNode } = require(`gatsby-source-filesystem`)
const { graphql} = require("graphql")
const path = require("path")


exports.createPages = ({graphql, actions}) =>{
    const {createPage} = actions;
    return graphql(`
    {
        wpcontent {
            locaties {
              edges {
                node {
                  slug
                  id
                }
              }
            }
          }
    }`).then(result => {
        if(result.errors){
            result.errors.forEach(e => console.error(e.toString()))
            return Promise.reject(result.errors);
        }
        const locaties = result.data.wpcontent.locaties.edges;
        locaties.forEach(locatie => {
            const {id,slug} = locatie.node;

            createPage({
                path: slug,
                component: path.resolve(`src/templates/locatie.js`),
                context: {
                    id,
                    slug
                }
            })
        })
    })
}
exports.createResolvers = async ({
    actions,
    cache,
    createNodeId,
    createResolvers,
    store,
    reporter,
  }) => {
    const { createNode } = actions
  
    await createResolvers({
      WPGraphql_MediaItem: {
        imageFile: {
          type: "File",
          async resolve(source) {
            let sourceUrl = source.sourceUrl
  
            if (source.mediaItemUrl !== undefined) {
              sourceUrl = source.mediaItemUrl
            }
  
            return await createRemoteFileNode({
              url: encodeURI(sourceUrl),
              store,
              cache,
              createNode,
              createNodeId,
              reporter,
            })
          },
        },
      },
    })
  }