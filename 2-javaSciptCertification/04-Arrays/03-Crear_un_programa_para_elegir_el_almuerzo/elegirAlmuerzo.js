const lunches = [];

function addLunchToEnd(arr, str) {
  arr.push(str);
  console.log(`${str} added to the end of the lunch menu.\n`);
  return arr;
}

function addLunchToStart(arr, str) {
  arr.unshift(str);
  console.log(`${str} added to the start of the lunch menu.\n`);
  return arr;
}

function removeLastLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let remove = arr.pop();
    console.log(`${remove} removed from the end of the lunch menu.\n`);
  }
  return arr;
}

function removeFirstLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches to remove.");
  } else {
    let remove = arr.shift();
    console.log(`${remove} removed from the start of the lunch menu.\n`);
  }
  return arr;
}

function getRandomLunch(arr) {
  if (arr.length === 0) {
    console.log("No lunches available.");
  } else {
    const randomIndex = Math.floor(Math.random() * arr.length);
    const randomLunch = arr[randomIndex];
    console.log(`Randomly selected lunch: ${randomLunch}\n`);
  }
}

function showLunchMenu(arr) {
  if (arr.length === 0) {
    console.log("The menu is empty.");
  } else {
    console.log("Menu items:\n" + arr.join("\n"));
  }
}

addLunchToEnd(lunches, "Lomo Saltado");
addLunchToEnd(lunches, "Bisteck a lo pobre");
addLunchToEnd(lunches, "Pure con Milaneza");
addLunchToStart(lunches, "Aji de Pollo");
addLunchToStart(lunches, "Cau Cau");
addLunchToStart(lunches, "Arroz con Pollo");
getRandomLunch(lunches);
showLunchMenu(lunches);