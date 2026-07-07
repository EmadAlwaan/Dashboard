let sidebar = document.getElementById("sidebar");
let content = document.querySelector("#content");
let toggle_sidebar = document.querySelector("#toggle-sidebar");



toggle_sidebar.addEventListener("click", () => {
    let sidebarRight = window.getComputedStyle(sidebar).right;


    //للشاشات الحاسوب
    if (window.innerWidth > 767) {

        if (sidebarRight === "0px") {
            sidebar.style.right = "-250px";
            content.style.marginRight ="0";

        } else {
            sidebar.style.right = "0px";
            content.style.marginRight = "250px";
        }


        //للجوالات
    } else {
        if (sidebarRight === "0px") {
             sidebar.style.right = "-250px";
        } else {
            sidebar.style.right = "0";
        }
    }
    
});




// toggle_sidebar.addEventListener("click",( ) => {
//     // للحصول على حركت الشريط الجاني 
//     let sidebarWidth = window.getComputedStyle(sidebar).width;
//     if (sidebarWidth === "250px"){
//         sidebar.style.width = "0";
//         content.style.marginRight = "0";
//      } else {
//         sidebar.style.width = "250px";
//         content.style.marginRight = "250px";
//     }

// });

//تنتهي هنا حركت الشريط الجانبي


let messagescontainer = document.getElementById('messages-container');
let messagesarea = document.getElementById('messages-area');
messagescontainer.addEventListener("click",function(){

    messagesarea.style.display =messagesarea.style.display === "block" ? "none" : "block";
});





