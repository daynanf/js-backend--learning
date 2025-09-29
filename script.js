
async function getUser( ) {
  const userName = document.querySelector("#username").value ;
  const response = await fetch(`https://api.github.com/users/${userName}`)
  const data = await response.json();
  console.log(data);
  document.querySelector("#output").textContent = `Your Name is ${data.name}`
  document.querySelector("#output1").textContent = `You have  ${data.public_repos} public repos `
}