var _gaq = _gaq || [];
_gaq.push(["_setAccount", "UA-XXXXXXXX-XX"]);
_gaq.push(["_trackPageview"]);
(function() {
    var b = document.createElement("script");
    b.type = "text/javascript";
    b.async = true;
    b.src = ("https:" == document.location.protocol ? "https://ssl" : "http://www") + ".google-analytics.com/ga.js";
    var a = document.getElementsByTagName("script")[0];
    a.parentNode.insertBefore(b, a)
})();



function _(x) {
    return document.getElementById(x);
}

window.__ = function(selector) {
    return document.querySelector(selector);
};

axios.post('/webservices/getaccountinfo.ashx?o=all')
    .then(function(response) {
        var pPanel = __('.product-panel');
        var panelHead = __("#pLshow div:nth-child(2)");
        var userLogged = false;

        $(".btn-login", parent.document).on("classChange", function() {
            if ($('.btn-login', parent.document).hasClass('default')) {} else if (($('.btn-login', parent.document).hasClass('logged'))) {}
        });

        if (response.data.Email !== undefined && response.data !== "{}") {
            userLogged = true;
            document.cookie = "withSession=true; path=/; domain=.trendmicro.com";
            $("#pLshow", parent.document).addClass("logged").trigger('classChange');
            __('#pLshow').classList.remove('loading', 'disabled', 'default');
            $("#pLshow").removeClass("disabled");
            isUserLogged(response.data.FirstName, response.data.LastName, response.data.Email, pPanel, response.data.products);
            return false;
        }

        $("#pLshow", parent.document).addClass("default").trigger('classChange');
        __("#pLshow", parent.document).classList.remove("loading", "logged", "disabled");
        $("#pLshow").removeClass("disabled");

        if (!userLogged) {
            isUserLoggedOut(pPanel);
        }
    }).catch(function(error) {
        return Promise.reject(error);
    });



function isUserLogged(fname, lname, email, pPanel, products) {

    var allExpired = false;
    var notExp = false;

    _('panel-account').innerHTML = panelHeader(fname, email);
    __(".btn-login-container > a > div:nth-child(2)").innerHTML = "<b>" + fname + " " + lname + "</b>" + "<br>" + "<span style='color: #777777;'>" + email + "</span>";
    __(".btn-login-container > a").classList.add('logged');
    __('#pLshow', parent.window.document).setAttribute('href', ';;javascript');

    //Toggle Menu
    __('.btn-login-container a').addEventListener('click', toggleMenu.bind());

    //Toggle left and right
    if (pPanel.style.right == "0px") {
        pPanel.style.right = "-350px";
    }
    pPanel.style.right = "0px";

    //Output items initially before sorting
    _('productList').innerHTML = products.map(productLists).join('');

    var li = document.querySelectorAll('.product-list li');
    var xyz = 1000;
    for (var i = 0; i < li.length; i++) {
        li[i].classList.add('newProjectModalSlideIn');
        li[i].setAttribute('style', 'animation-duration:' + xyz + 'ms');
        var b = li[i];
        xyz += 500;

        var pidSlice = li[i].dataset.sn;
        var slicepid = pidSlice.slice(0, 1);

        if (slicepid !== "X" && slicepid !== "P" && slicepid !== "A") {
            li[i].classList.add('standalone');
            li[i].children[0].classList.add('standalones');
        }


        if (li[i].children[0].classList.contains('standalones')) {
            li[i].children[0].remove();
        }

        //   if(li[i].classList.contains('standalone') && li[i].dataset.rdays < 10){
        //    li[i].remove();
        //      }

        if (li[i].dataset.rdays < 1) {
            $(".product").sort(sort_li).appendTo('#productList');

            function sort_li(a, b) {
                return b.dataset.rdays - a.dataset.rdays;
            }
            li[i].setAttribute('style', 'display:none');
            li[i].classList.add('expired');
            // li[i].classList.remove('standalone');
            notExp = true;
        }

        // append again to the list
        $(".product").sort(sort_li).appendTo('#productList');

        function sort_li(a, b) {
            return a.dataset.arrange - b.dataset.arrange || b.dataset.rdays - a.dataset.rdays;
        }


        var selector = 'li:not(.expired)[data-arrange]';
        var array = Array.prototype.slice.call(document.querySelectorAll(selector));
        var max = Math.max.apply(Math, array.map(function(item) {
            return item.dataset.arrange;
        }));

        $('.product-list li[data-arrange]:not(".expired")').filter(function() {
            return $(this).data('arrange') == max;
        }).last().after($("<div id='other' class='others'>Other Products</div>"));

        let expiredLength = document.querySelectorAll('.danger').length - document.querySelectorAll('.product-list li').length;
        let productsLength = document.querySelectorAll('.product-list li').length;
        let noexpiredLength = document.querySelectorAll('.danger').length;

        if (expiredLength === productsLength) {
            //  _('others').setAttribute('style', 'display:block');
            if (li[i].classList.contains("expired")) {
                li[i].setAttribute('style', 'display:block');
                __('.switch').parentNode.classList.add('hide');
                allExpired = true;
            }
            li[i].setAttribute('style', 'animation-duration:' + xyz + 'ms');
        }
        if (noexpiredLength == 0) {
            __('.switch').parentNode.classList.add('hide');
        }

    }


    Element.prototype.appendAfter = function(element) {
        element.parentNode.insertBefore(this, element.nextSibling);
    }, false;


    if (document.querySelector("#productList div#other:first-child") !== null) { document.querySelector("#productList div#other:first-child").remove();}


    //IF PRODUCTS ARE ALL EXPIRED AND HAS STANDALONE ADD OTHER PRODUCTS LABEL BELOW AND ADD STANDALONE PRODUCTS UNDERNEATH
    var selectorex = 'li.expired';
    var array = Array.prototype.slice.call(document.querySelectorAll(selectorex));
    var maxs = Math.min.apply(Math, array.map(function(item) {
        return item.dataset.rdays;
    }));

    $('.product-list li.expired').filter(function() {
        return $(this).data('rdays') == maxs;
    }).last().after($("<div id='others' class='otherss'>Other Products</div>"));


    if (allExpired) {
        _('others').style.display = "block";
    } else {
        _('others').style.display = "none";
    }

    var standAloneLength = document.querySelectorAll('.standalone').length;

    if (standAloneLength == 0 && !allExpired) {
        _('other').style.display = "none";
    }

    document.querySelectorAll('.product').forEach(function(item) {
        if (item.classList.contains('standalone') && item.classList.contains('expired')) {
            item.appendAfter(_('others'));
        } else if (item.classList.contains('standalone') && !item.classList.contains('expired')) {
            item.appendAfter(_('other'));
        }
    });

    __('.slider').addEventListener('click', showExpired);

}


