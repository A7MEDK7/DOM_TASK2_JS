// Create A Header With Logo And Menu
let header = document.createElement("header");
let logo = document.createElement("h1");
let menu = document.createElement("div");

logo.appendChild(document.createTextNode("Product Store"));
menuList = ["Home","About","Services","Contact"];
for (let i=0; i<menuList.length; i++) {
    let item = document.createElement("a");
    item.href = "#";
    item.style.cssText = "text-decoration: none; color: #333;";
    menu.appendChild(item);
    item.appendChild(document.createTextNode(menuList[i]));
}
header.appendChild(logo);
header.appendChild(menu);
header.style.cssText = "display: flex; justify-content: space-between; height: 30px; align-items: center; padding: 10px 20px;";
logo.style.cssText = "color: #4682B4; font-size: 24px;";
menu.style.cssText = "display: flex; gap: 20px; font-size: 18px; color: #333;";
document.body.style.fontFamily = "Arial";
document.body.appendChild(header);

// Create A Body With 15 Products
let cotainer = document.createElement("div");
for (let i=0; i<15; i++) {
    let prod = document.createElement("div");
    let prodTitle = document.createElement("h3");
    let prodDesc = document.createElement("p");

    prodTitle.appendChild(document.createTextNode(`Product ${i+1}`));
    prodDesc.appendChild(document.createTextNode("Product Description"));
    prod.appendChild(prodTitle);
    prod.appendChild(prodDesc);
    prod.style.cssText = "display: flex; flex-direction: column; justify-content: center; align-items: center; background-color: #ffffff; padding: 15px; border-radius: 8px; box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); margin: 10px;";
    prodTitle.style.cssText = "font-size: 24px; color:  black; margin: 10px 0 0 0;";
    prodDesc.style.cssText = "color: #666; font-size: 18px;";
    cotainer.appendChild(prod);
}
cotainer.style.cssText = "gap: 10px; padding: 10px; background-color: #eee;";
document.body.appendChild(cotainer);
cotainer.style.display = "grid";
cotainer.style.gridTemplateColumns = "repeat(auto-fill, minmax(400px, 1fr))"; 

// Create A Footer With Copy Rights
let footer = document.createElement("footer");
let copy = document.createElement("p");
copy.appendChild(document.createTextNode("CopyRights 2024")); 
footer.appendChild(copy);
document.body.appendChild(footer);
footer.style.cssText = "text-align: center; padding: 10px; background-color: #4682B4 ; color: #fff;";
