const scroll = new LocomotiveScroll({
    el: document.querySelector('.main'),
    smooth: true
});


function headingImage() {
    let elemC = document.querySelector(".elem-container")
    let fixed = document.querySelector(".fixed-image")

    elemC.addEventListener("mouseenter", function () {
        fixed.style.opacity = 1;
    })
    elemC.addEventListener("mouseleave", function () {
        fixed.style.opacity = 0;
    })

    let elems = document.querySelectorAll(".elem")
    elems.forEach(function (e) {
        e.addEventListener("mouseenter", function () {
            let image = e.getAttribute('data-image')
            fixed.style.backgroundImage = `url(${image})`
            // currentHovered = e;
        })
    })
}



function imageChangeAnimation() {
    // PAGE 4 – OFFICIAL STYLE TAB LOGIC

    const tabs = document.querySelectorAll(".tab");
    const img = document.querySelector(".page4-img");
    const desc = document.querySelector(".desc");

    // Text content (same structure as Sundown)
    const data = {
        Design:
            "Our team works with our clients to refine an idea and concept into an executable design. We create a final design that encompasses the brand narrative to bring stories to life and provide end-to-end design solutions from concept, design, and architectural drawings to 3D renderings.",

        Project:
            "Once we have a design, our production team takes the lead in bringing it to life. We manage all stages of the project, from build specifications and technical drawings to site surveys, vendor management, and 2D & 3D production. We have an extensive network of partners to meet each unique design and project need.",

        Execution:
            "We’re with you every step of the way, from the project initiation to launch day. Our production and design teams are onsite to direct and guide the process down to the last point of completion, ensuring success across the built space and experience."
    };

    // reset tabs
    function resetTabs() {
        tabs.forEach(tab => tab.classList.remove("active"));
    }

    // activate tab
    function activateTab(tab) {
        const key = tab.dataset.key;
        const image = tab.dataset.img;

        resetTabs();
        tab.classList.add("active");

        // image fade
        img.style.opacity = 0;

        img.src = image;
        img.style.opacity = 1;
        

        // text change
        desc.textContent = data[key];
    }

    // events
    tabs.forEach(tab => {
        // tab.addEventListener("mouseenter", () => activateTab(tab));
        tab.addEventListener("click", () => activateTab(tab));
    });

}


function swiperAnimation() {
    var swiper = new Swiper(".mySwiper", {
        slidesPerView: 1,
        spaceBetween: 100,

        breakpoints: {
            600: {
                slidesPerView: 3,
            
            }
        }
    });
}


function menuAnimation() {
    let menu = document.querySelector("nav h3")
    let full = document.querySelector(".full-scr")
    let navimg = document.querySelector("nav img")
    var flag = 0
    menu.addEventListener("click", function () {
        if (flag == 0) {
            full.style.top = 0
            navimg.style.opacity = 0
            flag = 1
        } else {
            full.style.top = "-100%"
            navimg.style.opacity = 1
            flag = 0
        }

    })
}

function loaderAnimation() {
    let loader = document.querySelector(".loader")
    setTimeout(function () {
        loader.style.top = "-100%"
    }, 4000)
}

swiperAnimation()
imageChangeAnimation()
headingImage()
menuAnimation()
loaderAnimation()


