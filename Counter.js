document.querySelector("#inc").addEventListener("click",increaseCounter);
    document.querySelector("#dec").addEventListener("click",decreaseCounter);

    var counter=localStorage.getItem("counter")||0;
    var cnt=document.querySelector("#counter");
    cnt.innerText=counter;

    function increaseCounter(){
        counter++;
        document.querySelector("#counter").innerText=counter;
        localStorage.setItem("counter",counter);
    }
    function decreaseCounter(){
        counter--;
        document.querySelector("#counter").innerText=counter;
        localStorage.setItem("counter",counter);
    }