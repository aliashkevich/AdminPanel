export let authHeader = new Headers({
  Authorization: 'Bearer ' + localStorage.getItem('token'),
  'Content-Type': 'application/json',
});
