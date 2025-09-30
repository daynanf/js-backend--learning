
async function getUser( ) {
  const userName = document.querySelector("#username").value ;
  document.querySelector("#output").textContent = `loading...`
 try{ const response = await fetch(`https://api.github.com/users/${userName}`)
  const data = await response.json();
 console.log(data);
 if (data.name){
  document.querySelector("#output").textContent = `Your Name is ${data.name}`
  document.querySelector("#output1").textContent = `You have  ${data.public_repos} public repos `} else{
    throw new Error('User not found for this username');  
  }
} catch(err){
    document.querySelector("#output").textContent = `${err.message}`
    document.querySelector("#output1").textContent = ` `
} finally {
   document.querySelector("#output3").textContent = `User processing complete!`
}
}
 async function getRepo() {
  const userName = document.querySelector("#username").value ;
  document.querySelector("#output4").textContent = `loading...`;
  try  {
    const response = await fetch(`https://api.github.com/users/${userName}/repos`) 
    const repo =  await response.json();
    console.log(repo);
    if(repo){
      document.querySelector("#output4").textContent="your top five repos";
      let  htmlContent = " ";
      for ( i = 0; i< repo.length; i++){
        htmlContent += `<div>${repo[i].full_name}</div>`
      }
      document.querySelector("#output5").innerHTML=`${htmlContent}`;
    } else {
      throw new Error( "No Repo Found")
    }
  }catch(err){
    document.querySelector("#output4").textContent=`${err.message}`;
  } finally {
   document.querySelector("#output6").textContent = `Repo fetching complete!`
}
 }