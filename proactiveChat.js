  var descr = '';
  var _countryCode = 'N/A';
  var _countryName = 'N/A';
  var _accessID = "ENHSCPRO";
  var _accessIDSupportSched = "ENHSCPRO";
  var _localeLang = "";
  var _localeLoc = "";
  //submission of form
  var _hidUrlFrom = "";
  var _hidLanguage = "";
  var _hidGIC = "";
  var _hidVersionName = "";
  var _hidInternetConnName = "";
  var isPremium = "";
  var _firstName = "";
  var _lastName = "";
  var _email = "";
  var _probDesc = "";
  var _sn = "";
  var _phoneNum = "";
  var _IsSubmit = false;
  var resultFname = false;
  var resultLname = false;
  var resultEmail = false;
  var qS = '';
  var kW = '';
  var lar_countries = '';
  var template = '';
  var splitKeyword = '';
  var msg = '';
  var duplicateStatus = false;
  var newarray = [];
  var duparray = [];
  var duplicates = [];
  var newKey = [];
  var duppKey = [];
  var kws = '';
  var probDesc = '';
  var session = false;
  var sessionKb = false;
  var cEM = false;
  var solutionID = '';



  $(function() {
      var isMobile = {
          Android: function() {
              return navigator.userAgent.match(/Android/i);
          },
          BlackBerry: function() {
              return navigator.userAgent.match(/BlackBerry/i);
          },
          iOS: function() {
              return navigator.userAgent.match(/iPhone|iPad|iPod/i);
          },
          Opera: function() {
              return navigator.userAgent.match(/Opera Mini/i);
          },
          Windows: function() {
              return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
          },
          any: function() {
              return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
          },
          ieBrowsers: function() {
              return navigator.userAgent.indexOf("MSIE") !== -1 || navigator.userAgent.indexOf("Trident/") !== -1 || navigator.userAgent.indexOf("MSIE") !== -1 || navigator.userAgent.indexOf("Edge/") !== -1;
          }
      };

     function isNumeric(n) {
        return !isNaN(parseFloat(n)) && isFinite(n);
     }

    var url = window.location.href;
    var urlsplit = url.split('.');
    var dot = urlsplit[2];
    var dotsplit = dot.split('/');
    var kbId = dotsplit.slice(-1)[0];
    if(isNumeric(kbId)){
      solutionID = kbId;
    }else{
       solutionID = '';
    }



      lar_countries = [{
              "countryCode_lar": "ai",
              "countryName_lar": "Anguilla"
          },
          {
              "countryCode_lar": "ag",
              "countryName_lar": "Antigua and Barbuda"
          },
          {
              "countryCode_lar": "ar",
              "countryName_lar": "Argentina"
          },
          {
              "countryCode_lar": "bz",
              "countryName_lar": "Belize"
          },
          {
              "countryCode_lar": "bo",
              "countryName_lar": "Bolivia"
          },
          {
              "countryCode_lar": "cl",
              "countryName_lar": "Chile"
          },
          {
              "countryCode_lar": "co",
              "countryName_lar": "Colombia"
          },
          {
              "countryCode_lar": "cr",
              "countryName_lar": "Costa Rica"
          },
          {
              "countryCode_lar": "cu",
              "countryName_lar": "Cuba"
          },
          {
              "countryCode_lar": "do",
              "countryName_lar": "Dominican Republic"
          },
          {
              "countryCode_lar": "ec",
              "countryName_lar": "Ecuador"
          },
          {
              "countryCode_lar": "sv",
              "countryName_lar": "El Salvador"
          },
          {
              "countryCode_lar": "fk",
              "countryName_lar": "Falkland Islands"
          },
          {
              "countryCode_lar": "gp",
              "countryName_lar": "Guadeloupe"
          },
          {
              "countryCode_lar": "gt",
              "countryName_lar": "Guatemala"
          },
          {
              "countryCode_lar": "ht",
              "countryName_lar": "Haiti"
          },
          {
              "countryCode_lar": "hn",
              "countryName_lar": "Honduras"
          },
          {
              "countryCode_lar": "jm",
              "countryName_lar": "Jamaica"
          },
          {
              "countryCode_lar": "mx",
              "countryName_lar": "Mexico"
          },
          {
              "countryCode_lar": "ni",
              "countryName_lar": "Nicaragua"
          },
          {
              "countryCode_lar": "pa",
              "countryName_lar": "Panama"
          },
          {
              "countryCode_lar": "py",
              "countryName_lar": "Paraguay"
          },
          {
              "countryCode_lar": "pe",
              "countryName_lar": "Peru"
          },
          {
              "countryCode_lar": "pr",
              "countryName_lar": "Puerto Rico"
          },
          {
              "countryCode_lar": "mf",
              "countryName_lar": "Saint Martin"
          },
          {
              "countryCode_lar": "sr",
              "countryName_lar": "Suriname"
          },
          {
              "countryCode_lar": "tc",
              "countryName+_lar": "Turks and Caicos Islands"
          },
          {
              "countryCode_lar": "uy",
              "countryName_lar": "Uruguay"
          },
          {
              "countryCode_lar": "ve",
              "countryName_lar": "Venezuela"
          }
      ];


       $(".proactive-chat-button").click(function(){
          //console.log('TEST open');
        });


    /*  function loadSearchInterval() {
         var counterSearch = 0;
         var loaded = parseInt(sessionStorage.getItem('loaded'), 10),
         loaded_numb = loaded?loaded+1:1;
         sessionStorage.setItem('loaded', loaded_numb);
      // $('body').append('This page was loaded by you '+loaded_numb+' times !');
        var fireGA = false;

        if(loaded_numb > 2){
          session = true;
        }

        if(!session && !isMobile.any()){
           var myIntervalSearch = window.setInterval(CheckActiveSearch, 1000);
        }

        function CheckActiveSearch() {
              counterSearch++;

              if (counterSearch === 10) {

                  $(".proactive-chat-button").trigger("click");


                  $('.proactive-chat-icon .procty').toggleClass('proactive-procty-close').toggleClass('proactive-procty');
                  window.clearInterval(counterSearch);

                  return false;
              }
          }

      } */


     function loadSearchInterval(countersearchInt) {
         var counterSearch = 0;
        // alert('searchInt ' + countersearchInt);
         var loaded = parseInt(sessionStorage.getItem('loaded'), 10),
         loaded_numb = loaded?loaded+1:1;
         sessionStorage.setItem('loaded', loaded_numb);
         //console.log('SessionCount ' + loaded_numb);
      // $('body').append('This page was loaded by you '+loaded_numb+' times !');

        if(loaded_numb > 2){
          session = true;
        }

        if(!session && !isMobile.any()){
         var myIntervalSearch = window.setInterval(CheckActiveSearch, 1000);
        }

        function CheckActiveSearch() {
              //counterSearch++;
              counterSearch++;
              if (counterSearch === countersearchInt) {

                if(!$('#proactive-chat-popover').attr("style")){
                  $(".proactive-chat-button").trigger("click");
                }

                  $('.proactive-chat-icon .procty').toggleClass('proactive-procty-close').toggleClass('proactive-procty');
                  window.clearInterval(counterSearch);
                  return false;
              }
          }
      }


      function getParameterByName(name, url) {
          if (!url) url = window.location.href;
          name = name.replace(/[\[\]]/g, "\\$&");
          var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
              results = regex.exec(url);
          if (!results) return null;
          if (!results[2]) return '';
          return decodeURIComponent(results[2].replace(/\+/g, " "));
      }


      function showProctyMobile() {
          var counterSearchs = 0;
          var myIntervalSearchs = window.setInterval(checkMobile, 1000);
          function checkMobile() {
              counterSearchs++;
              if (counterSearchs === 10) {
                  $('.proactive-badge').show();
                  window.clearInterval(counterSearchs);
                  return false;
              }
          }
      }

      function GetCountryCode() {
          $.ajax({
              type: "GET",
            //  url: "//freegeoip.net/json/",
              url: "//geoip.nekudo.com/api",
              cache: false,
              async: false,
              dataType: 'jsonp',
              success: function(response) {
                  if (response !== "") {
                    //  _countryCode = response.country_code;
                   //   _countryName = response.country_name;
                  //  _countryCode = response.country.name;
                    
                     _countryName = response.country.name;
                      _countryCode = response.country.code
                      console.log(_countryCode);
                      console.log(_countryName); 
                    
                    
                    
             if(_countryCode == "US" && _countryName == "United States"){
                     _countryName = "USA";
                     _countryCode = "US";
                    console.log('eti n');
                 }

                 if(_countryName == "Brasil"){
                     _countryName = "Brazil";
                 }

                 if(_countryName == "Saint Vincent and the Grenadines"){
                     _countryName = "St. Vincent and the Grenadines";
                 }

                 if(_countryName == "Bosnia & Herzegovina"){
                     _countryName = "Bosnia and Herzegovina";
                 }

                 if(_countryName == "Myanmar/Burma"){
                     _countryName = "Burma/Myanmar";
                 }

                 if(_countryName == "Myanmar [Burma]"){
                     _countryName = "Burma/Myanmar";
                 }

                 if(_countryName == "Great Britain"){
                     _countryName = "Great Britain (UK)";
                 }

                 if(_countryName == "Israel and the Occupied Territories"){
                     _countryName = "Israel";
                 }

                 if(_countryName == "Kyrgyz Republic"){
                     _countryName = "Kyrgyzstan";
                 }

                    if(_countryName == "Republic of Macedonia"){
                     _countryName = "Macedonia";
                 }

                    if(_countryName == "Republic of Moldova"){
                     _countryName = "Moldova";
                 }

                    if(_countryName == "Slovak Republic"){
                     _countryName = "Slovakia";
                 }

                    if(_countryName == "Timor Leste"){
                     _countryName = "Timor-Leste";
                 }

                    if(_countryName == "Trinidad & Tobago"){
                     _countryName = "Trinidad and Tobago";
                 }

                    if(_countryName == "Turks & Caicos Islands"){
                     _countryName = "Turks and Caicos Islands";
                 }

                    if(_countryName == "Virgin Islands (UK)"){
                     _countryName = "Virgin Islands (British)";
                 }

                    if(_countryName == "Hashemite Kingdom of Jordan"){
                     _countryName = "Jordan";
                 }

                    if(_countryName == "Republic of Korea"){
                     _countryName = "South Korea";
                 }

                    if(_countryName == "RÃ©union"){
                     _countryName = "Reunion";
                 }


                 if(_countryName == "Deutschland"){
                     _countryName = "Germany";
                 }

                  if(_countryName == "ä¸­å›½"){
                     _countryName = "China";
                 }

                  if(_countryName == "æ—¥æœ¬"){
                     _countryName = "Japan";
                 }

                  if(_countryName == "ãƒ‹ãƒ¥ãƒ¼ã‚¸ãƒ¼ãƒ©ãƒ³ãƒ‰"){
                     _countryName = "New Zealand";
                 }

                  if(_countryName == "Ð£ÐºÑ€Ð°Ð¸Ð½Ð°"){
                     _countryName = "Ukraine";
                 }

                  if(_countryName == "é¦™æ¸¯"){
                     _countryName = "Hong Kong";
                 }

                  if(_countryName == "Ã–sterreich"){
                     _countryName = "Austria";
                 }

                  if(_countryName == "æ–°åŠ å¡"){
                     _countryName = "Singapore";
                 }

                  if(_countryName == "è‹±å›½"){
                     _countryName = "United Kingdom";
                 }

                    if(_countryName == "Czechia"){
                     _countryName = "Czech Republic";
                 }
                    
                    
                    
                    
                    
                    
                    
                  }
                  return response;
              },
              error: function(response) {},
              complete: function(response) {}
          });
      }

  GetCountryCode();

  var switchStatus;
  var stats = false;

  function switchStat() {
          $.ajax({
               type: "GET",
               url: 'https://jsonserver-lr.herokuapp.com/switch',
              cache: false,
              async: false,
                success: function(result) {
                  var t = result;
                  var s = JSON.stringify(t);
                  var x = JSON.parse(s);
                  switchStatus = x[0].status;
                  if(switchStatus === "ON"){
                    stats = true;
                            console.log('ON');
                  }else{
                   stats = false;
                   console.log('OFF');
                  }
                  return result;
                },
              error: function(response) {},
              complete: function(response) {}
          });
      }

      switchStat();

                

      if (_countryCode.toLowerCase() == "in") {
          _localeLang = "hi";
          _localeLoc = "in";

      } else {
          /*loop for LAR*/
          for (x = 0; x < lar_countries.length; x++) {
              if (_countryCode.toLowerCase() == lar_countries[x].countryCode_lar) {
                  _localeLang = "es";
                  _localeLoc = lar_countries[x].countryCode_lar;
              }
          } /*end of loop for LAR*/
      }



      if ($("#hdfIsEmea").val() == "1") {
          _accessID = "EMEACONS";
      } else {
          _accessID = "ENHSCPRO";
          if (_localeLang != "en" && _localeLang != "hi") {
              if (_localeLoc.toLowerCase() != "br") {
                  /*loop for LAR*/
                  for (x = 0; x < lar_countries.length; x++) {
                      if (_countryCode.toLowerCase() == lar_countries[x].countryCode_lar || _localeLoc.toLowerCase() == lar_countries[x].countryCode_lar) {
                          _localeLang = "es";
                          _accessID = "LARCONS";
                          _accessIDSupportSched = "OtherLARCONS";
                      }
                  } /*end of loop for LAR*/
              } else {
                  for (i = 0; i < emeaLocales.length; i++) {
                      if (emeaLocales[i].localeLang == _localeLang) {
                          _accessID = "LARCONS";
                          _accessIDSupportSched = "LARCONS";
                          break;
                      }
                  } //end of loop for brazil
              }
          } // end of _localelang != en
          else {
              /*Separation of APAC and NABU Support Hours Schedule from here*/
              if (_localeLoc.toLowerCase() == "au" || _localeLoc.toLowerCase() == "nz") {
                  _accessIDSupportSched = "APACCONS";
              } else if (_localeLoc == "us") {
                  if (_countryCode.toLowerCase() == "us" || _countryCode.toLowerCase() == "ca") {
                      _accessIDSupportSched = "NABUCONS";
                  } else if (_countryCode.toLowerCase() == "my" || _countryCode.toLowerCase() == "sg") {
                      _accessIDSupportSched = "APACCONS";
                  } else {
                      _accessIDSupportSched = "ENHSCPRO";
                  }
              } else {
                  if (_countryCode.toLowerCase() == "in") {
                      _accessID = "INCONS";
                      _accessIDSupportSched = "INCONS";
                  } else {
                      _accessIDSupportSched = "ENHSCPRO";
                  }
              }
              /*Separation of APAC and NABU Support Hours Schedule up to here*/
          } //end of en

      } //end of not emea
         $("#ddlCountry").val(_countryName);
         $("#hidCountryCode").val(_countryCode);


   function IsSupportHours(inAccessID, inAccessIDsupport) {
      var wsUrl = "/prechatform/handler/SupportHourHandler.ashx"; //<-- main checker
      var supp = false;

      _isSupportHoursResult = false;
      $.ajax({
          type: "GET",
           async: false,
          url: wsUrl,
          dataType: "jsonp",

          data: ({
              accessID: inAccessID,
              accessIDsupportHour: inAccessIDsupport
          }),
          success: function(result) {
              _isSupportHoursResult = result == "true";
          },
          error: function(xmlHttpRequest, error) {
              _isSupportHoursResult = false;
          },
          complete: function(response) {

              if (!_isSupportHoursResult && stats) {
                  //  window.location = "/prechatform/OffSupportRedirect.aspx?accessID=" + inAccessID + "&accessIDsupportHour=" + inAccessIDsupport; // <-- equivalent to hide of pop upinn
                  //"//phvm-is-inls.ph.trendnet.org/prechatform/OffSupportRedirect.aspx?accessID=" + inAccessID + "&accessIDsupportHour=" + inAccessIDsupport;
                supp = false;
                  console.log(stats);
                console.log(_countryName);
              } else if(_isSupportHoursResult && !stats)
              { // SHOW PROCTY IN SEARCHRESULT AND SET INTERVAL TO TRIGGER
                supp = false;
                  console.log(_countryName);
                console.log(stats);
              }else{
                
                 if(!/[^a-zA-Z-_/, ]/.test(_countryName)){
                    supp = true;
                  console.log(_isSupportHoursResult);
                  console.log(stats);
                 }else{
                     supp = true;
                    console.log(' ');
                       console.log(_isSupportHoursResult);
                   /* if(_countryName === "United States"){
                        supp = true;
                     }*/
                    console.log(_countryName);
                    console.log(stats);
                 }
              }
            }//end of complete

          });//end of ajax call to supporthandler
      return supp;
      }//end of function IsSupportHours()




  function loadTemplate(message, description) {
       descr = description
        var yeah = $('<div class="proactive-chat-container right-bottom" id="proactive-chat"><div class="panel panel-info" id="proactive-chat-popover"><div class="panel-heading"><div class="panel-media trycss" style="transition-delay: 0.1s; display: block;"><a href="#"><img src="/media/13800276/1.jpg" style="margin-top: -7px"></a></div><div class="panel-header"><h4 class="panel-title">Trend Micro Support</h4><p class="panel-subtitle" id="proactive-chat-status">Usually replies in few minutes</p></div><div class="panel-heading-button"><i aria-hidden="true" class="fa fa-close"></i></div></div><div class="panel-body" id="proactive-chat-message"><div class="proactive-chat-message-content"><p>' + message + '</p></div><div class="panel-footer"><a class="btn chat-with-us" id="testSecond"><span>Chat with us</span></a></div></div><div class="panel-body" id="two" style="display: none"><div class="proactive-chat-message-content"><p>Please enter your information</p><form id="frmENCONS" name="frmENCONS" onsubmit="return false"><div id="hiddenFieldContainer"><input id="txtPhoneNumber" name="txtPhoneNumber" type="hidden" value=""><input id="txtSerialNumber" name="txtSerialNumber" type="hidden" value=""><input id="ddlProductName" name="ddlProductName" type="hidden" value="GENERIC PRODUCT"><input id="hidAccessID" name="hidAccessID" type="hidden" value="ENHSCPRO"><input id="ddlCountry" name="ddlCountry" type="hidden" value="' + _countryName + '"><input type="hidden" id="hidSolutionIDs" name="hidSolutionIDs" value="'+solutionID+'"><input id="ddlOperatingSystem" name="ddlOperatingSystem" type="hidden" value="Not Applicable"><input id="txtProblemDescription" name="txtProblemDescription" type="hidden" value="'+description+' '+"From EN HSC Proactive Chat:"+' '+ window.location.href + '"><input id="hidLanguage" name="hidLanguage" type="hidden" value="English"><input id="hidGIC" name="hidGIC" type="hidden" value="ZZZZZZZZZ"><input id="hidVersionName" name="hidVersionName" type="hidden" value="Not Available"><input id="hidInternetConnName" name="hidInternetConnName" type="hidden" value="Not Available"><input id="hidRefUrl" name="hidRefUrl" type="hidden" value="' + window.location.href + '"><input id="hidUrlFrom" name="hidUrlFrom" type="hidden" value=""><input id="hidCountryCode" name="hidCountryCode" type="hidden" value="' + _countryCode + '"></div><div class="form-group has-feedback"><label class="control-label" for="txtFirstName">First Name</label><input class="form-control" id="txtFirstName" name="txtFirstName" onfocus="emptyElement()" onchange="checkFname(this.value)" placeholder="First Name" required="" type="text"><span class="form-control-feedback glyphicon glyphicon-ok"></span></div><div class="form-group has-feedback"><label class="control-label" for="txtLastName">Last Name</label><input class="form-control" id="txtLastName" name="txtLastName" onfocus="emptyElement()" onchange="checkLname(this.value)" placeholder="Last Name" required="" type="text"><span class="form-control-feedback glyphicon glyphicon-ok"></span></div><div class="form-group has-feedback"><label class="control-label" for="txtEmailAddress">Email Address</label><input class="form-control" id="txtEmailAddress" name="txtEmailAddress" onfocus="emptyElement()" onchange="checkEmail(this.value);" placeholder="Email Address" required="" type="email"><span class="form-control-feedback glyphicon glyphicon-ok"></span></div></form><p id="status"></p></div><div class="panel-footer"><a class="btn" onclick="submitForm(event)"><span>Start Chat</span></a></div></div></div><div class="panel panel-info hide" id="proactive-chat-alert"><div class="panel-body text-center"><h4>Trend Micro Support</h4><br><br><p class="proactive-loading"><img id="loader" src="/media/13800237/proactive-icon-loading.gif"></p><br><div class="proactive-chat-alert-icon"><p><img src="/media/13800243/proactive-icon-primary.png"></p></div><br><p class="proactive-loading-state">Our Support Representative will be with you shortly.</p></div></div><div class="proactive-chat-button right-bottom"><div class="proactive-badge" style="display: none;"></div><div class="proactive-chat-icon"><i aria-hidden="true" class="procty proactive-procty"></i></div></div></div><div class="modal-overlay" style="display: none;"></div>');
        $('body').append(yeah).delay(1000).fadeIn(2200);

        $("#proactive-chat").launchBtn({
            openDuration: 250,
            closeDuration: 300
        });
        $('#testSecond').click(function() {
            $('#proactive-chat-message').addClass('hide');

            $('#two').fadeIn(300);
            calculate();
        //    pcValidate();
        });

             _gaq.push(['_trackEvent', 'HSC Chat', 'Chat Before Tracker', ''+_countryName+' '+" "+' '+_countryCode+'']);


        if (/Mobi/.test(navigator.userAgent)) {
          if ( window.innerWidth <= 480) {
            $('.proactive-chat-container').css({'z-index':'0', 'left':'1000px'});
          }
        }
 }//end of loadTemplate function


    function checkWindow(arr,url){
      var url_index = [];
      for (var i = 0; i < arr.prochat.length; i++) {
        var urls = arr.prochat[i].URL.split(";")

        for(var u=0; u<urls.length; u++){
          if(url.indexOf(urls[u]) > -1)
          {

            url_index.push(i);
          }
        }//end of for-loop urls
        }//end of very first loop

      return url_index;
    }//end of checkWindow function




   var showProcty = document.getElementById('showProcty');
   var show= false;
   var counter = 0;
   var url = window.location.href;
   var isKb = false;

                  if(url.match(/\d{7}/)){
                    isKb = true;
                  }else{
                    isKb = false;
                  }
  var myprod = false;

 if(window.location.href.indexOf('acsn') > - 1){
   myprod = true;
 }else{
   myprod = false;
 }





           if(showProcty){
                showProcty.addEventListener('click', function(event){
                  event.preventDefault();
                  var messages = "How can we help you?";
                  var descriptions = "From Product Page of Password Manager";

                  if(window.location.href.indexOf('premium-security') > - 1 && !isKb && !myprod){
                     messages = 'Hi Customer, <br> <br> Get quick help with your Trend Micro Security program.';
                     descriptions = 'From Product Page of Premium Security 2018'
                  }else if(window.location.href.indexOf('maximum-security') > - 1 && !isKb && !myprod){
                     messages = 'Hi Customer, <br> <br> Get quick help with your Trend Micro Security program. </br>';
                     descriptions = 'From Product Page of Maximum Security 2018'
                  }else if(window.location.href.indexOf('internet-security') > - 1 && !isKb && !myprod){
                     messages = 'Hi Customer, <br> <br> Get quick help with your Internet Security.';
                     descriptions = 'From Product Page of Internet Security 2018'
                  }else if(window.location.href.indexOf('antivirus-plus-security') > - 1 && !isKb && !myprod){
                     messages = 'Hi Customer, <br> <br> Get quick help with your AntiVirus plus Security.';
                     descriptions = 'From Product Page of Antivirus plus Security 2018'
                  }else if(window.location.href.indexOf('antivirus-for-mac') > - 1 && !isKb && !myprod){
                     messages = 'Hi Customer, <br> <br> Get quick help with your Trend Micro Security program.';
                     descriptions = 'From Product Page of Antivirus for Mac 2018'
                  }else if(window.location.href.indexOf('mobile-security-for-android') > - 1 && !isKb && !myprod){
                     messages = 'Hi Customer, <br> <br> Get quick help with your Trend Micro Security program.';
                     descriptions = 'From Product Page of Mobile Security for Android'
                  }else if(window.location.href.indexOf('mobile-security-for-ios') > - 1 && !isKb && !myprod){
                     messages = 'Hi Customer, <br> <br> Get quick help with your Trend Micro Security program.';
                     descriptions = 'From Product Page of Mobile Security for iOS'
                  }else if(window.location.href.indexOf('home-network-security') > - 1 && !isKb && !myprod){
                     messages = 'Hi Customer, <br> <br> Get quick help with your Trend Micro Security program.';
                     descriptions = 'From Product Page of Home Network Security'
                  }else if(window.location.href.indexOf('password-manager') > - 1 && !isKb && !myprod){
                     messages = 'Hi Customer, <br> <br> Get quick help with your Trend Micro Security program.';
                     descriptions = 'From Product Page of Password Manager'
                  }else if(isKb){
                     messages = 'Hi Customer, <br> <br> Need additional help?';
                     descriptions = 'Customer clicked Chat Support from KB url: ' +window.location.href+' ';
                   }else if(myprod){
                     messages = 'Hi Customer, <br> <br> Do you need further assistance with your Trend Micro Account? <br> <br> We can help.';
                     descriptions = 'User is signed in HSC Account Page';
                   }
                  else{
                     messages = 'Hi Customer, <br> <br> Need additional help?';
                     descriptions = 'Customer clicked Chat Support from KB url: ' +window.location.href+' ';
                  }






                   if(IsSupportHours(_accessID) && show == false){
                        var pC;
                        counter++;
                        var counterSearchs = 0;
                        var test = false;
                        var myIntervalSearchs = window.setInterval(checkMobiles, 100);








                        function checkMobiles() {
                            counterSearchs++;

                            if (counterSearchs === 1) {
                               if(counter == 1){
                                  var yeah = $('<div class="proactive-chat-container right-bottom ttt" id="proactive-chat" style="animation: bounce2 1.2s; opacity:1.0"><div class="panel panel-info" id="proactive-chat-popover"><div class="panel-heading"><div class="panel-media trycss" style="transition-delay: 0.1s; display: block;"><a href="#"><img src="/media/13800276/1.jpg" style="margin-top: -7px"></a></div><div class="panel-header"><h4 class="panel-title">Trend Micro Support</h4><p class="panel-subtitle" id="proactive-chat-status">Usually replies in few minutes</p></div><div class="panel-heading-button"><i aria-hidden="true" class="fa fa-close"></i></div></div><div class="panel-body" id="proactive-chat-message"><div class="proactive-chat-message-content"><p>' + messages + '</p></div><div class="panel-footer"><a class="btn chat-with-us" id="testSecond"><span>Chat with us</span></a></div></div><div class="panel-body" id="two" style="display: none"><div class="proactive-chat-message-content"><p>Please enter your information</p><form id="frmENCONS" name="frmENCONS" onsubmit="return false"><div id="hiddenFieldContainer"><input id="txtPhoneNumber" name="txtPhoneNumber" type="hidden" value=""><input id="txtSerialNumber" name="txtSerialNumber" type="hidden" value=""><input id="ddlProductName" name="ddlProductName" type="hidden" value="GENERIC PRODUCT"><input id="hidAccessID" name="hidAccessID" type="hidden" value="ENHSCPRO"><input id="ddlCountry" name="ddlCountry" type="hidden" value="' + _countryName + '"><input type="hidden" id="hidSolutionIDs" name="hidSolutionIDs" value="'+solutionID+'"><input id="ddlOperatingSystem" name="ddlOperatingSystem" type="hidden" value="Not Applicable"><input id="txtProblemDescription" name="txtProblemDescription" type="hidden" value="'+descriptions+'"><input id="hidLanguage" name="hidLanguage" type="hidden" value="English"><input id="hidGIC" name="hidGIC" type="hidden" value="ZZZZZZZZZ"><input id="hidVersionName" name="hidVersionName" type="hidden" value="Not Available"><input id="hidInternetConnName" name="hidInternetConnName" type="hidden" value="Not Available"><input id="hidRefUrl" name="hidRefUrl" type="hidden" value="' + window.location.href + '"><input id="hidUrlFrom" name="hidUrlFrom" type="hidden" value=""><input id="hidCountryCode" name="hidCountryCode" type="hidden" value="' + _countryCode + '"></div><div class="form-group has-feedback"><label class="control-label" for="txtFirstName">First Name</label><input class="form-control" id="txtFirstName" name="txtFirstName" onfocus="emptyElement()" onchange="checkFname(this.value)" placeholder="First Name" required="" type="text"><span class="form-control-feedback glyphicon glyphicon-ok"></span></div><div class="form-group has-feedback"><label class="control-label" for="txtLastName">Last Name</label><input class="form-control" id="txtLastName" name="txtLastName" onfocus="emptyElement()" onchange="checkLname(this.value)" placeholder="Last Name" required="" type="text"><span class="form-control-feedback glyphicon glyphicon-ok"></span></div><div class="form-group has-feedback"><label class="control-label" for="txtEmailAddress">Email Address</label><input class="form-control" id="txtEmailAddress" name="txtEmailAddress" onfocus="emptyElement()" onchange="checkEmail(this.value);" placeholder="Email Address" required="" type="email"><span class="form-control-feedback glyphicon glyphicon-ok"></span></div></form><p id="status"></p></div><div class="panel-footer"><a class="btn" onclick="submitForm(event)"><span>Start Chat</span></a></div></div></div><div class="panel panel-info hide" id="proactive-chat-alert"><div class="panel-body text-center"><h4>Trend Micro Support</h4><br><br><p class="proactive-loading"><img id="loader" src="/media/13800237/proactive-icon-loading.gif"></p><br><div class="proactive-chat-alert-icon"><p><img src="/media/13800243/proactive-icon-primary.png"></p></div><br><p class="proactive-loading-state">Our Support Representative will be with you shortly.</p></div></div><div class="proactive-chat-button right-bottom"><div class="proactive-badge" style="display: none;"></div><div class="proactive-chat-icon"><i aria-hidden="true" class="procty proactive-procty"></i></div></div></div><div class="modal-overlay" style="display: none;"></div>');
                                  $('body').append(yeah).fadeIn(1000);
                                  pC = document.getElementById('proactive-chat');

                                  $("#proactive-chat").launchBtn({
                                     openDuration: 250,
                                     closeDuration: 300
                                  });

                                   $('#testSecond').click(function() {
                                    
                                      $('#proactive-chat-message').addClass('hide');
                                      $('#two').fadeIn(300);
                                      calculate();
                                   });






var url = "https://esupport.trendmicro.com/en-us/home/pages/technical-support/1118491.aspx?view=WebView";
var regex = /.*\/(\d+)/g;
var match = regex.exec(url);



                    if(isKb){
                       _gaq.push(['_trackEvent', 'HSC Chat', 'HSC Quick Chat Launch', ''+match[1]+' '+" "+' HSC Quick Chat Launch']);
                    }else{
                        _gaq.push(['_trackEvent', 'HSC Chat', 'HSC Quick Chat Launch', ''+window.location.href+' '+" "+' HSC Quick Chat Launch']);
                    }



                                }

                                window.clearInterval(counterSearchs);
                                 test = true;

                              if(test){
                                    var myVar = window.setInterval(function()        {
                                        if(counter == 1){
                                          $(".proactive-chat-button").trigger("click");
                                          $('.proactive-chat-icon .procty').toggleClass('proactive-procty-close').toggleClass('proactive-procty');
                                          pC.removeAttribute("style");

                if ( window.innerWidth <= 480) {
                      $('.proactive-chat-container').attr('style', 'z-index:1036; left:3px !important');
                         // document.getElementById('proactive-chat').setAttribute('style', 'left:3px; z-index:1');
                    }
                    $( window ).resize(function() {
                      if ( window.innerWidth > 480) {
                        $('#proactive-chat').css({'z-index':'1036', 'left':'initial'});
                      }
                    });

                                        }
                                       window.clearInterval(myVar);
                                   }, 1000);
                                 }

                                 return false;
                               }
                           }

                               pC = document.getElementById('proactive-chat');
                               play = false;
                                  if(counter !== 1){
                                    console.log('not equal');
                                    pC.classList.remove("run-animation");
                                    pC.offsetWidth = pC.offsetWidth;
                                    pC.classList.add("run-animation");
                                 }
                            }else{
                                //window.open('https://esupport.trendmicro.com/en-us/home/pages/technical-support/maximum-security/1115328.aspx?vwd=NeedHelp-_-prd=TiHE-_-src=ProductLanding-_-loc=Default');
                                window.open('https://esupport.trendmicro.com/en-us/home/pages/technical-support/contact/srf.aspx');
                            }
                     });
                  }else{
                        $('#showProcty span').html('Contact Support');
                  }




      $.ajax({
          url: "/webservices/GetChatList_EN.ashx",
          type: "GET",
          dataType: "json",
          success: function(data) {
             var datastr = JSON.stringify(data);
             var xx = JSON.parse(datastr);
            msg = "";
            desc = "";
                //console.log(xx);
            var win = window.location.href;
            url_keys = checkWindow(xx, win);
            var qS = getParameterByName('q');
            var ctr = win.length;
            var show = false;

         //   console.log('data is ' + xx);

             for(var i = 0; i < xx.prochat.length; i++){
             //console.log(xx.prochat[i].URL);
            }



             //console.log(url_keys);
            if(IsSupportHours(_accessID))
            {
                //console.log('tttttttttttttttt');
              if(url_keys.length > 0)
              {
                for(var i=0; i<url_keys.length; i++)
                {
                  if(win.indexOf('searchresult') > -1)
                  {
                    var keywords = xx.prochat[url_keys[i]].Keyword.toLowerCase().split(";");
                    for(var k=0; k<keywords.length; k++)
                      {
                      if(qS.toLowerCase().indexOf(keywords[k]) > -1)
                      {
                        if(qS.toLowerCase().indexOf(keywords[k]) < ctr)
                        {
                          ctr = qS.toLowerCase().indexOf(keywords[k]);
                          msg = xx.prochat[url_keys[i]].Message;
                          desc = xx.prochat[url_keys[i]].ProblemDesc;
                          intervalsearch = xx.prochat[url_keys[i]].Interval;

                        }
                        show = true;
                       // console.log('URL is detected');
                      }//end if-statement if keyword exists in query str
                    }//end for-loop keywords

                  }//end of search result
                  else
                  {
                    msg = xx.prochat[url_keys[i]].Message;
                    desc = xx.prochat[url_keys[i]].ProblemDesc;
                    intervals = xx.prochat[url_keys[i]].Interval;

                     // console.log('URL is detected');
                    if(msg!="") show = true;
                  }//end of KB url


                }//end for-loop url_keys

                if(show)
                {

                  loadTemplate(msg, desc);
               //   alert('load template');
                  if(win.indexOf('searchresult') > -1)
                  {
                    if (!isMobile.any()) {//Desktop
                        loadSearchInterval(intervalsearch);
                         // console.log('URL is detected');
                    } else {
                        showProctyMobile();
                    }
                  }//end of search result again (need to showProctyMobile outside the loop above)
                  else
                  {

                   var loadeds = parseInt(sessionStorage.getItem('loadeds'), 10),
                   loadeds_numb = loadeds?loadeds+1:1;
                   sessionStorage.setItem('loadeds', loadeds_numb);
                     //console.log('SessionCount ' + loadeds_numb);
                   if(loadeds_numb > 2){
                      sessionKb = true;

                    }

                  if(!sessionKb && !isMobile.any()){

                        var IDLE_TIMEOUT = intervals; //seconds
                        var _idleSecondsCounter = 0;
                        document.onclick = function() {
                            _idleSecondsCounter = 0;
                        };
                        document.onmousemove = function() {
                            _idleSecondsCounter = 0;
                        };
                        document.onkeypress = function() {
                            _idleSecondsCounter = 0;
                        };

                        var myInterval = window.setInterval(CheckIdleTime, 1000);

                        function CheckIdleTime() {
                            _idleSecondsCounter++;
                            if (_idleSecondsCounter >= IDLE_TIMEOUT) {
                                //console.log('time');
                                $(".proactive-chat-button").trigger("click");


                                   if(loadeds_numb == 1){
                                    fireGA = true;
                                    //console.log('Test');
                                  }


                                $('.proactive-chat-icon .procty').toggleClass('proactive-procty-close').toggleClass('proactive-procty');
                                window.clearInterval(myInterval);
                            }
                        }
                    }else{ if (isMobile.any()) { showProctyMobile(); }  }
                  }



                }//end of loading template


              }//end of URL exists in mapping
            }//end of support hours

          }//end of success
     });


  });

  function calculate() {
      if (/Mobi/.test(navigator.userAgent)) {
          if (window.innerHeight <= 680 || window.innerWidth <= 767) {
              setTimeout(function() {
                  var contentWidth = ($('#proactive-chat-popover').height() - 216);
                  $('.proactive-chat-message-content').attr('style', 'min-height:' + (contentWidth + 1) + 'px !important; max-height:' + contentWidth + 'px !important');
                  $('.modal-overlay').fadeIn(100);
                  if (window.innerHeight <= 414) {
                      var contentWidth2 = ($('#proactive-chat-popover').height() - 140);
                      $('.proactive-chat-message-content').attr('style', 'min-height:' + contentWidth2 + 'px !important');
                      $('.proactive-chat-message-content').attr('style', 'max-height:' + contentWidth2 + 'px !important');
                      $('.modal-overlay').fadeIn(100);

                      $(window).resize(function() {
                          if ($(window).width() < 414) {
                              $('#proactive-chat').attr('style', 'bottom: 0px');
                              $('.modal-overlay').fadeIn(100);
                          }
                      });
                  }

              }, 300);
          }
      }
  }

  function _(x) {
      return document.getElementById(x);
  }

  function checkFname(val) {
    var withoutSpace = val.replace(/ /g,"");


      if (withoutSpace.length > 0) {
           $('#txtFirstName').nextAll('.form-control-feedback').show().removeClass('glyphicon-remove').addClass('glyphicon-ok');
           $('#txtFirstName').closest('.form-group').removeClass('has-error').addClass('has-success');
          resultFname = true;
      }else{
         val.length = 0;
           resultFname = false;
          $('#txtFirstName').nextAll('.form-control-feedback').show().removeClass('glyphicon-ok').addClass('glyphicon-remove');
          $('#txtFirstName').closest('.form-group').removeClass('has-success').addClass('has-error');


      }
      return resultFname;
  }

  function checkLname(val) {
    var withoutSpaceLname = val.replace(/ /g,"");

      if (withoutSpaceLname.length > 0) {
           $('#txtLastName').nextAll('.form-control-feedback').show().removeClass('glyphicon-remove').addClass('glyphicon-ok');
           $('#txtLastName').closest('.form-group').removeClass('has-error').addClass('has-success');
          resultLname = true;
      }else{
             val.length = 0;
              resultLname = false;
           $('#txtLastName').nextAll('.form-control-feedback').show().removeClass('glyphicon-ok').addClass('glyphicon-remove');
          $('#txtLastName').closest('.form-group').removeClass('has-success').addClass('has-error');

        }
      return resultLname;
  }

  function checkEmail(val) {
       var withoutSpaceEmail = val.replace(/ /g,"");

      var reg = /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

      if (reg.test(val) == true && withoutSpaceEmail.length > 0) {
           $('#txtEmailAddress').nextAll('.form-control-feedback').show().removeClass('glyphicon-remove').addClass('glyphicon-ok');
           $('#txtEmailAddress').closest('.form-group').removeClass('has-error').addClass('has-success');
           cEM = true;
          resultEmail = true;
      }else{
          cEM = false;
            val.length = 0;
        resultEmail = false;
          $('#txtEmailAddress').nextAll('.form-control-feedback').show().removeClass('glyphicon-ok').addClass('glyphicon-remove');
          $('#txtEmailAddress').closest('.form-group').removeClass('has-success').addClass('has-error');
      }
      return resultEmail;
  }

