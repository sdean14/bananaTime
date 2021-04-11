export const createFriend = user => (
  $.ajax({
    method: 'POST',
    url: '/api/friendships',
    data: {user}
  })
);

export const deleteFriend = userId => (
  $.ajax({
    url: `/api/friendships/${userId}/`,
    method: 'DELETE'
  })
)