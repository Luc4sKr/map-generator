var tilemap = document.querySelector("#tilemap");
var palette = document.querySelector("#palette");

var selected_tile = null;

for (let i = 0; i < 20; i++) {
    for (let j = 0; j < 10; j++) {
        let tile = document.createElement("div");
        tile.classList.add("tile");
        tile.addEventListener("click", left_click_on_tile);
        tile.addEventListener("contextmenu", right_click_on_tile);
        tilemap.appendChild(tile);
    }
}

for (let i = 0; i < 8; i++) {
    let palette_tile = document.createElement("div");
    palette_tile.classList.add("palette-img-container");

    let tile_img = document.createElement("img");
    tile_img.src = "/_images/floor.png";

    palette_tile.appendChild(tile_img);
    
    palette_tile.addEventListener("click", function(e) {
        selected_tile = e.target.src;
    });

    palette.appendChild(palette_tile);
}


function left_click_on_tile(e) {
    if (selected_tile) {
        let tile_img = document.createElement("img");
        tile_img.src = selected_tile;
        tile_img.style.width = "100%";
        tile_img.style.height = "100%";
        e.target.appendChild(tile_img);
    }

    console.log(selected_tile);
    
}

function right_click_on_tile(e) {
    e.preventDefault()
    e.target.style.backgroundColor = "white";
}

