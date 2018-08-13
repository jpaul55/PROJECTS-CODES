var routerList = (function () {
  
  'use strict';
  
  //Polyfill for element matches
  if (Element && !Element.prototype.matches) {
    var proto = Element.prototype;
    proto.matches = proto.matchesSelector ||
        proto.mozMatchesSelector || proto.msMatchesSelector ||
        proto.oMatchesSelector || proto.webkitMatchesSelector;
  }
  
  var getRouterBrandModel= {};
  var removeClass;
  var element = {};
  var hr;
  var brand;
  var model;  
  var comTrueModeTrue;
  var comTrueModeFalse;
  var comFalseExist;
  var _;
  
  _ = function(x){
    return document.getElementById(x);
  }
    
  removeClass = function(x){
    return document.getElementById(x).removeAttribute('class');
  }
      
  comTrueModeTrue = function(manu, bmodel, kmsolution) {
    return '<div class="section-body">' + 
        '<div class="panel panel-success compatible-icon">' + 
           '<div class="panel-body">' + '<h3 class="result-title display-3">' + manu + ' ' + bmodel + '</h3>' + 
              kmsolution + '</div>' + 
       '</div>' + '</div>' + '</div>'; 
  };
  
  comTrueModeFalse = function(manu, bmodel, kmsolution) {
     GA: _gaq.push(['_trackEvent', 'CONS | Router Search', 'Show Result', 'Brand: ' + manu+ ' , Model: ' + bmodel + ' | Compatible']);
    return '<div class="section-body">' + 
        '<div class="panel panel-success compatible-icon">' + 
           '<div class="panel-body">' + '<h3 class="result-title display-3">' + manu + ' ' + bmodel + '</h3>' + 
               kmsolution + '</div>' + 
       '</div>' + '</div>' + '</div>';
  };
       
  comFalseExist = function(manu, bmodel, kmsolution) {
    GA: _gaq.push(['_trackEvent', 'CONS | Router Search', 'Show Result', 'Brand: ' + manu + ' , Model: ' + bmodel + ',  | Incompatible']);
    return '<div class="section-body">' + 
      '<div class="panel panel-default incompatible-icon">' + 
         '<div class="panel-body">' + '<h3 class="result-title display-3">' + manu + ' ' + bmodel + '</h3>' + 
            '<p>This router is not supported by Trend Micro Home Network Security. Please connect your Home Network Security Station to a compatible router.' +
            '<p>For the list of supported routers, refer to this link: <a href="/en-us/home/pages/technical-support/home-network-security/list-of-router.aspx">List of Supported Routers <i aria-hidden="true" class="fa fa-chevron-circle-right"></i></a>' +
            '</p>' + 
            '<p></p>' + '</div>' + '<div class="panel-footer"></div>' + 
     '</div>' + '</div>' + '</div>';
   }
      
 document.addEventListener('click', function (event) {
    if (event.target.matches('.modal_toggle')) {
      model = event.target.dataset.model;
      _('result-section').classList.add('initializing_content');
      axios.post("/webservices/getrouter.ashx")
        .then(function(response) {   
          response.data.routers.map(function(item){
             if(model == item.Model){
                if (item.Compatible === "True" && item.ComMode === "True") {
                  removeClass('result-section');
                  _('result-section').innerHTML = comTrueModeTrue(item.Brand, item.Model, item.Solution);
                } else if (item.Compatible === "True" && item.ComMode === "False") {
                  removeClass('result-section');
                  _('result-section').innerHTML= comTrueModeFalse(item.Brand, item.Model, item.Solution); 
                } else if (item.Compatible === "False" && item.ComMode === "False") {
                  removeClass('result-section');
                  _('result-section').innerHTML =  comFalseExist(item.Brand, item.Model, item.Solution); 
                } 
             }
         })
       });
       _('result-section').style.display = "block";
       modal.openModal();
    }
    
    if (event.target.matches('.tm_modal_wrapper') || event.target.matches('.tm_modal_close') || event.target.matches('.dismiss_modal')) {
        _('result-section').innerHTML = "";
        modal.closeModal();
    }
    
  }, false);
})();



/*var routerSuggestion = (function () {
  
  'use strict';
  
  var rf = document.getElementById('router-feedback');
  var iRemain = document.getElementById('inputRemain');
  var iR;
  var txtarea;
  var button;
  var maxAmount = 150;
 
  txtarea = document.createElement('textarea');
  txtarea.setAttribute('rows', '3');
  txtarea.setAttribute('name', 'routerFeed');
  txtarea.className = "form-control";
  txtarea.setAttribute('id', 'routerSuggestion');
  rf.appendChild(txtarea);
  
  iR = document.createElement('input');
  iR.setAttribute('id', 'charRemaine');
  iR.setAttribute('readonly', 'true');
  iR.setAttribute('type', 'text');
  iR.setAttribute('maxlength', '3');
  iR.setAttribute('size', '3');
  iR.className = "text-center";
  iR.setAttribute('value', '0');
  iRemain.appendChild(iR);
  
  button = document.getElementById('rfBtn');
  
  var _ = function(x){
    return document.getElementById(x);
  }
  
  var feedBack = _('routerSuggestion').value;   
      
  function countText(){
    if ( _('routerSuggestion').value.length > 1) {button.removeAttribute('disabled');}else{ button.setAttribute('disabled', true); }
      
    if ( _('routerSuggestion').value.length > maxAmount) {
        _('routerSuggestion').value = _('routerSuggestion').value.substring(0, maxAmount);
    } else {
        _('charRemaine').value = _('routerSuggestion').value.length;
    }
  }
          
  function submitFeed(){
    console.log(_gaq.push(['_trackEvent', 'CONS | Router Search', 'Suggestion Routers', '"this is a test"']));
     GA: _gaq.push(['_trackEvent', 'CONS | Router Search', 'Suggestion Routers', '' + feedBack + '']);
     document.querySelector('.contain').innerHTML = '<div class="alert alert-success"><div class="alert-content">Thank you! Feedback has been submitted.</div></div>';   
  }
       
  txtarea.addEventListener('keyup', countText);
  button.addEventListener('click', submitFeed);
  
})(); */

