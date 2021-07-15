export const createFriend = id => (
  $.ajax({
    url: '/api/friendships',
    method: 'POST',
    data: { id }
  })
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