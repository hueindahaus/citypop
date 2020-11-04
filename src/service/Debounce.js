

export function debounce(callback, waitTime){
  let timeout;

  return function returnFunction(...args) {

    const later = () =>{
      timeout = null
      callback(...args)
    }

    clearTimeout(timeout);
    timeout = setTimeout(later, waitTime)
  }
}