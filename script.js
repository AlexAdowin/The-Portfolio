/*const body = document.querySelector('body');
   sidebar = body.querySelector('.sidebar');
   toggle = body.querySelector(".toggle");
   searchBtn = body.querySelector(".search-box");
   modeSwitch = body.querySelector(".toggle-switch");
   modeText = body.querySelector(".mode-text");

   toggle.addEventListener("click", () => {
    sidebar.classList.toggle("close");
    
    
   });

   modeSwitch.addEventListener("click", () => {
    body.classList.toggle("dark");
    
    if(body.classList.contains("dark")){
        modeText.innerText = "Light mode";
    }else{
        modeText.innerText = "Dark mode";
    }
   });

   /* slide image*/

   let next = document.querySelector('.next')
   let prev = document.querySelector('.prev')

   next.addEventListener('click', function(){
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])

    })

    prev.addEventListener('click', function(){
        let items = document.querySelectorAll('.item')
        document.querySelector('.slide').prepend(items[items.length - 1])
    
        })

        