function addParagraph() {
    let para = document.createElement("p");
    let mainDiv = document.getElementById("learn-more-col");
    mainDiv.appendChild(para);
    let text = document.createTextNode("voluptatibus. Nesciunt quis quod consequatur repellat doloribus eligendi neque! Natus sit dolore commodi magnam veritatis, officia dolorem pariatur nam, perspiciatis, recusandae voluptatibus voluptatum cupiditate error du!eligendi neque! Natus sit dolore commodi magnam veritatis, officia dolorem pariatur nam, perspiciatis,");
    para.appendChild(text);


    let a = document.getElementById("anchorTag")
    if(a.className === "btn-sm") {
        a.className += " hide"
    }

}


    

