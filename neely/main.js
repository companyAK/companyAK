// Nav scroll effect
window.addEventListener('scroll',()=>{
  document.getElementById('nav').classList.toggle('scrolled',window.scrollY>40)
})

// Scroll reveal
const reveals=document.querySelectorAll('.reveal')
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}})
},{threshold:.1})
reveals.forEach(el=>observer.observe(el))

// Counter animation
const counters=document.querySelectorAll('[data-count]')
const counterObserver=new IntersectionObserver(entries=>{
  entries.forEach(e=>{
    if(e.isIntersecting){
      const el=e.target,target=+el.dataset.count
      let current=0,step=target/60
      const timer=setInterval(()=>{
        current+=step
        if(current>=target){current=target;clearInterval(timer)}
        el.textContent=Math.floor(current)+'+'
      },20)
      counterObserver.unobserve(el)
    }
  })
},{threshold:.5})
counters.forEach(el=>counterObserver.observe(el))
