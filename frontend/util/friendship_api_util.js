export const createFriend = user => (
  $.ajax({
    beforeSend: function (xhr) { xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content')) },
    url: '/api/friendships',
    method: 'POST',
    data: { follow: ids }
  })
  // $.ajax({
  //   method: 'POST',
  //   url: '/api/friendships',
  //   data: {user}
  // })
);

export const deleteFriend = followId => (
  $.ajax({
    beforeSend: function (xhr) { xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content')) },
    url: `/api/friendships/${followId}`,
    method: 'DELETE'
  })
  // $.ajax({
  //   url: `/api/friendships/${userId}/`,
  //   method: 'DELETE'
  // })
)