/* Source and licensing information for the line(s) below can be found at https://na.panasonic.com/us/modules/contrib/addtoany/js/addtoany.js. */
(function(Drupal){'use strict';Drupal.behaviors.addToAny={attach:function(context,settings){if(context!==document&&window.a2a){a2a.init_all();}}};})(Drupal);
/* Source and licensing information for the above line(s) can be found at https://na.panasonic.com/us/modules/contrib/addtoany/js/addtoany.js. */;
/* Source and licensing information for the line(s) below can be found at https://na.panasonic.com/us/modules/contrib/datalayer/js/datalayer.js. */
(function($){Drupal.behaviors.dataLayer={langPrefixes:function langPrefixes(){var languages=Drupal.settings.dataLayer.languages,langList=[];for(var lang in languages){if(languages[lang].prefix!==''){langList.push(languages[lang].prefix);}}
return langList;},attach:function(){return}};})(jQuery);
/* Source and licensing information for the above line(s) can be found at https://na.panasonic.com/us/modules/contrib/datalayer/js/datalayer.js. */;
/* Source and licensing information for the line(s) below can be found at https://na.panasonic.com/us/modules/contrib/lazy/js/lazy.js. */
(function(Drupal){'use strict';Drupal.behaviors.lazy={attach:function(context,settings){var utils={extend:function(obj,src){Object.keys(src).forEach(function(key){obj[key]=src[key];});return obj;},once:function(selector,context){return(context||document).querySelector(selector);},loadScript:function(url){if(document.querySelectorAll('script[src="'+url+'"]').length==0){var script=document.createElement('script'),scripts=document.getElementsByTagName('script')[0];script.src=url;script.async=true;scripts.parentNode.insertBefore(script,scripts);}}};if(utils.once('body',context)){var lazysizes=settings.lazy.lazysizes||{};if(!settings.lazy.preferNative){window.lazySizesConfig=window.lazySizesConfig||{};window.lazySizesConfig=utils.extend(window.lazySizesConfig,lazysizes);if(!Object.entries){Object.entries=function(obj){var ownProps=Object.keys(obj),i=ownProps.length,resArray=new Array(i);while(i--){resArray[i]=[ownProps[i],obj[ownProps[i]]];}
return resArray;};}
var min=settings.lazy.minified?'.min':'';Object.entries(lazysizes.plugins).forEach(function(path){utils.loadScript(settings.lazy.libraryPath+'/plugins/'+path[1]+min+'.js');});utils.loadScript(settings.lazy.libraryPath+'/lazysizes'+min+'.js');}}}};})(Drupal);
/* Source and licensing information for the above line(s) can be found at https://na.panasonic.com/us/modules/contrib/lazy/js/lazy.js. */;
/* Source and licensing information for the line(s) below can be found at https://na.panasonic.com/us/core/misc/debounce.js. */
Drupal.debounce=function(func,wait,immediate){var timeout;var result;return function(){for(var _len=arguments.length,args=new Array(_len),_key=0;_key<_len;_key++){args[_key]=arguments[_key];}
var context=this;var later=function later(){timeout=null;if(!immediate){result=func.apply(context,args);}};var callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,wait);if(callNow){result=func.apply(context,args);}
return result;};};
/* Source and licensing information for the above line(s) can be found at https://na.panasonic.com/us/core/misc/debounce.js. */;
