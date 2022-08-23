// search function
console.log('working');
// console.log(blogtitle);
// console.log(blogheadin);
// console.log(blogdesc);
let btn=document.querySelector('.searchbtn');
btn.addEventListener("click",function(e){
  // console.log('hello');
  let heading=document.querySelector('.arth2');
  heading.innerText="Search Results";
  let btn = document.querySelector('.searchbtn');
let input = document.getElementById("srchinp");
let value=input.value.toUpperCase();
  let articles=document.getElementById("art");
  let articlesec=document.querySelectorAll('.articlesec')
  let tag=document.getElementsByTagName('h5');
  for(let i=0;i<tag.length;i++){
    let match=articlesec[i].getElementsByTagName('h5')[0];
    if(match){
      let textvalue=match.textContent || match.innerHTML
      if(textvalue.toUpperCase().indexOf(value)>-1){
        articlesec[i].style.display="";
      }
      else{
        articlesec[i].style.display="none";
      }
    }
  }
input.value="";
});
let addbtn=document.querySelector('.contstartsig');
addbtn.addEventListener("click",function(){
window.open("../html/publish.html");
});
// let articles=document.getElementById("art");
// let html="";
// html+=`<div class="articlesec">
// <div class="articleimg"><img src="/img/logo.jpg" alt="err"></div>
// <div class="artcont">
//   <h5>${blogtitle.value}</h5>
//   <h4>${blogheadin.vlaue}</h4>
//   <p>${blogdesc.value}</p>
//     <div class="cont-info">
//       <span>Aug 10</span>
//       <span>.</span>
//       <span>4 min read</span>
//       <span>.</span>
//       <span>Tagz</span>
//     </div>
// </div>`;
// articles.innerHTMl=html;



