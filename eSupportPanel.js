function _(x) {
   return document.getElementById(x);
}

window.__ = function(selector) {
   return document.querySelector(selector);
};

var userLogged = false;
  
axios.post('/webservices/getaccountinfo.ashx?o=all')
   .then(function(response) {
      var pPanel = __('.product-panel');
      var panelHead = __("#pLshow div:nth-child(2)");

      var classChangeDiv = __(".btn-login", parent.document);

      var observer = new MutationObserver(function(mutations) {
         mutations.forEach(function(mutation) {
            if (mutation.attributeName === "class") {
               var attributeValue = $(mutation.target).prop(mutation.attributeName);
            }
         });
      });
      observer.observe(classChangeDiv, {
         attributes: true
      });

      if (response.data.Email !== undefined && response.data !== "{}") {
         userLogged = true;
         isLogged(userLogged);
         document.cookie = "withSession=true; path=/; domain=.trendmicro.com";
         __('#pLshow').classList.remove('loading', 'disabled', 'default');
         __(".btn-login", parent.document).classList.add('logged');
         isUserLogged(response.data.FirstName, response.data.LastName, response.data.Email, pPanel, response.data.products);
         return false;
      }

      var promo = new Flickity('.promo-carousel', {
         cellAlign: 'center',
         contain: true,
         prevNextButtons: false
      });

      if (__('.btn-login').classList.contains('default')) {
         __('.btn-login, .open-login, .open-panel').addEventListener('click', function() {
            $.fancybox.open({
               src: '#modal-login-full',
               modal: true
            });
         })
      }
           
           
   /*   document.querySelector('.PopLogin').addEventListener('click', function(e){e.preventDefault(); 
        //  $('#pLshow')[0].click();
        document.querySelector('#pLshow').click()
      })  */   

      __(".btn-login", parent.document).classList.add('default');
      __("#pLshow", parent.document).classList.remove("loading", "logged", "disabled");

      if (!userLogged) {isUserLoggedOut(pPanel);}
        
   }).catch(function(error) {
      return Promise.reject(error);
   });


function isUserLogged(fname, lname, email, pPanel, products) {

   var allExpired = false;
   var notExp = false;
   var originalURL = window.location.href;
   var alteredURL = removeParam("sign", originalURL);

   _("panel-account").innerHTML = panelHeader(fname, email);
   panelProfileInfo(fname, lname, email);

   //Toggle Menu
   __(".btn-login-container a").addEventListener("click", toggleMenu.bind());
  
  //Set LocalStorage to panel
   if ("userlogged" in localStorage) {
      pPanel.style.right = "-350px";
   } else {
      localStorage.setItem("userlogged", "loginuser");
      pPanel.style.right = "0px";
   }

   //Output items initially before sorting
   _("productList").innerHTML = products.map(productLists).join('');

   var li = document.querySelectorAll(".product-list li");
   var xyz = 1500;
   for (var i = 0; i < li.length; i++) {
      li[i].classList.add("newProjectModalSlideIn");
      li[i].setAttribute("style", "animation-duration:" + xyz + "ms");
      var b = li[i];
      xyz += 500;

      var productDate = li[i].dataset.date;
      var dateProduct = productDate.split(' ');
      var dateProd = dateProduct[2];

      var pidSlice = li[i].dataset.sn;
      var slicepid = pidSlice.slice(0, 1);

      if (slicepid !== "X" && slicepid !== "P" && slicepid !== "A") {
         li[i].classList.add("standalone");
         li[i].children[0].classList.add("standalones");
      }

      if (li[i].dataset.date.indexOf("3000") > -1) {li[i].remove();}

      if (li[i].classList.contains("danger")) {
         li[i].setAttribute("style", "display:none");
         li[i].classList.add("expired");
         notExp = true;
      }
   }

   Element.prototype.appendAfter = function(element) {
      element.parentNode.insertBefore(this, element.nextSibling);
   }, false;


   function sort_lis(a, b) {
      return a.dataset.arrange - b.dataset.arrange || b.dataset.rdays - a.dataset.rdays;
   }

   var selectors = '.product';
   var arrr = Array.prototype.slice.call(document.querySelectorAll(selectors));
   var vv = arrr.sort(sort_lis);

   vv.forEach(function(item) {
      _('productList').appendChild(item);
   });

   var selector = 'li:not(.expired)[data-arrange]';
   var arrays = Array.prototype.slice.call(document.querySelectorAll(selector));
   var max = Math.max.apply(Math, arrays.map(function(item) {
      return item.dataset.arrange;
   }));

   var othr = document.createElement('div');
   othr.setAttribute('id', 'other');
   othr.innerHTML = "More Products";

   arrays.forEach(function(item, idx, array) {
      if (idx === array.length - 1) {
         othr.appendAfter(item);
      };
   });

   document.querySelectorAll('.product').forEach(function(item) {
      if (item.classList.contains('standalone') && !item.classList.contains('expired')) {
         item.appendAfter(_('other'));
      }
   });

   var selectorex = 'li.expired';
   var arrayss = Array.prototype.slice.call(document.querySelectorAll(selectorex));
   var maxs = Math.min.apply(Math, arrayss.map(function(item) {
      return item.dataset.rdays;
   }));

   var othrs = document.createElement('div');
   othrs.setAttribute('id', 'others');
   othrs.innerHTML = "More Products";
   othrs.setAttribute("style", "display:none");

   arrayss.forEach(function(item, idx, array) {
      if (idx === array.length - 1) {
         othrs.appendAfter(item);
      };
   });
    
   
   
   var oneNotExpired = document.querySelectorAll('.expired').length;
   var prodLength = document.querySelectorAll('.product').length;
   var oneNot = prodLength - oneNotExpired;
   var standAloneLength = document.querySelectorAll('.standalone').length;
   let noexpiredLength = document.querySelectorAll('.danger').length;
   var exElements = Array.prototype.slice.call(document.querySelectorAll('.standalones'));

   if (oneNot === 1) { _("other").style.display = "none";}

   if (oneNotExpired == prodLength) {
      _("others").style.display = "block";
      __(".switch").parentNode.classList.add("hide");

      if (oneNotExpired == 1 && prodLength == 1) { _("others").remove();}

      document.querySelectorAll('.expired').forEach(function(item) {
         item.style.display = "block";
      });
   }


   if (noexpiredLength == 0) { __('.switch').parentNode.classList.add('hide');}

   if (standAloneLength == 0 && !allExpired) { _('other').style.display = "none";}

   function insertAfter(referenceNode, newNode) {
      referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
   }

   document.querySelectorAll('.product').forEach(function(item) {
      if (item.classList.contains('standalone') && item.classList.contains('expired')) {
         item.appendAfter(_('others'));
      }
   });

   var rElement = Array.prototype.slice.call(document.querySelectorAll('.standalones'));
  
   rElement.map(function(item) {
      return item.remove();
   })

   __('#show-expired').addEventListener('click', showExpired);
}


