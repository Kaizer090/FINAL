    <script>

        // ✅ PLAY FOR FREE button alert
        const playButton = document.querySelector(".PFF");

        playButton.addEventListener("click", function(event) {
            event.preventDefault();
            alert("Redirecting you to download Valorant!");
        });


        // ✅ Navbar color change on scroll
        window.addEventListener("scroll", function() {
            const nav = document.querySelector("nav");

            if (window.scrollY > 50) {
                nav.style.backgroundColor = "black";
            } else {
                nav.style.backgroundColor = "#212121";
            }
        });


   

    </script>
