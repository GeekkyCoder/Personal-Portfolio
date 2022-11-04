const slideObserverEl = document.querySelectorAll('.slide-up')


const slideObserver = new IntersectionObserver((entries)=> {
    entries.forEach(entry=> {
       if(entry.isIntersecting){
        console.log("intersecting")
         entry.target.classList.add("slide-down")
         entry.target.classList.remove("slide-up")
       }else {
        console.log("not intersecting")
         entry.target.classList.remove("slide-down")
         entry.target.classList.add("slide-up")
       }
    })
  })

  slideObserverEl.forEach(el=> slideObserver.observe(el))