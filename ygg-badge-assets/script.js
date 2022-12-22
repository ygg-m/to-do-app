// links
const github = "https://github.com/ygg-m";
const twitter = "https://twitter.com/yggm_";
const linktree = "https://linktr.ee/yggm";

// functions
function createElement(e) {
  el = document.createElement(e);
  return el;
}

function createLinkIMG(name) {
  const el = createElement("img");
  el.classList.add("ygg_link_a_img");
  el.setAttribute("src", `ygg-badge-assets/${name}.svg`);
  el.setAttribute("alt", name);
  return el;
}

function createLink(name, url) {
  const el = createElement("a");
  el.classList.add("ygg_link_a");
  el.setAttribute("href", url);
  const elImg = createLinkIMG(name);
  el.appendChild(elImg);

  el.addEventListener("mouseover", () => {
    let fixURL = url.replace(/^https:\/\//, "");
    changeTooltip(fixURL);
  });
  return el;
}

function changeTooltip(e) {
  tooltip.innerText = e;
}

// container creation
const container = createElement("div");
container.classList.add("ygg_badge");

// links container
const linksContainer = createElement("div");
linksContainer.classList.add("ygg_links");
linksContainer.addEventListener("mouseover", () => {
  tooltip.classList.add("show");
});
linksContainer.addEventListener("mouseout", () => {
  tooltip.classList.remove("show");
});

// create link
const githubLink = createLink("github", github);
const linktreeLink = createLink("linktree", linktree);
const twitterLink = createLink("twitter", twitter);

const linkList = document.getElementsByClassName("ygg_link_a");

linksContainer.appendChild(githubLink);
linksContainer.appendChild(linktreeLink);
linksContainer.appendChild(twitterLink);

// tooltip
const tooltip = createElement("span");
tooltip.classList.add("ygg_tooltip");
tooltip.innerText = "text";

// insert elements inside container
container.appendChild(linksContainer);
container.appendChild(tooltip);

// insertion in HTML
document.body.appendChild(container);
