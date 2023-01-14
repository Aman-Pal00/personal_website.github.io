/* ===============================================

this is for taggle the colortheme picker start

====================*/
document.getElementById("setting").addEventListener('click', () => {

    if (document.getElementById("colorchoice").classList.contains('colorchoice-active')) {
        document.getElementById("colorchoice").classList.remove('colorchoice-active');

    }
    else {
        document.getElementById("colorchoice").classList.add('colorchoice-active');
    }

});

/*=======================================

this is for taggle the colortheme picker close on any other click 

=====================================*/
// window.addEventListener('click', (choice) => {
    
//     console.log("aman-color");
//     if(choice.target.id !=='colorchoice'){
//         console.log("aman-target");
//         document.getElementById("colorchoice").classList.remove('colorchoice-active');
       
//     }
   

// });




/*============================================

this is for taggle the darktheme start

===========================================*/
const darkmode = document.getElementById("darkmode");
darkmode.addEventListener('click', () => {
    darkmode.querySelector("i").classList.toggle("fa-moon");
    darkmode.querySelector("i").classList.toggle("fa-sun");
    document.body.classList.toggle("lighttheme");
});
// window.addEventListener('load', () => {
//     if (document.body.classList.contains("lighttheme")) {
//         darkmode.querySelector("i").classList.add("fa-moon");
//     }
//     else {
//         darkmode.querySelector("i").classList.add("fa-sun");
//     }
// });

/*   --------------------------

nav bar activ toggle  start

------------- */
const nav = document.querySelector(".navbar_properties_with_icon");
const navlist = nav.querySelectorAll("li");
const section = document.querySelectorAll(".section");
for (let i = 0; i < navlist.length; i++) {
    navlist[i].addEventListener('click', (e) => {
        for (let j = 0; j < navlist.length; j++) {
            navlist[j].classList.remove('active');
            section[j].classList.add('displaynone');
            section[j].classList.remove('activesection');
        }
        navlist[i].classList.add('active');
        section[i].classList.remove('displaynone');
        section[i].classList.add('activesection');
    })
}
document.querySelector("#moreaboutme").addEventListener('click', () => {
    for (let i = 0; i < navlist.length; i++) {
            navlist[i].classList.remove('active');
            section[i].classList.remove('activesection');
            section[i].classList.add('displaynone');
        }
        navlist[1].classList.add('active');
        section[1].classList.remove('displaynone');
        section[1].classList.add('activesection');

    
});


/*   ------------------------

menu bar click toggle start

------------- */


// document.querySelector(".menubar").addEventListener('click', () => {
//     console.log("aman");
//     document.getElementsByTagName("header")[0].classList.add("displayblock");
//     document.querySelector(".menubar").classList.remove("z2000");
//     document.querySelector(".crossmenubar").classList.add("z2000");
// });
// document.querySelector(".crossmenubar").addEventListener('click', () => {
//     console.log("aman");
//     document.getElementsByTagName("header")[0].classList.remove("displayblock");
//     document.querySelector(".crossmenubar").classList.remove("displayblock");
//     document.querySelector(".menubar").classList.remove("displaynone");
// });



document.querySelector(".menubar").addEventListener('click', () => {
    console.log("aman");
    if ( document.getElementsByTagName("header")[0].classList.contains("activeheader")) {
        document.getElementsByTagName("header")[0].classList.remove("activeheader")



        // window.addEventListener('click', () => {
        //     console.log("amanwin-click");
        // document.getElementById("colorchoice").classList.remove('displayblock');
        //   });        
    }
    else{
        document.getElementsByTagName("header")[0].classList.add("activeheader")
    }

});


        window.onclick = function(e){
            if ( document.getElementsByTagName("header")[0].classList.contains("activeheader")) {
                    if(( e.target.closest('.clicktoclose')) || (e.target.closest == ('.header') )){
                        console.log("aman pal");
                        document.getElementsByTagName("header")[0].classList.remove("activeheader");
                       
                    }
                }
              
               
            }
     
         
   
/*  ------------------------

menu  bar click toggle end

------------- */

function sendemail() {
    Email.send({
        Host: "smtp.gmail.com",
        Username: "aman5135070@gmail.com",
        Password: "password",
        To: 'aman5135070@gmail.com',
        From: document.getElementById("form-email").value,
        Subject: "This is the subject",
        Body: "And this is the body"
    }).then(
        message => alert(message)
    );
}


/*=============================

theme colors

==============================*/

const changecolorstyle = document.querySelectorAll(".changecolorstyle");

function setActiveStyle(color)
{
    changecolorstyle.forEach((style)=>{
        if (color === style.getAttribute("title")) 
        {
            style.removeAttribute("disabled");
        }
        else{
            style.setAttribute("disabled","true");
        }
    });
}
  