function panelProfileInfo(firstName, lastName, emailAdd) {
   __(".btn-login-container > a > div:nth-child(2)").innerHTML = "<b>" + firstName + " " + lastName + "</b>" + "<br>" + "<span style='color: #777777;'>" + emailAdd + "</span>";
   __(".btn-login-container > a").classList.add('logged');
   __('#pLshow', parent.window.document).setAttribute('href', ';;javascript');
}


function showExpired(e) {

   var xyzz = 1000;
   var li = document.querySelectorAll('.product-list li');
   var showExp = false;
   var standAloneLength = document.querySelectorAll('.standalone').length;
   var standAlone = document.querySelectorAll('.standalone');
   var expire = document.querySelectorAll('.expired').length;


   for (var i = 0; i < li.length; i++) {
      var prodItems = li[i];
      prodItems.classList.add('newProjectModalSlideIn');
      xyzz += 100;

      if (prodItems.style.display == "none") { // show expired
        
         if (prodItems.classList.contains('expired')) { _('show-expired').dataset.checkex = "1"; }
        
         if (prodItems.classList.contains('expired') && prodItems.classList.contains('standalone')) {
            _('others').setAttribute('style', 'display:block');
            _('other').setAttribute('style', 'display:none');
         } else {
            if (_('other') !== null) {  _('other').setAttribute('style', 'display:none');}
            showExp = true;
         }

         if (!prodItems.classList.contains('expired') && prodItems.classList.contains('standalone')) {
            _('other').setAttribute('style', 'display:block');
            _('others').setAttribute('style', 'display:none');
         }
         prodItems.setAttribute('style', 'display:block; animation-duration:' + xyzz + 'ms');

      } else {
         _('show-expired').dataset.checkex = "0";
         prodItems.setAttribute('style', 'display:none; animation-duration:' + xyzz + 'ms');
         _('others').setAttribute('style', 'display:none');
      }
   }
}

