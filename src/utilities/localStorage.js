// use local storage to manage data
const addToDb = (id) => {
  let selectedPlayer = {};

  const storedPlayer = localStorage.getItem("selected-player");
  if (storedPlayer) {
    selectedPlayer = JSON.parse(storedPlayer);
  }

  // add quantity
  const quantity = selectedPlayer[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    selectedPlayer[id] = newQuantity;
  } else {
    selectedPlayer[id] = 1;
  }
  localStorage.setItem("selected-player", JSON.stringify(selectedPlayer));
};

// get the shopping cart
const getstoredPlayer = () => {
  let selectedPlayer = {};

  const storedPlayer = localStorage.getItem("selected-player");
  if (storedPlayer) {
    selectedPlayer = JSON.parse(storedPlayer);
  }
  return selectedPlayer;
};

const removeFromDb = (id) => {
  const storedPlayer = localStorage.getItem("selected-player");
  if (storedPlayer) {
    const selectedPlayer = JSON.parse(storedPlayer);
    if (id in selectedPlayer) {
      delete selectedPlayer[id];
      localStorage.setItem("selected-player", JSON.stringify(selectedPlayer));
    }
  }
};

const deleteDb = () => {
  localStorage.removeItem("selectedPlayer");
};

export { addToDb, getstoredPlayer, removeFromDb, deleteDb };
