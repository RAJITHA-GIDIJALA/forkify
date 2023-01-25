

   function routeFunc(event){
    event = event || window.event;
        event.preventDefault();
         window.history.pushState({},"",event.target.href)
        handlelocation();
   }

const routes={
    404:"/404.html",
    "/":"/home.html",
    "/home":"home.html",
    "/about":"/about.html",    
    "/contact":"/contact.html",
};

const handlelocation= async ()=>{
    const path =window.location.pathname;
    const routeVal=routes[path]|| routes[404];
    const html =await fetch (routeVal).then((data) => data.text());
    document.getElementById("nav_item").innerHTML=html;
};

window.onpopstate =handlelocation;
console.log(routeFunc);
window.route=routeFunc;
handlelocation();