function productLists(item) {
   var startDur = 2000;
   var productMap2 = {};
   var t = item.pid;
   var indicator;
   var prodWidgetPan
   var skuIndicator;
   productMap2.t = Object.keys(productMap[t]).map(function(key) {
      return productMap[t][key];
   });

   var keys = Object.keys(productMap2.t);
   var prodMapKey = Object.keys(productMap[t]);
   var index = '';
   var skuIndicator;

   var x = item.productSKU;
   if (keys.length > 1) {
      if (x == 'SMBPremium' || x == 'BBY') {
         index = 0;
         skuIndicator = prodMapKey[index];

      } else {
         index = 1;
         skuIndicator = prodMapKey[index];

      }
   } else {
      index = 0;
      skuIndicator = prodMapKey[index];

   }

   prodWidgetPan = new prodWidgetPanel(item.pid, item.remainingDays, item.seatRemaining, item.productName, item.serial, item.isAutorenewal, item.isPremiumSupport, item.productSKU);

   var arg;
   if (prodWidgetPan.looksGood()) {
      indicator = 'success';
      arg = 1;
   } else if (prodWidgetPan.getTheLatest()) {
      indicator = 'info';
      arg = 2;
   } else if (prodWidgetPan.aboutTo()) {
      indicator = 'red';
      arg = 4;
   } else if (prodWidgetPan.maxProd()) {
      indicator = 'warning';
      arg = 3;
   } else if (prodWidgetPan.ohOhCheck()) {
      indicator = 'danger';
   }

   var dataAK = item.akInfo;
   var ser;
   var akinform;

   var latest = item.akInfo.reduce(function(r, a) {
      return r.ActivationDate > a.ActivationDate ? r : a;
   }, {});

   if (dataAK.length > 0) {
      ser = latest.ActivationKey;
      akinform = "Activation Code"
   } else {
      ser = item.serial;
      akinform = "Serial Number"
   }


   return '<li class="media product ' + indicator + '" data-date="' + item.expirationDate + '" data-rdays="' + item.remainingDays + '"data-skuindi="' + skuIndicator + '" data-indi="' + indicator + '" data-psupport="' + item.isPremiumSupport + '" data-sn="' + item.serial + '" data-maxseat="' + item.maxSeatNo + '" data-pid="' + item.pid + '" data-arrange="' + arg + '" onclick="viewProdInfo(this)">' +
      '<div class="product-ms ' + indicator + '">&nbsp;</div>' +
      '<div class="media-left product-box">' +
      '<div class="plProductThumb pull-left ' + productMap[item.pid][skuIndicator].panelClass + '">&nbsp;</div>' +
      '</div>' +
      '<div class="media-body product-data">' +
      '<span class="product-name">' + productMap[item.pid][skuIndicator].productName + '</span>' +
      '<span class="data-value">' + ser + '</span>' +
      '<span class="data-title">' + akinform + '</span>' +
      '<span class="date ' + indicator + '">' + item.expirationDate + '</span>' +
      '</div>' +
      '</li>'
}