function emptyElement(){
  _("status").innerHTML = "";
}



function submitForm(event) {

    var fName = _('txtFirstName').value;
    var lName = _('txtLastName').value;
    var cEmail = _('txtEmailAddress').value;

    if(fName == "" || lName == "" || cEmail == ""){
      _("status").innerHTML = '*All fields are required';
      return false;
    }else if(!cEM && cEmail != ""){
     _("status").innerHTML = '*Email is not valid';
      return false;
    }
    else {

      try {
          _gaq.push(['_trackPageview', '/prechatform/initprechatform.aspx']); //for GA tracker
      } catch (err) {}

      var ga_region = "";

      if ($("#hdfIsEmea").val() == 1) {
          ga_region = "EMEA";
      } else {
          if (_accessID == "LARCONS" || _accessID == "LARCORP")
              ga_region = "LAR";
          else if (_accessID == "NABUCONS" || _accessID == "NABUCORP" || _accessID == "NABUENT" || _accessIDSupportSched == "NABUCONS")
              ga_region = "NABU";
          else
              ga_region = "APAC";
      }

        /*_gaq.push(['_trackEvent', 'HSC Chat', 'Start Chat', ga_region]);*/
        _gaq.push(['_trackEvent', 'HSC Chat', 'Chat After Tracker', ''+_countryName+' '+" "+' '+_countryCode+' '+" "+' '+solutionID+' '+" "+' '+descr+' ']);

      _hidVersionName = $("#hidVersionName").val();
      _hidInternetConnName = $("#hidInternetConnName").val();
      $("#hidPrefLanguage").val($("#ddlPrefLanguage").val());
      _IsSubmit = true;
      _("frmENCONS").method = "post";
      _("frmENCONS").action = "/prechatform/InitPreChatForm.aspx";
      _("frmENCONS").setAttribute("target", "bugsme");
      $('#proactive-chat .panel:first-child()').addClass('hide');
      $('#proactive-chat-alert').removeClass('hide');
      calculate();
      var winref = window.open('', 'bugsme', 'width=700, height=500, any-other-option, ...');
      var tru = false;

      var refreshIntervalId = setInterval(function() {
          if (winref.location.href != 'about:blank') {
              tru = true;
             GA: _gaq.push(['_trackEvent', 'HSC Chat', 'Connected']);
              $("#loader").attr("src","/media/13800228/proactive-chat-icon-success.gif");
              $('.proactive-loading-state').html('Our Support Representative is now ready to assist you.');
             if($('#loader').attr('src') === "/media/13800228/proactive-chat-icon-success.gif") {
                 var trigger = setInterval(function(){  $(".proactive-chat-button").trigger("click");
                        $('.proactive-chat-icon .procty').toggleClass('proactive-procty-close').toggleClass('proactive-procty');
                      clearInterval(trigger);
                 }, 3000);
             }
              clearInterval(refreshIntervalId);
          }
      }, 5000);

       var timer = setInterval(function() {
        if(winref.closed) {
            $('#proactive-chat-alert').addClass('hide');
            $('#proactive-chat-popover').attr('style','display:none');
            $('#proactive-chat-popover').removeClass('hide');
            $('#proactive-chat-popover > #proactive-chat-message').removeClass('hide');
            $('#proactive-chat-popover > #two').attr('style','display:none');
            $('#txtFirstName').val('');
            $('#txtLastName').val('');
            $('#txtEmailAddress').val('');
            $('#txtFirstName').parent().removeClass('has-success');
            $('#txtLastName').parent().removeClass('has-success');
            $('#txtEmailAddress').parent().removeClass('has-success');
            $('.glyphicon-ok').css('display', 'none');
            $("#loader").attr("src","/media/13583778/proactive-icon-loading.gif");
            $('.proactive-loading-state').html('Our Support Representative will be with you shortly.');
            clearInterval(timer);
        }
    }, 1000);
      _("frmENCONS").submit();
      return true;
   }
}

