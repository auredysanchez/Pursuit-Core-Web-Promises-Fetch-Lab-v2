const button = document.querySelector("#reload");
let ul = document.querySelector("ul");
button.addEventListener("click", (e) => {
  e.preventDefault();
  ul.innerHTML = ""
  fetch("https://official-joke-api.appspot.com/random_ten")
    .then((res) => {
      if (!res.ok) {
        throw Error(`Something wrong ${res.status}`);
      }
      return res.json();
    })
    .then((res) => {
      res.forEach((joke) => {
        const div = document.createElement("div");
        div.className = "card";
        const h2 = document.createElement("h2");
        h2.textContent = joke.setup;
        const h5 = document.createElement("h5");
        h5.textContent = joke.punchline;
        div.appendChild(h2);
        div.addEventListener("click", (e) =>{
          if(div.innerHTML.includes("h5")){
            div.removeChild(h5)
          }else{
            div.appendChild(h5);
          }
        })
        ul.appendChild(div);
      });
    });

});