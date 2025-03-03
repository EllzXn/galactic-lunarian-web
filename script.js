document.addEventListener("DOMContentLoaded", function() {
    // Efek fade-in saat halaman dibuka
    document.body.style.opacity = "0";
    setTimeout(() => {
        document.body.style.opacity = "1";
        document.body.style.transition = "opacity 1.5s ease-in-out";
    }, 100);

    // Efek scroll saat turun
    window.addEventListener("scroll", function() {
        let sections = document.querySelectorAll("section");
        let windowHeight = window.innerHeight;
        
        sections.forEach((section) => {
            let position = section.getBoundingClientRect().top;
            if (position < windowHeight - 100) {
                section.classList.add("visible");
            }
        });
    });

    // Smooth Scroll untuk Navbar
    const links = document.querySelectorAll("nav ul li a");
    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault(); // Mencegah default behavior
            const targetId = this.getAttribute("href").substring(1); // Ambil ID tujuan
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 60, // Scroll ke posisi ID
                    behavior: "smooth" // Efek scroll halus
                });
            }
        });
    });
});