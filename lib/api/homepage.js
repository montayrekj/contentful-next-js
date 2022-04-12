const POST_GRAPHQL_FIELDS = `
sys {
  id
}
hero {
  title
  body
}
featuresCollection {
  items {
    title
    description
  }
}
`

async function fetchGraphQL(query, preview = false) {
  return fetch(
    `https://graphql.contentful.com/content/v1/spaces/${process.env.CONTENTFUL_SPACE_ID}`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${
          preview
            ? process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
            : process.env.CONTENTFUL_ACCESS_TOKEN
        }`,
      },
      body: JSON.stringify({ query }),
    }
  ).then((response) => response.json())
}

function extractHomepage(fetchResponse) {
  return fetchResponse?.data?.homePageCollection?.items?.[0]
}

export async function getHomePage() {
  const entries = await fetchGraphQL(
    `query {
      homePageCollection(where: { sys: { id: "7CTdw7dIleYOMJDKznc2y5"}}) {
        items {
          ${POST_GRAPHQL_FIELDS}
        }
      }
    }`
  )
  return extractHomepage(entries)
}