function viewProdInfo(pl) {
   if (productMap[pl.dataset.pid][pl.dataset.skuindi].productPageLink != "") {
      if (pl.dataset.psupport == true && pl.dataset.maxseat == "1") {
         if (pl.dataset.skuindi == "BBY") {
            parent.window.location = productMap[pl.dataset.pid][pl.dataset.skuindi].productPageLink;
         } else {
            parent.window.location = productMap[pl.dataset.pid][pl.dataset.skuindi].productPageLink + "/myproduct.aspx?acsn=" + pl.dataset.sn;
         }
      } else if (pl.dataset.maxseat == 1) {
         if (pl.dataset.skuindi == "BBY") {
            parent.window.location = productMap[pl.dataset.pid][pl.dataset.skuindi].productPageLink;
         } else if (pl.dataset.skuindi == "AVM") {
            parent.window.location = productMap[pl.dataset.pid][pl.dataset.skuindi].productPageLink + "/myproduct.aspx?acsn=" + pl.dataset.sn;

         } else {
            parent.window.location = productMap[pl.dataset.pid][pl.dataset.skuindi].productPageLink + "/home.aspx" + productMap[pl.dataset.pid][pl.dataset.skuindi].panelPageLinkGA;
         }

      } else if (pl.dataset.maxseat > 1) {
         if (pl.dataset.skuindi == "BBY") {
            parent.window.location = productMap[pl.dataset.pid][pl.dataset.skuindi].productPageLink;
         } else if (pl.dataset.skuindi == "AVM") {
            parent.window.location = productMap[pl.dataset.pid][pl.dataset.skuindi].productPageLink + "/myproduct.aspx?acsn=" + pl.dataset.sn;
         } else {
            if (pl.dataset.pid == "MS20") {
               parent.window.location = productMap[pl.dataset.pid][pl.dataset.skuindi].productPageLink + "/home.aspx" + productMap[pl.dataset.pid][pl.dataset.skuindi].panelPageLinkGA;
            } else {
               parent.window.location = productMap[pl.dataset.pid][pl.dataset.skuindi].productPageLink + "/myproduct.aspx?acsn=" + pl.dataset.sn;
            }
         }
      }
   } else {
      if (pl.dataset.psupport == true && pl.dataset.maxseat == "1") {
         if (pl.dataset.skuindi == "BBY") {
            parent.window.location = productMap[pl.dataset.pid][pl.dataset.skuindi].productPageLink;
         } else {
            parent.window.location = "/en-us/home/pages/technical-support/maximum-security/myproduct.aspx?acsn=" + pl.dataset.sn;
         }
      } else if (pl.dataset.maxseat == 1) {

         if (pl.dataset.skuindi == "BBY") {
            parent.window.location = productMap[pl.dataset.pid][pl.dataset.skuindi].productPageLink;
         } else if (pl.dataset.skuindi == "AVM") {
            parent.window.location = productMap[pl.dataset.pid][pl.dataset.skuindi].productPageLink + "/myproduct.aspx?acsn=" + pl.dataset.sn;
         } else {
            parent.window.location = "/en-us/home/index.aspx" + productMap[pl.dataset.pid][pl.dataset.skuindi].panelPageLinkGA;
         }

      } else if (pl.dataset.maxseat > 1) {
         if (pl.dataset.skuindi == "BBY") {
            parent.window.location = productMap[pl.dataset.pid][pl.dataset.skuindi].productPageLink;
         } else if (pl.dataset.skuindi == "AVM") {
            parent.window.location = productMap[pl.dataset.pid][pl.dataset.skuindi].productPageLink + "/myproduct.aspx?acsn=" + pl.dataset.sn;
         } else {
            parent.window.location = "/en-us/home/pages/technical-support/maximum-security/myproduct.aspx?acsn=" + pl.dataset.sn;
         }
      }
   }
}


function toggleMenu(event) {
   event.preventDefault();
   var pPanelToggle = document.querySelector('.product-panel');

   if (pPanelToggle.style.right === "0px") {
      pPanelToggle.style.right = "-350px";
   } else {
      pPanelToggle.style.right = "0px";
   }
}

function isUserLoggedOut(pPanel) {
   document.cookie = "withSession=false; path=/; domain=.trendmicro.com";
   __("#pLshow", parent.document).classList.remove("loading");
   __("#pLshow", parent.document).classList.remove("logged");
   __("#pLshow", parent.document).classList.remove("disabled");

   if (pPanel.style.right == "0px") {
      pPanel.style.right = "-350px";
   }
   localStorage.clear();
}

function panelHeader(firstname, email) {
   return '<div class="panel-close">' +
      '<a class="btn product-panel-close" onclick="closePanel()"><i class="fa fa-angle-right" aria-hidden="true"></i></a>' +
      '</div>' +
      '<div class="avatar">' +
      '<img src="/media/13887263/user-active-260.png" width="65" alt="">' +
      ' </div>' +
      '<div class="customer">' +
      '<span class="name">' + firstname + '</span>' +
      '<span class="email">' + email + '</span>' +
      '</div>' +
      '<div class="product-panel-nav bottom">' +
      '<a href="http://gr.trendmicro.com/GREntry/NonPayment?Target=MyAccount&amp;FunID=Privacy&amp;Locale=EN-US" target="_blank" class="btn btn-link">Privacy Policy</a>' +
      '<a href="/SAML/SSOLogout.aspx?loc=en-us" class="btn btn-link pull-right" onclick="loggedOut(event)">Log Out</a>' +
      '</div>'
}


function closePanel() {
   var pPanel = document.querySelector('.product-panel');
   if (pPanel.style.right === "0px") {
      pPanel.style.right = "-350px";
   }
}

function loggedOut(event) {
   event.preventDefault();
   _('btnEnd').click();
}

function isLogged(s) {
   var newURL = location.href.split("?")[0];
   window.history.pushState('object', document.title, newURL);
}

  
function triggerLoginModal() {
   if (!userLogged) {
      if (window.location.href.indexOf('sign=yes') > -1) {
    //  document.getElementById('pLshow').click();
    // document.querySelector('a#pLshow').click();
        $('#pLshow')[0].click();
        console.log('triggersa');
       
      }
   }
}
  
window.addEventListener('load', triggerLoginModal);



