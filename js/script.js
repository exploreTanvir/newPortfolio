var typed=new Typed(".typing",{
    strings:["","Web Developer","web Designer","UI & UX Designer"],
    typeSpeed:100,
    backSpeed:60,
    loop:true
})


const nav= document.querySelector(".nav"),
navList=nav.querySelectorAll("li"),
allSection=document.querySelectorAll(".section"),
totalSection=allSection.length,
totalNavList=navList.length;
for(let i=0; i<totalNavList; i++){

    const a=navList[i].querySelector("a");
    a.addEventListener("click",function(){
        for(let i=0; i<totalSection; i++){
            allSection[i].classList.remove("backSection")
        }
        for(let j=0; j<totalNavList; j++){
            if(navList[j].querySelector("a").classList.contains("active")){
                allSection[j].classList.add("backSection")
            }
            navList[j].querySelector("a").classList.remove("active");
        }

        this.classList.add("active")
        showSection(this)
        if(window.innerWidth<1200){
            asideSectionTogglerBtn()
        }
    })
}
function showSection(element){
    for(let i=0; i<totalSection; i++){
        allSection[i].classList.remove("active")
    }
    const target=element.getAttribute("href").split("#")[1];
    document.querySelector("#"+target).classList.add("active")
}

function updateNav(element){
    for(let i=0;i<totalNavList;i++){
        navList[i].querySelector("a").classList.remove("active")
        const target=element.getAttribute("href").split("#")[1];
        if(target===navList[i].querySelector("a").getAttribute("href").split("#")[1]){
            navList[i].querySelector("a").classList.add("active")
        }
    }
}
document.querySelector(".hire-me").addEventListener("click",function(){
    showSection(this)
    updateNav(this)
})


const navTogglerBtn=document.querySelector(".nav-toggler"),
 aside=document.querySelector(".aside");
 navTogglerBtn.addEventListener("click",()=>{
    asideSectionTogglerBtn()
 })

 function asideSectionTogglerBtn(){
    aside.classList.toggle("open")
    for(let i=0; i<totalSection; i++){
        totalSection[i].classList.toggle("open")
    }

 }