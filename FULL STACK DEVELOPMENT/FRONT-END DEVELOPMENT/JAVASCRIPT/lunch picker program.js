let lunches= [];
function addLunchToEnd(lunchMenu, lunchItem){
  lunchMenu.push(lunchItem);
  console.log(`${lunchItem} added to the end of the lunch menu.`)
  return lunchMenu;
}

function addLunchToStart(lunchMenu, lunchItem){
  lunchMenu.unshift(lunchItem);
  console.log(`${lunchItem} added to the start of the lunch menu.`);
  return lunchMenu;
}

function removeLastLunch(lunchMenu){
  const deletedItem= lunchMenu.pop();
  if(lunchMenu.length > 0){
    console.log(`${deletedItem} removed from the end of the lunch menu.`)
  } else {
    console.log("No lunches to remove.");
  }
  return lunchMenu;
}

function removeFirstLunch(lunchMenu){
  const deletedItem= lunchMenu.shift();
  if(lunchMenu.length > 0){
    console.log(`${deletedItem} removed from the start of the lunch menu.`)
  } else {
    console.log("No lunches to remove.");
  }
  return lunchMenu;
}

function getRandomLunch(lunchMenu){
  const randomEl= Math.floor(Math.random() * lunchMenu.length);
  let lunchItem= lunchMenu[randomEl];
  if(lunchMenu.length > 0){
    console.log(`Randomly selected lunch: ${lunchItem}`);
  }else{
    console.log("No lunches available.")
  }
}

function showLunchMenu(lunchMenu){
  if(lunchMenu.length > 0){
    console.log(`Menu items: ${lunchMenu.join(", ")}`);
  }else{
    console.log("The menu is empty.");
  }
  return lunchMenu;
}

console.log(addLunchToEnd(lunches, "Tacos"));
console.log(addLunchToStart(lunches, "Sushi"));
console.log(removeLastLunch(["Stew", "Soup", "Toast"]));
console.log(removeFirstLunch(["Salad", "Eggs", "Cheese"]));
console.log(showLunchMenu(["Greens", "Corns", "Beans"]));
