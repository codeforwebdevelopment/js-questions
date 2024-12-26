

// You're tasked with fetching the HTTP status codes for a list of URLs using fetch() (https://developer.mozilla.org/en- US/docs/Web/API/Fetch_API/Using_Fetch).
// Fill in the missing line of JavaScript:
async function fetchStatusCodes (urls) {
// ??? Fill in this line
return httpResponses.map((response) => response.status);
}
(async () => {
const statusCodes = await fetchStatusCodes ([
"https://example.com",
"https://example.com/bar",
"https://example.com/baz",
// statusCodes == [200, 404, 404]
]);
})();
// Select the best option:
// A.
// const httpResponses
// =
// await urls.map(async (url) => fetch(url));
// B.
// const httpResponses =
// urls.map((url) => await fetch(url));
// C.
// const httpResponses = Promise.all(urls, async (url) => fetch (url));
// D.
// const httpResponses = await Promise.all(urls.map(async (url) => fetch(url)));