function showExpired() {
    var xyz = 1000;
    var li = document.querySelectorAll('.product-list li');
    var showExp = false;
    var standAloneLength = document.querySelectorAll('.standalone').length;
    var standAlone = document.querySelectorAll('.standalone');
    var expire = document.querySelectorAll('.expired').length;

    for (var i = 0; i < li.length; i++) {
        var prodItems = li[i];
        prodItems.classList.add('newProjectModalSlideIn');
        xyz += 100;

        if (prodItems.style.display == "none") { // show expired
            prodItems.setAttribute('style', 'display:block; animation-duration:' + xyz + 'ms');
            showExp = true;

            if (prodItems.classList.contains('expired') && prodItems.classList.contains('standalone')) {
                _('others').setAttribute('style', 'display:block');
                _('other').setAttribute('style', 'display:none');
            } else {
                _('other').setAttribute('style', 'display:none');
                showExp = true;
            }


            if (!prodItems.classList.contains('expired') && prodItems.classList.contains('standalone')) {
                _('other').setAttribute('style', 'display:block');
                _('others').setAttribute('style', 'display:none');
            }

        } else {
            prodItems.setAttribute('style', 'display:none; animation-duration:' + xyz + 'ms')

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
            } else {
                parent.window.location = productMap[pl.dataset.pid][pl.dataset.skuindi].productPageLink + "/home.aspx" + productMap[pl.dataset.pid][pl.dataset.skuindi].panelPageLinkGA;
            }

        } else if (pl.dataset.maxseat > 1) {
            if (pl.dataset.skuindi == "BBY") {
                parent.window.location = productMap[pl.dataset.pid][pl.dataset.skuindi].productPageLink;
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
            } else {
                parent.window.location = "/en-us/home/index.aspx" + productMap[pl.dataset.pid][pl.dataset.skuindi].panelPageLinkGA;
            }

        } else if (pl.dataset.maxseat > 1) {
            if (pl.dataset.skuindi == "BBY") {
                parent.window.location = productMap[pl.dataset.pid][pl.dataset.skuindi].productPageLink;
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
    //  document.querySelector('#pLshow', parent.window.document).setAttribute('href', '#PopLogin');
    document.cookie = "withSession=false; path=/; domain=.trendmicro.com";
    $("#pLshow", parent.document).addClass("default").trigger('classChange');
    __("#pLshow", parent.document).classList.remove("loading");
    __("#pLshow", parent.document).classList.remove("logged");
    __("#pLshow", parent.document).classList.remove("disabled");

    if (pPanel.style.right == "0px") {
        pPanel.style.right = "-350px";
    }
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


function triggerLoginModal() {
    var pls = document.getElementById('pLshow');
    if (window.location.href.indexOf("sign=yes") > -1) {
        pls.click();

    }


}

window.addEventListener("load", triggerLoginModal);

/* Reserve for customization
function isUserLogged(response){
    var pPanel = document.querySelector('.product-panel');
    var panelHead = document.querySelector("#pLshow div:nth-child(2)");
    var userLogged = false;

    console.log()


  if(response.data.Email !== null){
     console.log(response.data.Email);
      userLogged = true;
    isUserLogged(response.data.FirstName, response.data.LastName, response.data.Email);
  }
  console.log('pass function outside');
}

function post(url){
    return axios.post(url)
}

post('/webservices/getaccountinfo.ashx?o=all')
.then(isUserLogged)
.catch(function (error) {
    //your catch logic
});

 */

​
