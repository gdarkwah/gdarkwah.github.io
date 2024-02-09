const svgRequest = new Request("./../resources/elements/svgs.html", {
  method: "GET",
  headers: {
    Accept: "text/html",
    "Content-Type": "text/html",
  },
  mode: "cors",
  cache: "default",
});
async function loadSvgElements() {
  const response = await fetch(svgRequest);
  const text = await response.text();

  document.getElementById("svg-elements").innerHTML += text;
}

// // on window load, load the svg elements
window.onload = (event) => {
    loadSvgElements();
    //   console.log("page is fully loaded");
};
