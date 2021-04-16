export const fetchUsers = () => (
  $.ajax({
    method: 'get',
    url: `/api/users`,
  })
);

export const fetchUser = userId => (
  $.ajax({
    method: 'get',
    url: `/api/users/${userId}`,
  })
);

export const updateProfile = (formData, id) => (
  $.ajax({
    method: 'patch',
    url: `/api/users/${id}`,
    data: formData,
    contentType: false,
    processData: false
  })  
);  

// $.ajax({
//   url: '/api/users',
//   method: 'POST',
//   data: formData,
//   contentType: false,
//   processData: false
// })