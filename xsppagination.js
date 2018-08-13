var pagination = (function () {

  'use strict';

  //Polyfill for element matches
  if (Element && !Element.prototype.matches) {
    var proto = Element.prototype;
    proto.matches = proto.matchesSelector ||
        proto.mozMatchesSelector || proto.msMatchesSelector ||
        proto.oMatchesSelector || proto.webkitMatchesSelector;
  }

  var pageSize = 10;
  var showPage;
  var i = 1;
  var pageOf;
  var pageSizeOf;
  var jj;

  pageOf = document.getElementById('pageOf').innerHTML = 1;
  pageSizeOf = document.getElementById('pageSizeOf').innerHTML = pageSize;
  document.getElementById('pageOf').innerHTML  = 1;

  showPage = function(page){
    var articles = '.articles';
    var arrays = Array.prototype.slice.call(document.querySelectorAll(articles));

     arrays.forEach(function(item, idx, array){
            item.style.display = "none";
        if (idx >= pageSize * (page - 1) && idx < pageSize * page){
            item.style.display = "block";
        }
     });

    if(document.querySelectorAll('.articles').length === pageSize || document.querySelectorAll('.articles').length < pageSize){
      document.getElementById('next').setAttribute('disabled', 'true');
    }
  }
   showPage(i);

 document.getElementById('prev').addEventListener('click', function(){
     if(i === 2){
           document.getElementById('prev').setAttribute('disabled', 'true');
     }
     if (i != 1) {
      showPage(--i);
     }

     if(i - 1 !== pageSize){
         document.getElementById('next').removeAttribute('disabled');
     }
      document.getElementById('pageSizeOf').innerHTML = pageSizeOf -= pageSize;
      document.getElementById('pageOf').innerHTML = pageOf -= pageSize;
   });

   document.getElementById('next').addEventListener('click', function(){
     document.getElementById('prev').removeAttribute('disabled');
     if (i < (document.querySelectorAll('.articles').length)/3) {
       showPage(++i);
     }

     jj = document.getElementById('pageSizeOf').innerHTML = pageSizeOf += pageSize;
     document.getElementById('pageOf').innerHTML = pageOf += pageSize;

    if(jj > document.querySelectorAll('.articles').length){
      document.getElementById('pageSizeOf').innerHTML = document.querySelectorAll('.articles').length;
      document.getElementById('next').setAttribute('disabled', 'true');
    }
  });
})();
