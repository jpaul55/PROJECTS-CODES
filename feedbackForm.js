var xUrl = '';

  $(".video-responsive").fancybox({

  helpers : {
        media: true
    },
    width       : 800,
    Height      : 300,
    aspectRatio : true,
    scrolling   : 'no',

    closeClick  : false,
    afterShow: function(){
       var customContent = "<div class='form-group feedForm' id='feed-back'><h6>Rate this video</h6><div style='margin: 10px 0;'><span style='font-size: 16px;'>Did this video help you?</span> <button class='btn btn-primary' value='yes' onclick='yesFeed(event)' id='yes'>Yes</button> <button class='btn btn-default' id='no' value='no' onclick='noFeed()'>No</button></div></div>"
       $('.fancybox-outer').append(customContent);
       xUrl = $(this).attr('href');
       }
  });

   var yTitle;
 $('.video-responsive:parent').click(function(){
   yTitle = $(this).data('ytTitle');
 })


  //Video FeedBacks Section

  function _(x) {
    return document.getElementById(x);
  }

 var yes = false;
 var submitY = false;
 var x = false;
 var url = '';
 var _deviceSource = '';
 var _Source = '';
 var h = '';
 var urlParams = '';

    (window.onpopstate = function () {
    var match,
        pl     = /\+/g,  // Regex for replacing addition symbol with a space
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
        query  = window.location.search.substring(1);

    urlParams = {};
    while (match = search.exec(query))
    urlParams[decode(match[1])] = decode(match[2]);
})();


  if(window.location.href.indexOf('cm_') > - 1){
  //cmSolutionV = s[0];
  var xcm = urlParams["cm_mmc"];
  var s = xcm.split("-_-");
  cmSolutionView = s[0];
  cmProduct = s[1];
  cmSource = s[2];
  cmLocale = s[3];
}else if(window.location.href.indexOf('vwd') > - 1){
  var vwd = urlParams["vwd"];
  var v = vwd.split('-_-');
  var v1 = v[1].split("=");
  var v2 = v[2].split("=");
  var v3 = v[3].split("=");
  cmSolutionView = v[0];
  cmProduct = v1[1];
  cmSource = v2[1];
  cmLocale = v3[1];
}else{
  cmSolutionView = "";
  cmProduct = "";
  cmSource = "";
  cmLocale = "";
}


