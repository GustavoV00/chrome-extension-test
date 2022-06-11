"use strict";

function hiddenBadResults() {
  const searchResult = document.querySelector("tbody").querySelectorAll("tr");
  searchResult.forEach((tr) => {
    let links = [...tr.children[1].children];
    links = links.filter((link) => {
      return link.localName == "a";
    });
    console.log(links);
    for (let i = 0; i < links.length; i++) {
      try {
        tr.style.visibility = "hidden";
        const img = [...links[i].children];
        const vip = img[0].getAttribute("alt");

        console.log(vip);
        if (vip == "Trusted") tr.style.visibility = "visible";
      } catch (e) {
        console.log(e);
      }
    }
  });
  console.log(searchResult);
}

hiddenBadResults();
