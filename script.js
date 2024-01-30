

const text = document.querySelector("#page5 #center #text h1");

text.innerHTML = text.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 5}deg)" >${char}</span>`
).join("")

const text1 = document.querySelector("#page5 #sideimg1 #text1 h1");

text1.innerHTML = text1.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 7.5}deg)" >${char}</span>`
).join("")

const text3 = document.querySelector("#page5 #sideimg2 #text2 h1");

text3.innerHTML = text3.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 7.5}deg)" >${char}</span>`
).join("")



var tl1 = gsap.timeline();

tl1
.to("#home .patterns" ,{
    duration:2,
    delay:5,
    scale:3,
    opacity:0,
})
.to("#home .loader" , {
    duration:1.5,
    opacity:1,
})
.to("#home .loader" , {
    duration:1.5,
    opacity:0,
    delay:2
})

.from("#home #nav" ,{
    top:"-40%",
    opacity:0,
    duration:.5,
})
.from("#home #nav #link #lk1" ,{
    opacity:0,
    duration:.5,
})
.from("#home #nav #link #lk2" ,{
    opacity:0,
    duration:.5,
})
.from("#home #nav #link #lk3" ,{
    opacity:0,
    duration:.5,
})
.from("#home #nav #link #lk4" ,{
    opacity:0,
    duration:.5,
})

.from("#home #circle1" ,{
    left:"30%",
    duration:2.5,
    opacity:0,
}, "s1")

.from("#home #circle2" ,{
    top:"-40%",
    duration:2.5,
    opacity:0,
    ease: Elastic.easeOut.config(1 , 0.3)
})
.from("#home #circle3" ,{
    left:"30%",
    duration:2.5,
    opacity:0,
}, "s1")
.from("#home #text1" ,{
    left:"-60%",
    duration:1,
}, "s2")
.from("#home #text2" ,{
    left:"150%",
    duration:1,
}, "s2")


function page2(){
    var tl2 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page2",
            scroller :"body",
            start:"top 20%",
            end:"top 55%",
            scrub:1,
            pin:true
        }
    });
    tl2
    .from("#page2 img" ,{
        rotate:"-45deg",
        duration:2,
        opacity:0,
    }, "s2")
}
page2();

function page3(){
    var tl3 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page3",
            scroller :"body",
            start:"top 85%",
            end:"top -40%",
            scrub:1,
        }
    });
    tl3
    .from("#page3 img" ,{
        scale:0,
        delay:1.3,
    })
    .from("#page3 h1" ,{
        opacity:0,
        delay:1.3,
        duration:1
    })
    .from("#page3 p" ,{
        opacity:0,
        delay:1.3,
        duration:1
    })
    .to("#page3 img" ,{
        duration:8,
        rotate:"90deg",
    })
}
page3();

function page4(){
    var tl4 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page4",
            scroller :"body",
            start:"top 0%",
            scrub:1,
            pin:true,
        }
    });
    tl4
    .to("#page4>h1",{
        left:"-50%",
        duration:1.5,
        opacity:0,
    }, "s3")
    .to("#page4 #bx1",{
        left:"-50%",
        duration:2.3,
        width:"33%",
    }, "s3")
    .to("#page4 #bx2",{
        left:"-50%",
        duration:4,
        width:"48%",
    }, "s3")
    .to("#page4 #bx3",{
        left:"-50%",
        duration:7,
        width:"22%",
    }, "s3")
    .to("#page4 #bx4",{
        left:"-30%",
        duration:6,
        width:"45%",
    }, "s3")
    .to("#page4 #bx5",{
        left:"20%",
        duration:6,
    }, "s3")
    .to("#page4 #bx6",{
        left:"45%",
        duration:9,
    }, "s3")

}
page4();

function page5(){
    var tl5 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page5",
            scroller :"body",
            start:"top 90%",
            end:"top 50%",
            scrub:1,
        }
    });
    tl5
    .from("#page5>h1",{
        opacity:0,
        delay:.2,
        duration:1,
    })
    .from("#page5 #center" ,{
        scale:0,
        duration:1, 
    },"s4")
    .from("#page5 #sideimg1" ,{
        scale:0,
        duration:1, 
    },"s4")
    .from("#page5 #sideimg2" ,{
        scale:0,
        duration:1, 
    },"s4")

}
page5();

function page6(){
    var tl6 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page6",
            scroller :"body",
            start:"top 40%",
            end:"top 20%",
            scrub:1,
        }
    });
    tl6
    .from("#page6>video" ,{
        scale:0,
        duration:1.6,
    })
}
page6();

function pagesix(){
    var tlsix = gsap.timeline({
        scrollTrigger:{
            trigger:"#pagesix",
            scroller :"body",
            start:"top 80%",
            end:"top 20%",
            scrub:1,
        }
    });
    tlsix
    .from("#pagesix img" ,{
        opacity:0,
        scale:0,
        duration:1
    })
}
pagesix();

function page7(){
    var tl7 = gsap.timeline({
        scrollTrigger:{
            trigger:"#page7",
            scroller :"body",
            start:"top 0%",
            end:"top 90%",
            scrub:1,
            pin:true,
        }
    });
    tl7
    .from("#page7 #bgcircle",{
        scale:0,
        duration:2,
        bottom:"-100%",
    })
    .from("#page7 #txt h1",{
        opacity:0,
        top:"80%",
        duration:2,
        delay:2.5,
    })
}

page7();