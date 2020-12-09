import Vue from 'vue'
const path = require('path')
const moment = require('moment')
const mimetype = ["image/jepg", "image/png", "image/jpg", "image/svg+xml"]
Vue.mixin({
    methods:{
        setCookie(name,value,days) {
            value = JSON.stringify(value)
            var expires = "";
            if (days) {
                var date = new Date();
                date.setTime(date.getTime() + (days*24*60*60*1000));
                expires = "; expires=" + date.toUTCString();
            }
            document.cookie = name + "=" + (value || "")  + expires + "; path=/";
        },
        getCookie(name) {
            var nameEQ = name + "=";
            var ca = document.cookie.split(';');
            for(var i=0;i < ca.length;i++) {
                var c = ca[i];
                while (c.charAt(0)==' ') c = c.substring(1,c.length);
                if (c.indexOf(nameEQ) == 0) return JSON.parse(c.substring(nameEQ.length,c.length));
            }
            return null;
        },
        eraseCookie(name) {   
            document.cookie = name+'=; Max-Age=-99999999;';  
        },
    }
})