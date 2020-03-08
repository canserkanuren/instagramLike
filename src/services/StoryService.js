export default function getStoriesByUserId(id) {
  const stories = JSON.parse(localStorage.getItem('stories'));

  return stories.filter(s => s.publishedBy === id);
}
