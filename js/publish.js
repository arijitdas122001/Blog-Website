let title=document.querySelector('#heading');
let heading=document.querySelector('#nameA');
let description=document.querySelector('#descfrm')
let publish=document.getElementById("Publish");
publish.addEventListener("click",function(){
    // console.log(title.value);
    // console.log(heading.value);
    // console.log(description.value);
    localStorage.setItem('title',title.value);
    localStorage.setItem('heading',heading.value);
    localStorage.setItem('description',description.value);
    title.value="";
    heading.value="";
    description.value="";
});
