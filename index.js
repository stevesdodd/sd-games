fetch('./tutorials.json')
  .then(response => response.json())
  .then(data => {

    const tutorialsDiv = document.getElementById("tutorials");
    const newDiv = document.createElement("div");

    data.tutorials.forEach(tutorial => {

      let a = document.createElement('a');
      a.setAttribute('href',tutorial.link);
      a.innerHTML = tutorial.name;

      newDiv.appendChild(a);
    })

    document.body.insertBefore(newDiv, tutorialsDiv);

  })
  .catch(error => console.log(error));

