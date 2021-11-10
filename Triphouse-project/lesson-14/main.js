const fileForm = document.getElementById('form');

fileForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const fileFormData = new FormData(fileForm);

  const data = await fetch('https://fe-student-api.herokuapp.com/api/file', {
    method: 'POST',
    body: fileFormData,
  })
    .then((response) => (response.ok ? response.json() : console.log('error', response.statusText)))
    // .then((result) => console.log(result))
    .catch((error) => console.log(error.message));
  console.log(data);
});