var others = false;
var change = false;
    
// template for feedback dropdown routers
if(document.querySelector('#feedback_select_brand_template') !== null){
var feedback_select_brand_template = document.querySelector('#feedback_select_brand_template');
feedback_select_brand_template.innerHTML = '<div class="flex_form_container">' +
  '<div class="flex_form">' +
      '<div class="form-group">' +
        '<select id="feedback_select_brand" name="feedback_select_brand" onchange="selectOthers(event)" class="form-control choose_brand">' +
          '<option value="select" selected disabled>Select Brand</option>' +
          '<option value="DLINK">D-LINK</option>' +
          '<option value="FRITZ">FRITZ</option>' +
          '<option value="HUAWEI">HUAWEI</option>' +
          '<option value="IINET">IINET</option>' +
          '<option value="LINKSYS">LINKSYS</option>' +
          '<option value="NETCOMMWIRELESS">NETCOMM WIRELESS</option>' +
          '<option value="NETGEAR">NETGEAR</option>' +
          '<option value="feedback_others">Others...</option>' +
        '</select>' +
     '</div>' +
 ' </div>' +
  '<div class="flex_form">' +
      '<div class="form-group">' +
        '<input type="text" class="form-control choose_brand" id="brand" placeholder="Brand / Provider">' +
      '</div>' +
  '</div>' +
  '<div class="flex_form">' +
    '<div class="input-group">' +
      '<input type="text" class="form-control" onkeydown="enableBtn(event)" id="model" placeholder="Model Number">' +
      '<span class="input-group-btn">' +
        '<button id="submitRouter" class="btn btn-primary" type="button" onclick="getModelBrand(event)" disabled>Submit</button>' +
      '</span>' +
    '</div>' +
  '</div>' +
'</div>';
}

function selectOthers(event) {
    var routerlistFeedback_detail = document.querySelector('.routerlistFeedback_detail');
    if(event.target.value === 'feedback_others') {
      others = true;
      change = true;
     document.querySelector('.routerlistFeedback_detail').className = 'routerlistFeedback_detail show_others_form';
    } else {
       change = true;
      routerlistFeedback_detail.className = 'routerlistFeedback_detail';
    }
}

function enableBtn(event){
  
  if(event.target.value.length > 1 && change){
   document.getElementById('submitRouter').removeAttribute('disabled');
  }else{
   document.getElementById('submitRouter').setAttribute('disabled', 'true');
  }
  
}

function getModelBrand(event){
  var mod = document.getElementById('model').value;
  var brand = document.getElementById('brand').value;
  var feedSelect = document.getElementById('feedback_select_brand').value;

  if(!others){
     // _gaq.push(['_trackEvent', 'CONS | Router Search', 'Suggestion Routers', ''+feedSelect+' '+" "+' '+mod+' '+" "+' '+brand +'']);
      GA: _gaq.push(['_trackEvent', 'CONS | Router Search', 'Suggestion Routers']);
      document.getElementById('feedback_select_brand_template').innerHTML = '<div class="alert alert-success"><div class="alert-content">Thank you for your feedback. Please check this page from time to time if your router model has been added to the list.</div></div>';  
      console.log( _gaq.push(['_trackEvent', 'CONS | Router Search', 'Suggestion Routers', '' + feedSelect + '', '' + mod+ '', '' + brand + '']));
      
  }else{
      document.getElementById('feedback_select_brand_template').innerHTML = '<div class="alert alert-success"><div class="alert-content">Thank you for your feedback. Please check this page from time to time if your router model has been added to the list.</div></div>';  
    //  _gaq.push(['_trackEvent', 'CONS | Router Search', 'Suggestion Routers', '' + feedSelect + '', '' + mod+ '', '' + brand + '']);
   // _gaq.push(['_trackEvent', 'CONS | Router Search', 'Suggestion Routers', '' + feedSelect + ''+" "+' ' + mod+ ']);
      GA: _gaq.push(['_trackEvent', 'CONS | Router Search', 'Suggestion Routers']);
  //_gaq.push(['_trackEvent', 'CONS | Router Search', 'Suggestion Routers', ''+feedSelect+' '+" "+' '+mod+' '+" "+' '+brand +'']);
      console.log( _gaq.push(['_trackEvent', 'CONS | Router Search', 'Suggestion Routers', '' + feedSelect + '', '' + mod+ '', '' + brand + '']));
  }
}
