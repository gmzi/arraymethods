const users = [
  { username: 'mlewis' },
  { username: 'akagen' },
  { username: 'msmith' },
];

function removeUser1(usersArray, username) {
  const toRemove = usersArray.findIndex(function (obj) {
    return obj.username === username;
  });
  if (toRemove !== -1) {
    let removed = usersArray.splice(toRemove, 1);
    return removed[0];
  }
}

console.log(removeUser1(users, 'akage')); // {username: 'akagen'}
