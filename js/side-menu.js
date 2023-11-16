function initialize() {
  const headerMenuIcon = document.getElementById("header-menu-icon");
  headerMenuIcon.addEventListener("click", showSideMenu);

  const sideMenuIcon = document.getElementById("side-menu-icon");
  sideMenuIcon.addEventListener("click", hideSideMenu); 
}

function showSideMenu() {
  const sideMenu = document.getElementById("side-menu");
  sideMenu.classList.add("side-menu-open");
  sideMenu.classList.remove("side-menu-close");
}

function hideSideMenu() {
  const sideMenu = document.getElementById("side-menu");
  sideMenu.classList.add("side-menu-close");
  sideMenu.classList.remove("side-menu-open");
}

initialize();