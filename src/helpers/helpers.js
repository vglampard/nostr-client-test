export function getImage(event) {
    let img = event.filter((tag) => tag[0] === "image");
    return img;
  }
  export function getTitle(tags) {
    let title = tags.filter((tag) => tag[0] === "title");
    return title;
  }
  
  export function dateFromUnix(unix) {
    return new Date(unix * 1000).toLocaleString();
  }
  
  export function getTags(tags) {
    return tags.filter((tag) => tag[0] === "t");
  }
  