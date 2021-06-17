function saveToLocal(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}

function loadFromLocal(key) {
  try {
    const localData = localStorage.getItem(key);
    return JSON.parse(localData);
  } catch (error) {
    console.error(error.message);
  }
}

export { saveToLocal, loadFromLocal };
