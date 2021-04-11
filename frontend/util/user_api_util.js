export const fetchUsers = () => (
  $.ajax({
    method: 'get',
    url: `/api/users/$`,
  })
);

export const fetchUser = userId => (
  $.ajax({
    method: 'get',
    url: `/api/users/${userId}`,
  })
);

export const updateProfile = user => (
  $.ajax({
    method: 'patch',
    url: `/api/users/${user.id}`,
    data: { user }
  })  
);  