if (/Mobi/.test(navigator.userAgent)) {
             var userAgent = navigator.userAgent || navigator.vendor || window.opera;
            // Windows Phone must come first because its UA also contains "Android"
            if (/windows phone/i.test(userAgent)) {
                _deviceSource = "Windows Phone";
            }

            else if (/android/i.test(userAgent)) {
                _deviceSource = "Android";
            }

           else if(/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream){
                _deviceSource = "iOS";
            }
            }
        else{
            if (window.navigator.userAgent.indexOf("Mac") != -1)
            {
                 _deviceSource = "Mac";
            }
            else if (window.navigator.userAgent.indexOf("Linux") != -1)
            {
                _deviceSource = "Linux";
            }
            else
            {
                _deviceSource = "Windows";
            }
            }

 var _hostname = window.location.host;
        if (_hostname.indexOf('intkb') != -1) {
            _Source = "intranet";
        }
        else {
            _Source = "internet";
        }


  var browser = function() {
    // Return cached result if avalible, else get result then cache it.
    if (browser.prototype._cachedResult)
        return browser.prototype._cachedResult;

    // Opera 8.0+
    var isOpera = (!!window.opr && !!opr.addons) || !!window.opera || navigator.userAgent.indexOf(' OPR/') >= 0;

    // Firefox 1.0+
    var isFirefox = typeof InstallTrigger !== 'undefined';

    // Safari 3.0+ "[object HTMLElementConstructor]"
    var isSafari = /constructor/i.test(window.HTMLElement) || (function (p) { return p.toString() === "[object SafariRemoteNotification]"; })(!window['safari'] || safari.pushNotification);

    // Internet Explorer 6-11
    var isIE = /*@cc_on!@*/false || !!document.documentMode;

    // Edge 20+
    var isEdge = !isIE && !!window.StyleMedia;

    // Chrome 1+
    var isChrome = !!window.chrome && !!window.chrome.webstore;

    // Blink engine detection
    var isBlink = (isChrome || isOpera) && !!window.CSS;

    return browser.prototype._cachedResult =
        isOpera ? 'Opera' :
        isFirefox ? 'Mozilla Firefox' :
        isSafari ? 'Safari' :
        isChrome ? 'Google Chrome' :
        isIE ? 'Internet Explorer' :
        isEdge ? 'Microsoft Edge' :
        "Don't know";
};

 function getProductInURL() {
    var pathArray = window.location.pathname.toLowerCase().split( '/' )
  var resProduct = '';

  if(window.location.pathname.toLowerCase().indexOf("/ja-jp/") >= 0) {

    if (window.location.pathname.toLowerCase().indexOf("/solution/ja-jp/") >= 0 || window.location.pathname.toLowerCase().indexOf("/docs/") >= 0 ) //jp solution page Docs
    {
      resProduct=pathArray[2];
      if(pathArray.length==6 && window.location.pathname.toLowerCase().indexOf("/docs/") >= 0) {
        resProduct = pathArray[3];
      }
      else if (pathArray.length==7 && window.location.pathname.toLowerCase().indexOf("/solution/") >= 0) {
        resProduct = pathArray[3];
      }

    }
    else {
      resProduct = pathArray[4];
      if (pathArray[4]=='okaeri') {
        if(pathArray[5]=='vb' || pathArray[5]=='vbm'  || pathArray[5]=='ivbm'  || pathArray[5]=='pm' || pathArray[5]=='jb' || pathArray[5]=='pc-cillin' ) {
          resProduct = "okaeri-" + pathArray[5];
        }
      }

    }
  }
  else {
    resProduct="";
    //var prodList = "maximum-security-10,password-manager,antivirus-plus-security-10,mobile-security-for-android,mobile-security-for-ios,internet-security-10,safesync,antivirus-for-mac,titanium-antivirus-plus,titanium-premium-security,older-internet-security-version,premium-security-10,windows-8-apps,psp-ps3-ps4-security,online-guardian,mobile-backup,longevity,mobile-backup-and-restore,titanium-maximum-security,usb-security,doctor-cleaner"
    //if(prodList.indexOf(pathArray[5]) >=0) {
    //  resProduct=pathArray[5];
    //}
    if(pathArray.length < 7) {
      resProduct="HHO";
    }
    else {
        resProduct=pathArray[5];
        if(resProduct=="contact" || resProduct=="searchresult") {
          resProduct="HHO";
        }
    }

  }
  return resProduct;
 }

 function submitYes(val) {
     var yess = val;
     var feedBack = _("feedBack");
     var yF = _('yesFeed').value;
     yes = false;
      h = _('h');
     var aF = _('alertFeed');
     var sF = _('showF');
     if (h.style.maxHeight == "345px") {
         h.style.maxHeight = "0px";
         h.style.transition = "max-height 0.2s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 0.7s ease";
         aF.style.opacity = '0';
         setTimeout(function() {
             aF.style.display = "none";
         }, 500);
         sF.style.opacity = '1';
         setTimeout(function() {
             sF.style.display = "block";
         }, 500);
         yesAjax(yF, yess);
     }
     return false;
 }

