AJS.fx={_shades:{0:"ffffff",1:"ffffee",2:"ffffdd",3:"ffffcc",4:"ffffbb",5:"ffffaa",6:"ffff99"},highlight:function(c,a){var b=new AJS.fx.Base();b.elm=AJS.$(c);b.options.duration=600;b.setOptions(a);AJS.update(b,{increase:function(){if(this.now==7){c.style.backgroundColor="#fff"}else{c.style.backgroundColor="#"+AJS.fx._shades[Math.floor(this.now)]}}});return b.custom(6,0)},fadeIn:function(c,a){a=a||{};if(!a.from){a.from=0;AJS.setOpacity(c,0)}if(!a.to){a.to=1}var b=new AJS.fx.Style(c,"opacity",a);return b.custom(a.from,a.to)},fadeOut:function(c,a){a=a||{};if(!a.from){a.from=1}if(!a.to){a.to=0}a.duration=300;var b=new AJS.fx.Style(c,"opacity",a);return b.custom(a.from,a.to)},setWidth:function(c,a){var b=new AJS.fx.Style(c,"width",a);return b.custom(a.from,a.to)},setHeight:function(c,a){var b=new AJS.fx.Style(c,"height",a);return b.custom(a.from,a.to)}};AJS.fx.Base=new AJS.Class({init:function(a){this.options={onStart:function(){},onComplete:function(){},transition:AJS.fx.Transitions.sineInOut,duration:500,wait:true,fps:50};AJS.update(this.options,a);AJS.bindMethods(this)},setOptions:function(a){AJS.update(this.options,a)},step:function(){var a=new Date().getTime();if(a<this.time+this.options.duration){this.cTime=a-this.time;this.setNow()}else{setTimeout(AJS.$b(this.options.onComplete,this,[this.elm]),10);this.clearTimer();this.now=this.to}this.increase()},setNow:function(){this.now=this.compute(this.from,this.to)},compute:function(c,b){var a=b-c;return this.options.transition(this.cTime,c,a,this.options.duration)},clearTimer:function(){clearInterval(this.timer);this.timer=null;return this},_start:function(b,a){if(!this.options.wait){this.clearTimer()}if(this.timer){return}setTimeout(AJS.$p(this.options.onStart,this.elm),10);this.from=b;this.to=a;this.time=new Date().getTime();this.timer=setInterval(this.step,Math.round(1000/this.options.fps));return this},custom:function(b,a){return this._start(b,a)},set:function(a){this.now=a;this.increase();return this},setStyle:function(c,a,b){if(this.property=="opacity"){AJS.setOpacity(c,b)}else{AJS.setStyle(c,a,b)}}});AJS.fx.Style=AJS.fx.Base.extend({init:function(c,b,a){this.parent();this.elm=c;this.setOptions(a);this.property=b},increase:function(){this.setStyle(this.elm,this.property,this.now)}});AJS.fx.Styles=AJS.fx.Base.extend({init:function(b,a){this.parent();this.elm=AJS.$(b);this.setOptions(a);this.now={}},setNow:function(){for(p in this.from){this.now[p]=this.compute(this.from[p],this.to[p])}},custom:function(a){if(this.timer&&this.options.wait){return}var c={};var b={};for(p in a){c[p]=a[p][0];b[p]=a[p][1]}return this._start(c,b)},increase:function(){for(var a in this.now){this.setStyle(this.elm,a,this.now[a])}}});AJS.fx.Transitions={linear:function(e,a,g,f){return g*e/f+a},sineInOut:function(e,a,g,f){return -g/2*(Math.cos(Math.PI*e/f)-1)+a}};script_loaded=true;
script_loaded=true;