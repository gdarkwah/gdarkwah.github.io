const myInit = {
  method: "GET",
  headers: {
    Accept: "text/html",
    "Content-Type": "text/html",
  },
  mode: "cors",
  cache: "default",
};

const myRequest = new Request("./../about/about-george.txt", myInit);
async function readAbout() {
  const response = await fetch(myRequest);
  const text = await response.text();

  document.getElementById("about-george").innerHTML = text;
  console.log(text);
}
readAbout();
