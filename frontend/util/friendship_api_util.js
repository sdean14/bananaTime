export const createFriend = id => (
  $.ajax({
    url: '/api/friendships',
    method: 'POST',
    data: { id }
  })
  // $.ajax({
  //   method: 'POST',
  //   url: '/api/friendships',
  //   data: {user}
  // })
);

export const deleteFriend = id => (
  $.ajax({
    url: `/api/friendships/${id}`,
    method: 'DELETE'
  })
  // $.ajax({
  //   url: `/api/friendships/${userId}/`,
  //   method: 'DELETE'
  // })
)