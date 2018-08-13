 function prodWidgetPanel(pids, remainDays, seatRemain, prodName, serialNum, autoRenew, isPremiumSupp, sku){
  

    this.pids = pids;
    this.remainDays = remainDays;
    this.seatRemain = seatRemain;
    this.prodName = prodName;
    this.serialNum = serialNum;
    this.autoRenew = autoRenew;
    this.isPremiumSupp = isPremiumSupp;
    this.sku = sku;

  
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
      if (remainDays >= 30) {
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
              return true;
          }
        }
    }
       return false; 
    },
   this.maxProd = function(){
     if(this.isMoreThan30(remainDays)){
       if(this.latestVersion(pids)){
          if(this.licenseRemaining(seatRemain)){
            return true;          
            }
        }
    }
   return false;
   },
   this.looksGood = function(){
     if(this.latestVersion(pids)){
       if(this.isMoreThan30(remainDays)){
            if(this.licenseUsed(seatRemain)){
              return true;           
             }
          }
    }
     return false;  
   },
   this.getTheLatest = function(){
    if(this.isMoreThan30(remainDays)){
          if(!this.latestVersion(pids)){
          if(this.licenseUsed(seatRemain) || this.licenseRemaining(seatRemain)){
          return true;    
        }
     }
  }  
   return false;
   },
  this.aboutTo = function(){
     if(this.latestVersion(pids) || !this.latestVersion(pids)){
      if(this.isLessThan30(remainDays)){
        if(this.licenseUsed(seatRemain) || this.licenseRemaining(seatRemain)){
          return true;     
        }
      }
  }
   return false;
     
  }
   
}  

prodWidgetPanel.prototype.expired = function(imageClass, pids, remainDays, onOff, seatRemain, prodName, serialNum, autoRenew, isPremiumSupp, btnMsg, isMatch, sku){

  return true;
}  
  
  
  
  
 
     
     
