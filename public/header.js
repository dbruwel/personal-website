document.getElementById("site-header").innerHTML = `
  <nav>
    <a href="/">Home</a>
    <a href="/about/">About</a>
    <a href="/contact/">Contact</a>
  </nav>
`;

const page = location.pathname || "/";
document.querySelectorAll("#site-header a").forEach(link => {
  if (link.getAttribute("href") === page) {
    link.classList.add("current");
  }
});
