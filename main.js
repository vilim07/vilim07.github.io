let toggleBarStatus = false;
x=0;
let toggleNavStatus=function(){
  let getSidebar=document.querySelector(".bar")
  let getSidebarUl=document.querySelector(".bar ul")
  let getSidebarLi=document.querySelectorAll(".bar li")
  let getSidebarSpan=document.querySelector(".bar span")

  if (toggleBarStatus===false){
    if(x==1){
      getSidebarUl.style.transition="all 2s ease-in"
      x=0
    }
    getSidebar.style.height="700px";
    getSidebar.style.borderBottom="inset";
    getSidebarUl.style.opacity="1";



    toggleBarStatus=true;
  }
  else if (toggleBarStatus===true) {
    if(x==0){
      getSidebarUl.style.transition="all 0.3s ease-in"
      x=1
    }
    getSidebar.style.height="0";
    getSidebarUl.style.opacity="0";
    getSidebar.style.borderBottom="none";

    toggleBarStatus=false;
  }
}
