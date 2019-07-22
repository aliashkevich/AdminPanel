export const authHeader = new Headers({
  Authorization: 'Bearer ' + localStorage.getItem('token'),
  'Content-Type': 'application/json',
});
