# 000webhost-bypass-watermark

### How to remove the " Powered by 000webhost " watermark :

![alt text](https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png)

**CSS**

```css
img[src*="https://cdn.000webhost.com/000webhost/logo/footer-powered-by-000webhost-white2.png"] {
       display: none;
}
```

**Js 1**

```javascript
document.querySelectorAll('a[href*="000webhost"]').forEach(e => e.remove());
```

**Js 2**
The page gets loaded in a separate `iframe`, where I could not control the watermark usage. Hence, I added a custom script which is as below:

```javascript
window.addEventListener("DOMNodeInserted", function(event){
    if(event.target.localName=="iframe"){
      event.target.addEventListener("load", function(event2){
         // HERE YOU GO.
         event.target.contentDocument.querySelector("img[alt*='www.000webhost.com']").style.cssText = "display: none;";
      });
    }
});
```
Problem solved only for an iframe.
