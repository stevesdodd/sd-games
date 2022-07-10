fetch('./tutorials.json')
  .then(response => response.json())
  .then(data => {

    const tutorialsDiv = document.getElementById("tutorials");


    data.tutorials.forEach(tutorial => {

      const newDiv = document.createElement("div");
      newDiv.style.padding = "1rem"
      newDiv.style.border = "2px solid gray"
      newDiv.style.margin = "1rem"
      newDiv.style.display = "flex"
      newDiv.style.justifyContent = "center"
      newDiv.style.alignItems = "center"

      let p = document.createElement('p')
      p.innerHTML = tutorial.name
      p.style.padding = 0
      p.style.margin = 0

      let linkA = document.createElement('a');
      linkA.setAttribute('href',tutorial.link);
      linkA.innerHTML = 'Example'

      let codeA = document.createElement('a')
      codeA.setAttribute('href', 'https://github.com/stevesdodd/sd-games/tree/master/'+tutorial.link)
      codeA.innerHTML = 'Code'

      let blogA = document.createElement('a')
      blogA.setAttribute('href', 'https://stephendoddtech.com/blog/game-design/'+tutorial.link)
      blogA.innerHTML = 'Blog'

      codeA.style.padding= "4px";
      codeA.style.margin = "4px";
      codeA.style.background = "lightBlue";
      codeA.style.borderRadius = "4px"
      codeA.style.textDecoration = "none"

      linkA.style.padding= "4px";
      linkA.style.margin = "4px";
      linkA.style.background = "lightBlue";
      linkA.style.borderRadius = "4px"
      linkA.style.textDecoration = "none"

      blogA.style.padding= "4px";
      blogA.style.margin = "4px";
      blogA.style.background = "lightBlue";
      blogA.style.borderRadius = "4px"
      blogA.style.textDecoration = "none"

      newDiv.appendChild(p)
      newDiv.appendChild(linkA);
      newDiv.appendChild(codeA)
      newDiv.appendChild(blogA);

      tutorialsDiv.appendChild(newDiv, tutorialsDiv);

    })

  })
  .catch(error => console.log(error));
