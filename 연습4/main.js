var controller=new ScrollMagic.Controller();
var tween1=TweenMax.to(".home_1_text",0.5,{opacity:1,scale:2.5});
var tween2=TweenMax.to(".mail",0.1,{rotation:90,opacity:0.7,y:50,x:70,scale:0.8,color:"black"});
var tween3=TweenMax.to("#animation1",0.1,{opacity:0,scale:0.7});
var tween4=TweenMax.to('.home_1_text',0.1,{opacity:0});
var tween5=TweenMax.fromTo('.logo',0.1,{opacity:0,x:-100},{opacity:1,x:0});
var tween6=TweenMax.fromTo('.logo_1',0.1,{x:0,opacity:1},{x:-100,opacity:0});
var tween7=TweenMax.fromTo('.pr_container',0.1,{x:0},{x:"-200%"});
var tween8=TweenMax.to('.pr_container',0.1,{x:0});
var tween9=TweenMax.fromTo('.hide_text',{backgroundColor:"#ffffff"},{backgroundColor:"#FFFF00"});
var scene1=new ScrollMagic.Scene({
    triggerElement:".home_1",
    duration:"100%",
    triggerHook:0.9
})
.setTween(tween1)
.addTo(controller);

var scene2=new ScrollMagic.Scene({
    triggerElement:".home_1",
    triggerHook:0.9,
    duration:"30%"
})
.setTween(tween2)
.addTo(controller);

var scene3=new ScrollMagic.Scene({
    triggerElement:".home_0 ",
    duration:300,
    triggerHook:0.1,
    offset:100
})
.setClassToggle(".two",'active')
.setTween(tween3)
.addTo(controller);

var scene4=new ScrollMagic.Scene({
    triggerElement:".home_1",
    duration:600,
    triggerHook:0.1
})  
.setTween(tween4)
.addTo(controller);

var scene5=new ScrollMagic.Scene({
    triggerElement:".home_0",
    duration:400,
    triggerHook:0.1,
    offset:150
})
.setTween(tween5)
.addTo(controller);

var scene6=new ScrollMagic.Scene({
    triggerElement:".home_0",
    duration:400,
    triggerHook:0.1,
    offset:150
})
.setTween(tween6)
.addTo(controller);

var scene7=new ScrollMagic.Scene({
    triggerElement:".pr",
    duration:"100%",
    triggerHook:0.5,
    offset:50,
    
})
.setTween(tween7)
.addTo(controller);

var scene9=new ScrollMagic.Scene({
    triggerElement:".contentBx",
    duration:"100%",
    triggerHook:0.3,
    offset:150,
    
})
.setTween(tween9)
.addTo(controller);

function sizeAll(){
    var width=window.innerWidth;
    if(width<768){
        scene7.setTween(tween8);
    }else{
        scene7.setTween(tween7);
    }
}


$(window).resize(sizeAll);
sizeAll();


const t1=new TimelineMax({paused:true});
document.addEventListener('scroll',()=>{
   
    if(window.scrollY>500){
        t1.play();
    }else{
        t1.reverse();
    }
});

t1.to(".wrap",0,{opacity:0});


const myworklist=document.querySelector('.my_Worklist');
const workproject=document.querySelector('.work_project');
const projects=document.querySelectorAll('.project');

myworklist.addEventListener('click',(e)=>{
    const filter=e.target.dataset.filter || e.target.parentNode.dataset.filter
    workproject.classList.add('anim-out')
    setTimeout(() => {
        projects.forEach((project)=>{
            if(filter==='*'|| filter===project.dataset.type){
                project.classList.remove('visible');
            } else{
                project.classList.add('visible');
            }
        })
        workproject.classList.remove('anim-out') }, 300);
});

const contact_text_hover=new TimelineMax({paused:true});
 
contact_text_hover.to('.contact_text',{duration:1,y:20,ease:'bounce'})

$('.email').hover(()=>{
    contact_text_hover.play();
},()=>{
    contact_text_hover.reverse();
});

// circle-progress


function round(){

$('.chart1').circleProgress({
    size:250,
    value:0.85,
    fill:{gradient: ["#ffffff", "#ff5c5c"]}

})
.on('circle-animation-progress',function(event,progress,stepValue){
    $(this).find('strong').text(stepValue.toFixed(2).substr(2)+'%');
});

$('.chart2').circleProgress({
    size:250,
    value:0.82,
    fill:{gradient: ["#ffffff", "#ff5c5c"]}
})
.on('circle-animation-progress',function(event,progress,stepValue){
    $(this).find('strong').text(stepValue.toFixed(2).substr(2)+'%');
});

$('.chart3').circleProgress({
    size:250,
    value:0.70,
    fill:{gradient: ["#ffffff", "#ff5c5c"]}
})
.on('circle-animation-progress',function(event,progress,stepValue){
    $(this).find('strong').text(stepValue.toFixed(2).substr(2)+'%');
});

$('.chart4').circleProgress({
    size:250,
    value:0.90,
    fill:{gradient: ["#ffffff", "#ff5c5c"]}
})
.on('circle-animation-progress',function(event,progress,stepValue){
    $(this).find('strong').text(stepValue.toFixed(2).substr(2)+'%');
})
}
round('.circle');













