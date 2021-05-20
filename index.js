const box = document.querySelector('#box')
let options={
//   root:
  rootMargin: "150px",//TRBL //This set of values serves to grow or shrink each side of the root element's bounding box before computing intersections.
  //threshold:0.4    //when you callback func is gonna run , like here as u scroll down ,callback func runs only when box is 40% visible and more , and when box is going out of the viewport the callback is fired again when 40% or less of the box is left on the screen
  //threshold:[0.2,0.4,0.6] //if we pass an array callback is called 2 times(coming in  and going out of the viewport) at each of the threshold (in total 6)
}
const callback = (entries,observer)=>{//The callback receives a list of IntersectionObserverEntry objects and the observer:
  console.log(entries[0]);//isIntersecting property is true when viewport intersects the box

}

let observer = new IntersectionObserver(callback,options) //IntersectionObserver constructor  
//callback funtion runs when instersection occurs , runs whenever the box comes into the view or goes out of the view 
observer.observe(box);
observer.unobserve(box);//cancel out the element , like upper code never existed 
observer.disconnect();//cancel watching of all of the elements , if there is multiple observing by observer