function getCookies(){
 return $.cookie('withSession');
}


   var countryName = "";
 function GetCountryCode() {
       $.ajax({
              type: "GET",
              url: "//freegeoip.net/json/",
              cache: false,
              async: false,
              success: function(response) {
                 countryName = response.country_name;
              },
              error: function(response) {},
              complete: function(response) {}
          });
        return countryName;
      }

    GetCountryCode();


 function noFeed() {
     var feed = _("feed-back");
     feed.innerHTML = "<div class='alert alert-success' id='noF'><div class='alert-content'>Your opinion is appreciated</div></div><div id='thanks'><div id='s'><label>Kindly give us your feedback.</label><textarea onkeydown='validateNo() 'id='noFeed' class='form-control' rows='5'></textarea><div style='margin-top:10px'><button style='margin-right:5px' value='no' class='btn btn-primary' id='noBtn' onclick='submitNo(this.value)' disabled='disabled'>Send feedback</button><button class='btn btn-default' onclick='cancelFeed()'>Cancel</button></div></div></div>";
     $(".fancybox-overlay-fixed").animate({
         scrollTop: $(document).height()
     }, 100);
     var s = _('s');
     s.style.maxHeight = "345px";
     s.style.opacity = "1";

     $(".fancybox-overlay-fixed").animate({
         scrollTop: $(document).height()
     }, 2000);
 }

 function noThanks() {
   h = _('h');
   yes = false;
     if (h.style.maxHeight == "345px") {
         h.style.maxHeight = "0px";
         h.style.transition = "max-height 0.5s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 0.9s ease";

         $.ajax({
             method: "POST",
             url: "/webservices/KMSSubmitKBSurvey_Ti8.ashx",
             data: {
                 Type: 'VG',
                 probcat: 'VG ' + 'Yes ' + _Source,
                 originDate: '0',
                 locale: 'en-us',
                 segment: 'Consumer',
                 articlewasHelpful: 'Yes',
                 verbatim: ' ',
                 browser: browser(),
                 source: _Source,
                 FeedbackType: 'VG',
                 custCountry: GetCountryCode(),
                 deviceSource: _deviceSource,
                 products: getProductInURL(),
                 URLproduct: getProductInURL(),
                 refferingurl:xUrl,
                  cmSolutionViewed: cmSolutionView,
                  cmProduct: cmProduct,
                  cmSource: cmSource,
                  cmLocale: cmLocale,
                 title: yTitle,
                 state: getCookies()
             },
             success: function(msg) {

             }
         });
     }
 }

 function submitNo(val) {
     //Run Ajax code here
     var s = _('s');
     if (s.style.maxHeight == "345px") {
         s.style.maxHeight = "0px";
         s.style.transition = "max-height 0.8s cubic-bezier(0.4, 0.0, 0.2, 1), opacity 0.8s ease";
         var noF = _('noF');
         noF.style.opacity = '1';
         setTimeout(function() {
             noF.style.display = "block";
         }, 200);

         var no = val;
         var nF = _('noFeed').value;
         noAjax(nF, no, event);

     }
 }

 function cancelFeed() {
     var feed = _("feed-back");
     var customContent = "<div class='form-group' id='feed-back' style='height:auto;margin: 0;background: #F0F0F0;padding: 15px;border-top: 1px solid #dddddd;'><h6 style=' margin: 0;'>Rate this video</h6><div style='margin: 10px 0;'><span style='font-size: 16px;'>Did this video help you? </span><button class='btn btn-primary' onclick='yesFeed(event)'>Yes</button> <button class='btn btn-default' onclick='noFeed()'>No</button></div></div>"
     feed.innerHTML = customContent;
 }

 function yesFeed(event) {
     event.preventDefault ? event.preventDefault() : (event.returnValue = false);
     yes = true;
     var feed = _("feed-back");
     feed.innerHTML = "<div id='feedBack' class=''><div class='alert alert-success'><div class='alert-content' id='showF'>Your opinion is appreciated.</div><div class='alert-content' id='alertFeed'>Thank you for the feedback.</div></div><div id='h'><label>Do you have any suggestions or comments to improve our products and services? Tell us.</label><textarea class='form-control' onkeydown='validateYes()' id='yesFeed' rows='5'></textarea><div style='margin-top:10px'></div><button class='btn btn-primary' id='yesBtn' value='yes' onclick='submitYes(this.value)' disabled='disabled' style='margin-right:5px'>Send Feedback</button><button class='btn btn-default' onclick='noThanks()'>No, Thanks</button></div></div>";
     var fB = _("feedBack");
     var yF = _('yesFeed');
     yF.focus();
     var h = _('h');
     // fB.className = 'feedForms2';
     h.style.maxHeight = "345px";
     h.style.opacity = "1";
     // h.style.display = 'none';
     $(".fancybox-overlay-fixed").animate({
         scrollTop: $(document).height()
     }, 2000);

     function test(event) {
         event.stopPropagation();
         $('.fancybox-overlay-fixed').on('click', function(e) {
             if (yes) {
                 if (e.target !== this) {
                     return;
                 }
                 $.ajax({
                     method: "POST",
                     url: "/webservices/KMSSubmitKBSurvey_Ti8.ashx",
                     data: {
                         Type: 'VG',
                         probcat: 'VG ' + 'yes ' + _Source,
                         originDate: '0',
                         locale: 'en-us',
                         segment: 'Consumer',
                         articlewasHelpful: 'yes',
                         verbatim: ' ',
                         browser: browser(),
                         source: _Source,
                         FeedbackType: 'VG',
                         custCountry: GetCountryCode(),
                         deviceSource: _deviceSource,
                         products: getProductInURL(),
                         URLproduct: getProductInURL(),
                         refferingurl:xUrl,
                          cmSolutionViewed: cmSolutionView,
                          cmProduct: cmProduct,
                          cmSource: cmSource,
                          cmLocale: cmLocale,
                         title: yTitle,
                         state:getCookies()
                     },

                     success: function(msg) {


                     }

                 });
             }
         });
     }
     test(event);
 }

 function validateYes() {
     var yF = _('yesFeed');
     var yesBtn = _('yesBtn');
     if (yF.value.length > 0) {
         yesBtn.disabled = false;
         return false;
     }
     yesBtn.disabled = true;
 }

 function validateNo() {
     var nF = _('noFeed');
     var noBtn = _('noBtn');
     if (nF.value.length > 0) {
         noBtn.disabled = false;
         return false;
     }
     noBtn.disabled = true;
 }



 function yesAjax(vY, yS) {

     $.ajax({
         method: "POST",
         url: "/webservices/KMSSubmitKBSurvey_Ti8.ashx",
         data: {
             Type: 'VG',
             probcat: 'VG ' + yS + _Source,
             originDate: '0',
             locale: 'en-us',
             segment: 'Consumer',
             articlewasHelpful: yS,
             verbatim: vY,
             browser: browser(),
             source: 'intranet',
             FeedbackType: 'VG',
             custCountry: GetCountryCode(),
             deviceSource: _deviceSource,
             products: getProductInURL(),
             URLproduct: getProductInURL(),
             refferingurl:xUrl,
              cmSolutionViewed: cmSolutionView,
                  cmProduct: cmProduct,
                  cmSource: cmSource,
                  cmLocale: cmLocale,
             title: yTitle,
             state:getCookies()
         },
         success: function(msg) {
             yes = false;

         }
     });
 }

 function noAjax(nF, nS, event) {
     event.stopPropagation();
     yes = false;
     $.ajax({
         method: "POST",
         url: "/webservices/KMSSubmitKBSurvey_Ti8.ashx",
         data: {
             Type: 'VG',
             probcat: 'VG ' + nS + _Source,
             originDate: '0',
             locale: 'en-us',
             browser: browser(),
             segment: 'Consumer',
             articlewasHelpful: nS,
             verbatim: nF,
             source: 'intranet',
             FeedbackType: 'VG',
             custCountry: GetCountryCode(),
             deviceSource: _deviceSource,
             products: getProductInURL(),
             URLproduct: getProductInURL(),
             refferingurl:xUrl,
             cmSolutionViewed: cmSolutionView,
             cmProduct: cmProduct,
             cmSource: cmSource,
             cmLocale: cmLocale,
             title: yTitle,
             state:getCookies()
         },

         success: function(msg) {

         }

     });
 }
