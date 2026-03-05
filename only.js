document.addEventListener("DOMContentLoaded", function(){

    const playButton = document.querySelector(".PFF");

    if(playButton){
        playButton.addEventListener("click", function(event){

            event.preventDefault();
            alert("Redirecting you to download Valorant!");

        });
    }
 console.log("JS WORKING");
});
