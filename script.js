


function myanimation(){

  var tl = gsap.timeline();


  tl.from("#loader",{
    y:-1500,
    delay:0.2,
    duration:2
  })
  
  tl.to("#loader",{
    y:1500,
    delay:0.2,
    duration:4
  })
  
  
  
  
  
  
  
  
  tl.from(".page1-top img",{
    opacity:0,
    duration:1.2,
    
  
  
  })
  tl.from(".page1-center h3",{
    opacity:0,
    duration:1.2,
    stagger:0.3,
  
  
  })
  tl.from(".page1-down-left h3",{
    opacity:0,
    duration:1.2,
    stagger:0.3,
  
  
  })
  
  
  
   tl.from("nav a",{
      y:-20,
     delay:0.3, 
       duration:2,
     opacity:0,
     stagger:0.3
  
    
   })
   tl.from(" .page2-top h3",{
    opacity:0,
    duration:1.2,
    stagger:0.3,
  
  
  })
  
  tl.from(".page1-down-right",{
    opacity:0,
    duration:1.2,
    stagger:0.3,
  
  })
  
  
  
  var main = document.querySelector(".main");
  var circle = document.querySelector(".circle");
  var imageline = document.querySelector(".imageline");
  
  var page3threeimage = document.querySelector(".page3-three-left-image");
  
  var page3threerightimage = document.querySelector(".page3-three-right-image");
  
  var page3fouleftimage = document.querySelector(".page3-four-left-image");
  
  
  var page3fourrightimage = document.querySelector(".page3-four-right-image");
  
  var pageimage = document.querySelector(".page3-image");
  
  
  main.addEventListener("mouseenter",function(){
  
  gsap.to(circle,{
    opacity:1,
    scale:1
  })
  
  
  })
  
  
  main.addEventListener("mouseleave",function(){
  
    gsap.to(circle,{
      opacity:0,
      scale:0
    })
    
    
    })
  
    main.addEventListener("mousemove",function(dets){
  
      gsap.to(circle,{
        top:dets.y,
        left:dets.x,
        duration:2,
        ease: "power4.out", 
      
      
      })
      
      
      })
  
      imageline.addEventListener("mouseenter",function(){
        circle.innerHTML= "DETAILS";
     gsap.to(circle,{
      scale:2.8,
      backgroundColor:"#fff",
      color:"#000",
  
     })
  
  
  
      })
  
      imageline.addEventListener("mouseleave",function(){
        circle.innerHTML= "";
  
        gsap.to(circle,{
         scale:1,
         backgroundColor:"#000",
        })
     
     
     
         })
  
  
  
  
         
         page3threeimage.addEventListener("mouseenter",function(){
        circle.innerHTML= "DETAILS";
     gsap.to(circle,{
      scale:2.8,
      backgroundColor:"#fff",
      color:"#000",
  
     })
  
  
  
      })
  
      page3threeimage.addEventListener("mouseleave",function(){
        circle.innerHTML= "";
  
        gsap.to(circle,{
         scale:1,
         backgroundColor:"#000",
        })
     
     
     
         })
     
  
         
         page3threerightimage.addEventListener("mouseenter",function(){
          circle.innerHTML= "DETAILS";
       gsap.to(circle,{
        scale:2.8,
        backgroundColor:"#fff",
        color:"#000",
    
       })
    
    
    
        })
    
        page3threerightimage.addEventListener("mouseleave",function(){
          circle.innerHTML= "";
    
          gsap.to(circle,{
           scale:1,
           backgroundColor:"#000",
          })
       
       
       
           })
       
    
    
    
  
           page3fouleftimage.addEventListener("mouseenter",function(){
            circle.innerHTML= "DETAILS";
         gsap.to(circle,{
          scale:2.8,
          backgroundColor:"#fff",
          color:"#000",
      
         })
      
      
      
          })
      
          page3fouleftimage.addEventListener("mouseleave",function(){
            circle.innerHTML= "";
      
            gsap.to(circle,{
             scale:1,
             backgroundColor:"#000",
            })
         
         
         
             })
         
      
      
  
  
             
             page3fourrightimage.addEventListener("mouseenter",function(){
            circle.innerHTML= "DETAILS";
         gsap.to(circle,{
          scale:2.8,
          backgroundColor:"#fff",
          color:"#000",
      
         })
      
      
      
          })
      
          page3fourrightimage.addEventListener("mouseleave",function(){
            circle.innerHTML= "";
      
            gsap.to(circle,{
             scale:1,
             backgroundColor:"#000",
            })
         
         
         
             })
         
      
      
     
             pageimage.addEventListener("mouseenter",function(){
              circle.innerHTML= "DETAILS";
           gsap.to(circle,{
            scale:2.8,
            backgroundColor:"#fff",
            color:"#000",
        
           })
        
        
        
            })
        
            pageimage.addEventListener("mouseleave",function(){
              circle.innerHTML= "";
        
              gsap.to(circle,{
               scale:1,
               backgroundColor:"#000",
              })
           
           
           
               })
  
         
             
       
    
    
    
    
     
  
  
  
             
}myanimation();
