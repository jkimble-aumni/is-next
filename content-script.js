function checkAndCreateBanner() {
  const firstDiv = document.querySelector("body > div:first-of-type");
  if (firstDiv && firstDiv.id === "__next") {
    const banner = createBanner("NextJS");
    document.body.appendChild(banner);
    setTimeout(() => {
      banner.remove();
    }, 3000);
  }
}

function createBanner(text) {
  const banner = document.createElement("div");
  banner.innerText = text;
  Object.assign(banner.style, {
    background: "#3cdfff",
    borderBottomLeftRadius: "3px",
    fontWeight: "bold",
    padding: "10px",
    position: "fixed",
    right: "0px",
    top: "0px",
    zIndex: "9999",
  });
  return banner;
}

window.onload = checkAndCreateBanner;
