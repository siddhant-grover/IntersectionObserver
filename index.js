const box = document.querySelector('#box')
let options={
//   root:
//   rootMargin:
  threshold:0.4    //when you callback func is gonna run , like here callback func runs only when box is 40% visible and more , and when going up it fires he callback again when it reaches the 40% threashold line as before
  //threshold:[0.2,0.4,0.6] //if we pass an array callback is called 3 times at each of the threshold 
}
const callback = (entries)=>{
  console.log(entries[0]);//isIntersecting property is true when viewport intersects the box

}

let observer = new IntersectionObserver(callback,options) //IntersectionObserver constructor  
//callback funtion runs when instersection occurs , runs whenever the box comes into the view or goes out of the view 
observer.observe(box)


