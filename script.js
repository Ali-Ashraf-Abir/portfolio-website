
function intro(){

    tl=gsap.timeline()
    tl2=gsap.timeline()
    tl3=gsap.timeline()
    tl4=gsap.timeline()
    tl5=gsap.timeline()
    tl6=gsap.timeline()
    tl.from('.intro',{duration:1,top:-50,stagger:0.25,ease:'elastic'})
    tl.to('.intro-screen',{delay:2,duration:1,clipPath: 'inset(50% 0 50% 0)',display:'hidden'})
    tl2.from('.card1',{delay:5,duration:0.5,top:380,left:700,ease:'ease-in'})
    tl2.from('.card2',{duration:0.5,top:150,left:400,ease:'ease-in'})
    tl2.from('.card3',{duration:0.5,top:60,left:150,ease:'ease-in'})
    tl2.from('.card4',{duration:0.5,top:300,left:300,ease:'ease-in'})
    tl2.from('.select-card',{duration:0.5,clipPath:'inset(0 0 0 100%)',ease:'ease-in'})

    document.querySelector('.card1-svg').addEventListener('mouseenter',function(){
        tl3.from('.card1-info',{duration:0.5,display:'hidden',clipPath: 'inset(0 0 0 0)',})
        tl3.to('.card1-svg',{duration:0.5,clipPath: 'inset(50% 0 50% 0)',display:'hidden'})
        tl3.from('.card1-info',{duration:0.5,display:'block',clipPath: 'inset(100% 0 0 0)',})
        tl3.to('.card1-info',{duration:0.5,display:'block',clipPath: 'inset(0 0 0 0)',})

        tl3.to('.card1-svg',{delay:5,duration:0.5,clipPath: 'inset(0 0 0 0)',display:'block'})
        tl3.to('.card1-info',{duration:0.5,display:'hidden',clipPath: 'inset(100% 0 0 0)',})
      


    })
    document.querySelector('.card2-svg').addEventListener('mouseenter',function(){
        tl4.from('.card2-info',{duration:0.5,display:'hidden',clipPath: 'inset(0 0 0 0)',})
        tl4.to('.card2-svg',{duration:0.5,clipPath: 'inset(50% 0 50% 0)',display:'hidden'})
        tl4.from('.card2-info',{duration:0.5,display:'block',clipPath: 'inset(100% 0 0 0)',})
        tl4.to('.card2-info',{duration:0.5,display:'block',clipPath: 'inset(0 0 0 0)',})

        tl4.to('.card2-svg',{delay:5,duration:0.5,clipPath: 'inset(0 0 0 0)',display:'block'})
        tl4.to('.card2-info',{duration:0.5,display:'hidden',clipPath: 'inset(100% 0 0 0)',})
    })


    document.querySelector('.card3-svg').addEventListener('mouseenter',function(){  
        tl5.from('.card3-info',{duration:0.5,display:'hidden',clipPath: 'inset(0 0 0 0)',})
        tl5.to('.card3-svg',{duration:0.5,clipPath: 'inset(50% 0 50% 0)',display:'hidden'})
        tl5.from('.card3-info',{duration:0.5,display:'block',clipPath: 'inset(100% 0 0 0)',})
        tl5.to('.card3-info',{duration:0.5,display:'block',clipPath: 'inset(0 0 0 0)',})

        tl5.to('.card3-svg',{delay:5,duration:0.5,clipPath: 'inset(0 0 0 0)',display:'block'})
        tl5.to('.card3-info',{duration:0.5,display:'hidden',clipPath: 'inset(100% 0 0 0)',})

      })

      
    document.querySelector('.card4-svg').addEventListener('mouseenter',function(){ 
        tl6.from('.card4-info',{duration:0.5,display:'hidden',clipPath: 'inset(0 0 0 0)',})
        tl6.to('.card4-svg',{duration:0.5,clipPath: 'inset(50% 0 50% 0)',display:'hidden'})
        tl6.from('.card4-info',{duration:0.5,display:'block',clipPath: 'inset(100% 0 0 0)',})
        tl6.to('.card4-info',{duration:0.5,display:'block',clipPath: 'inset(0 0 0 0)',})

        tl6.to('.card4-svg',{delay:5,duration:0.5,clipPath: 'inset(0 0 0 0)',display:'block'})
        tl6.to('.card4-info',{duration:1,display:'hidden',clipPath: 'inset(100% 0 0 0)',})

     })

}

intro()