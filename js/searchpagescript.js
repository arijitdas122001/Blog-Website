// console.log('success');
// let heading=document.querySelector('.arth2');
// heading.innerText="Search Results";
// let btn = document.querySelector('.searchbtn');
// let input = document.getElementById("srchinp");
// let value=input.value.toUpperCase();
// let articles=document.getElementById("art");
// let articlesec=document.querySelectorAll('.articlesec')
// let tag=document.getElementsByTagName('h5');
// for(let i=0;i<tag.length;i++){
//   let match=articlesec[i].getElementsByTagName('h5')[0];
//   if(match){
//     let textvalue=match.textContent || match.innerHTML
//     if(textvalue.toUpperCase().indexOf(value)>-1){
//       articlesec[i].style.display="";
//     }
//     else{
//       articlesec[i].style.display="none";
//     }
//   }
// }
let results=localStorage.getItem("results");
console.log(results);

