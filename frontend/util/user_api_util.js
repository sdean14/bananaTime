export const updateProfile = user => (
  $.ajax({
    method: 'patch',
    url: `/api/users/${user.id}`,
    data: { user }
  })
);

export const fetchProfile = userId => (
  $.ajax({
    method: 'get',
    url: `/api/users/${userId}`,
  })
);