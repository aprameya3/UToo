
let subscribeBtn=document.getElementById("subscribe");
let subscribe = false;
console.log("hello");
subscribeBtn.addEventListener('click', () =>
    {
        if(subscribe){
        subscribeBtn.innerText="subscribed"
        subscribeBtn.style="background-color:gray;"
        subscribe = false
    }
    else{
        subscribeBtn.innerText="subscribe"
        subscribeBtn.style="background-color:red;"
        subscribe = true
    }
})
 

