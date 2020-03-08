export function getUsersCached() {
  return JSON.parse(localStorage.getItem('users')) || [];
}

export function getUserById(id) {
  const users = getUsersCached();

  return users.find(u => u.id === +id);
}

export function getUserByEmailAndPassword(email, password) {
  const users = getUsersCached();

  return users.find(u => u.email === email && u.password === password);
}

export function getCurrentUser() {
  return JSON.parse(localStorage.getItem('connectedUser')) || {};
}
