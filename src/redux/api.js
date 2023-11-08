// this api function fetch a random quote and also random quote with tags
function generate_random_quote_api(quoteTag = "") {
  let quote_fetch_api;
  if (quoteTag) {
    quote_fetch_api = `https://api.quotable.io/quotes/random?tags=${quoteTag}`;
  } else {
    quote_fetch_api = `https://api.quotable.io/quotes/random`;
  }

  return fetch(quote_fetch_api)
    .then((res) => res.json())
    .then((res) => res[0])
    .catch((err) =>
      console.log("error in api function while fetching random quote", err)
    );
}

function fetch_all_tags_api() {
  return fetch(`https://api.quotable.io/tags`)
    .then((res) => res.json())
    .then((res) => res)
    .catch((err) =>
      console.log("error in api function while fetch all tags", err)
    );
}

export { generate_random_quote_api, fetch_all_tags_api };
