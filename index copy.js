//observer for scrollable element instead if viewport , make "container" the "root" property in options object

const box = document.querySelector('#box')
const container = document.querySelector('#container')
let options={
   root:container,
//   rootMargin:
  threshold:0.2
}
const callback = (entries)=>{
  console.log(entries[0]);
}

let observer = new IntersectionObserver(callback,options) 
observer.observe(box)


