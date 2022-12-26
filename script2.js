window.addEventListener("DOMNodeInserted", function(event){
    if(event.target.localName=="iframe"){
      event.target.addEventListener("load", function(event2){
         // HERE YOU GO.
         event.target.contentDocument.querySelector("img[alt*='www.000webhost.com']").style.cssText = "display: none;";
      });
    }
});
