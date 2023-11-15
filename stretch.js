function toggle(e) {
  const element = e.currentTarget;
  element.classList.toggle("active");
}

const section1Element = document.getElementById("section1");
const section2Element = document.getElementById("section2");
const section3Element = document.getElementById("section3");
const accordionElement = document.querySelector(".accordion");
const sectionBEl = document.querySelector(".sectionB-inner");
const sectionB = document.querySelector(".sectionB")

section1Element.addEventListener("click", toggle);
section2Element.addEventListener("click", toggle);
section3Element.addEventListener("click", toggle);

async function getPost() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();


  data.forEach((post) => {
    const title = post.title;
    const body = post.body; 

    const titleDiv = document.createElement("div");
    const descripDiv = document.createElement("div");

    titleDiv.addEventListener("click", toggle);

    titleDiv.className = "title";
    descripDiv.className = "description";

    descripDiv.textContent = body;
    titleDiv.innerHTML = `<i class="fa-solid fa-chevron-up"></i>
    <p>${title}</p>`;

    sectionBEl.appendChild(titleDiv);
    sectionBEl.appendChild(descripDiv);

  });
}

getPost();









