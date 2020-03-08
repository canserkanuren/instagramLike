function getPosts() {
  return JSON.parse(localStorage.getItem('posts'));
}

export function savePost(post) {
  const posts = getPosts();
  const newTab = posts.filter(p => p.id !== post.id);
  newTab.push(post);
  localStorage.setItem('posts', JSON.stringify(newTab));
}

export function getPostsFromUsersSorted() {
  const posts = JSON.parse(localStorage.getItem('posts'));
  return posts
    .sort((a, b) => new Date(b.published) - new Date(a.published))
    .reverse();
}

export function updateLikeForPost(id, userId, liked) {
  const post = getPosts().find(p => p.id === id);
  if (liked && !post.likes.includes(userId)) {
    post.likes.push(userId);
  } else {
    post.likes = post.likes.filter(l => l !== userId);
  }
  savePost(post);
}

export function getPostById(id) {
  const posts = getPostsFromUsersSorted();
  return posts.find(p => p.id === id) || {};
}
