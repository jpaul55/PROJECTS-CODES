         
function prodWidget(imageClass, pids, remainDays, onOff, seatRemain, prodName, serialNum, autoRenew, isPremiumSupp, btnMsg, sku, notifWarning, notifSuccess, notifExpired, notifExpiredGetHelp, notifInfo, isPrem, notifAboutTo, notifAboutGetHelp){
  
    this.imageClass = imageClass;
    this.pids = pids;
    this.remainDays = remainDays;
    this.onOff = onOff;
    this.seatRemain = seatRemain;
    this.prodName = prodName;
    this.serialNum = serialNum;
    this.autoRenew = autoRenew;
    this.isPremiumSupp = isPremiumSupp;
    this.btnMsg = btnMsg;
    this.isMatch = isMatch;
    this.sku = sku;
    this.notifWarning = notifWarning;
    this.notifSuccess = notifSuccess;
    this.notifExpired = notifExpired;
    this.notifExpiredGetHelp = notifExpiredGetHelp;
    this.notifInfo = notifInfo;
    this.isPrem = isPrem;
    this.notifAboutTo = notifAboutTo;
    this.notifAboutGetHelp = notifAboutGetHelp;
  
    this.latestVersion = function(){
      if (pids == "TEC0" || pids == "TBC0" || pids == "MC80" || pids == "TIC0") {
      return true;
     }
      return false;
    },
    this.isLessThan30 = function(){
       if (remainDays < 30 && remainDays >= 1) {
         return true;
       } 
      return false;
    },
    this.licenseRemaining = function(){
       if (seatRemain > 0) {
         return true;
       }
       return false;
     },
    this.licenseUsed = function(){
     if (seatRemain === 0) {
      return true;
     }
     return false;
   },
    this.isMoreThan30 = function(){
      if (remainDays > 30) {
        return true;
      }
      return false;
   },
   this.isExpired = function(){
     if (remainDays <= 0) {
      return true;
     }
     return false;
    }
   this.ohOhCheck = function(){
        if (this.isExpired(remainDays)) {
          if(this.latestVersion(pids) || !this.latestVersion(pids)){
           if(this.licenseUsed(seatRemain) || this.licenseRemaining(seatRemain)){
              return true, '<h2 style="text-align:center; margin:0">Hi, below are your product info</h2><div class="sn-widget-pp sn-widget-pp-danger"><div class="sn-widget-pp-content"><div class="sn-widget-pp-heading">Oh-oh! check your protection. <a href ="'+notifExpired+'" class="pull-right pull-right btn btn-outline-light btn-sm" target="_blank" style="margin-top:5px">Learn more</a></div><div class="sn-widget-pp-body"><div class="row"><div class="col-xs-12 col-sm-3 col-md-3"><div class="apProduct"><div class="'+imageClass+'">&nbsp;</div></div></div><div class="col-xs-12 col-sm-9 col-md-9"><h3 class="sn-widget-pp-product">'+prodName+'</h3><ul class="list-unstyled"><li><span><b>Serial Number:</b></span> <span>'+serialNum+'</span></li></ul><div class="tag-list"><div class="tag tag-danger"><div class="tag-section"><span class="tag-heading" style="font-size:27px">'+Math.abs(remainDays)+'</span></div><span class="tag-subtitle">Days Expired</span></div><div class="tag tag-outline-'+onOff+'"><div class="tag-section"><span class="tag-heading">'+autoRenew+'</span></div><span class="tag-subtitle">Auto-Renew</span></div><div class="tag tag-warning"><div class="tag-section"><span class="tag-heading">'+seatRemain+'</span></div><span class="tag-subtitle">Seats Left</span></div><div class="tag tag'+isPremiumSupp+'-info" id="premLink"><div class="tag-section"><span class="tag-heading"><i class="fa fa-support" aria-hidden="true" style="margin-top:15px"></i></span></div><span class="tag-subtitle">'+isPrem+'</span></div></div><button onclick="checkLogged(event, isMatch, isSerial, pids, sku, pSupp, maxS);" class="btn btn-default btn-block btns">'+btnMsg+'</button></div></div></div></div></div>'; 
          }
        }
    }
       return false; 
    },
   this.maxProd = function(){
     if(this.isMoreThan30(remainDays)){
       if(this.latestVersion(pids)){
          if(this.licenseRemaining(seatRemain)){
             return true, '<h2 style="text-align:center; margin:0">Hi, below are your product info</h2><div class="sn-widget-pp sn-widget-pp-warning"><div class="sn-widget-pp-content"><div class="sn-widget-pp-heading">Maximize Your Protection <a href ="'+notifWarning+'" class="pull-right pull-right btn btn-outline-light btn-sm" target="_blank" style="margin-top:5px">Learn more</a></div><div class="sn-widget-pp-body"><div class="row"><div class="col-xs-12 col-sm-3 col-md-3"><div class="apProduct"><div class="'+imageClass+'">&nbsp;</div></div></div><div class="col-xs-12 col-sm-9 col-md-9"><h3 class="sn-widget-pp-product">'+prodName+'</h3><ul class="list-unstyled"><li><span><b>Serial Number:</b></span> <span>'+serialNum+'</span></li></ul><div class="tag-list"><div class="tag tag-success"><div class="tag-section"><span class="tag-heading">'+Math.abs(remainDays)+'</span></div><span class="tag-subtitle">More Days</span></div><div class="tag tag-outline-'+onOff+'"> <div class="tag-section"> <span class="tag-heading">'+autoRenew+'</span> </div><span class="tag-subtitle">Auto-Renew</span></div><div class="tag tag-warning"><div class="tag-section"><span class="tag-heading">'+seatRemain+'</span></div><span class="tag-subtitle">Seats Left</span></div><div class="tag tag'+isPremiumSupp+'-info" id="premLink"><div class="tag-section"><span class="tag-heading"><i class="fa fa-support" aria-hidden="true" style="margin-top:15px"></i></span></div><span class="tag-subtitle">'+isPrem+'</span></div></div><button data-pid="'+pids+'" data-psupport="'+isPremiumSupp+'" data-sku="' + sku  + '" onclick="checkLogged(event, isMatch, isSerial, pids, sku, pSupp, maxS);" class="btn btn-default btn-block btns">'+btnMsg+'</button></div></div></div></div></div>'; 
          }
        }
    }
   return false;
   },
   this.looksGood = function(){
     if(this.latestVersion(pids)){
       if(this.isMoreThan30(remainDays)){
            if(this.licenseUsed(seatRemain)){
               return true, '<h2 style="text-align:center; margin:0">Hi, below are your product info</h2><div class="sn-widget-pp sn-widget-pp-success"><div class="sn-widget-pp-content"><div class="sn-widget-pp-heading">Looking Good! All your devices are protected. <br /> </span>Click <a href ="'+notifSuccess+'" target="_blank" style="color:#ffffff; text-decoration:underline;">Learn more </a> to find out how to protect more device. </span></div><div class="sn-widget-pp-body"><div class="row"><div class="col-xs-12 col-sm-3 col-md-3"><div class="apProduct"><div class="'+imageClass+'">&nbsp;</div></div></div><div class="col-xs-12 col-sm-9 col-md-9"><h3 class="sn-widget-pp-product">'+prodName+'</h3><ul class="list-unstyled"><li><span><b>Serial Number:</b></span> <span>'+serialNum+'</span></li></ul><div class="tag-list"><div class="tag tag-success"><div class="tag-section"><span class="tag-heading">'+Math.abs(remainDays)+'</span></div><span class="tag-subtitle">More Days</span> </div><div class="tag tag-outline-'+onOff+'"> <div class="tag-section"><span class="tag-heading">'+autoRenew+'</span> </div><span class="tag-subtitle">Auto-Renew</span></div><div class="tag tag-warning"><div class="tag-section"><span class="tag-heading">'+seatRemain+'</span></div><span class="tag-subtitle">Seats Left</span></div><div class="tag tag'+isPremiumSupp+'-info" id="premLink"><div class="tag-section"><span class="tag-heading"><i class="fa fa-support" aria-hidden="true" style="margin-top:15px"></i></span></div><span class="tag-subtitle">'+isPrem+'</span></div></div><button onclick="checkLogged(event, isMatch, isSerial, pids, sku, pSupp, maxS);" class="btn btn-default btn-block btns"> '+btnMsg+' </button></div></div></div></div></div>'; 
            }
          }
    }
     return false;  
   },
   this.getTheLatest = function(){
    if(this.isMoreThan30(remainDays)){
          if(!this.latestVersion(pids)){
          if(this.licenseUsed(seatRemain) || this.licenseRemaining(seatRemain)){
             return true, '<h2 style="text-align:center; margin:0">Hi, below are your product info</h2><div class="sn-widget-pp sn-widget-pp-info"><div class="sn-widget-pp-content"><div class="sn-widget-pp-heading">Get the Latest Protection for Free! <a href ="'+notifInfo+'" class="pull-right btn btn-outline-light btn-sm" target="_blank" style="margin-top:5px">Learn more</a></div><div class="sn-widget-pp-body"><div class="row"><div class="col-xs-12 col-sm-3 col-md-3"><div class="apProduct"><div class="'+imageClass+'">&nbsp;</div></div></div><div class="col-xs-12 col-sm-9 col-md-9"><h3 class="sn-widget-pp-product">'+prodName+'</h3><ul class="list-unstyled"><li><span><b>Serial Number:</b></span> <span>'+serialNum+'</span></li></ul><div class="tag-list"><div class="tag tag-success"><div class="tag-section"><span class="tag-heading">'+Math.abs(remainDays)+'</span></div><span class="tag-subtitle">More Days</span></div><div class="tag tag-outline-'+onOff+'"><div class="tag-section"> <span class="tag-heading">'+autoRenew+'</span> </div><span class="tag-subtitle">Auto-Renew</span></div><div class="tag tag-warning"><div class="tag-section"><span class="tag-heading">'+seatRemain+'</span></div><span class="tag-subtitle">Seats Left</span></div><div class="tag tag'+isPremiumSupp+'-info" id="premLink"><div class="tag-section"><span class="tag-heading"><i class="fa fa-support" aria-hidden="true" style="margin-top:15px"></i></span></div><span class="tag-subtitle">'+isPrem+'</span></div></div><button onclick="checkLogged(event, isMatch, isSerial, pids, sku, pSupp, maxS);" class="btn btn-default btn-block btns"> '+btnMsg+' </button></div></div></div></div></div>'; 
          }
     }
  }  
   return false;
   },
  this.aboutTo = function(){
     if(this.latestVersion(pids) || !this.latestVersion(pids)){
      if(this.isLessThan30(remainDays)){
        if(this.licenseUsed(seatRemain) || this.licenseRemaining(seatRemain)){
           return true,  '<h2 style="text-align:center; margin:0">Hi, below are your product info</h2><div class="sn-widget-pp sn-widget-pp-red"><div class="sn-widget-pp-content"><div class="sn-widget-pp-heading">Your protection is about to expire. <a href ="'+notifAboutTo+'" class="pull-right pull-right btn btn-outline-light btn-sm" target="_blank" style="margin-top:5px">Learn more</a></div></div><div class="sn-widget-pp-body"><div class="row"><div class="col-xs-12 col-sm-3 col-md-3"><div class="apProduct"><div class="'+imageClass+'">&nbsp;</div></div></div><div class="col-xs-12 col-sm-9 col-md-9" style="text-align:center"><h3 class="sn-widget-pp-product">'+prodName+'</h3><ul class="list-unstyled"><li><span><b>Serial Number:</b></span> <span>'+serialNum+'</span></li></ul><div class="tag-list"><div class="tag tag-red"><div class="tag-section"><span class="tag-heading">'+Math.abs(remainDays)+'</span></div><span class="tag-subtitle">Days Left</span></div><div class="tag tag-outline-'+onOff+'"><div class="tag-section"><span class="tag-heading">'+autoRenew+'</span></div><span class="tag-subtitle">Auto-Renew</span></div><div class="tag tag-warning"><div class="tag-section"><span class="tag-heading">'+seatRemain+'</span></div><span class="tag-subtitle">Seats Left</span></div><div class="tag tag'+isPremiumSupp+'-info" id="premLink"><div class="tag-section"><span class="tag-heading"><i class="fa fa-support" aria-hidden="true" style="margin-top:15px"></i></span></div><span class="tag-subtitle">'+isPrem+'</span></div></div><button onclick="checkLogged(event, isMatch, isSerial, pids, sku, pSupp, maxS);" class="btn btn-default btn-block btns">'+btnMsg+'</button></div></div></div></div></div>'; 
          }
      }
  }
   return false;
     
  }
   
}  

prodWidget.prototype.expired = function(imageClass, pids, remainDays, onOff, seatRemain, prodName, serialNum, autoRenew, isPremiumSupp, btnMsg, isMatch, sku){

  return true;
}  
  
  
  
  
 
     
     
​
