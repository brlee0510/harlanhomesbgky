!function(e){"use strict";e(document).ready(function(){if("undefined"!=typeof ere_login_vars){var s=ere_login_vars.ajax_url,a=ere_login_vars.loading;e(".ere-login").validate({errorElement:"span",rules:{user_login:{required:!0},user_password:{required:!0}},messages:{user_login:"",user_password:""}}),e(".ere-login-button").on("click",function(r){r.preventDefault();var n=e(this).parents("form"),o=e(this).data("redirect-url"),t=e(this).parents(".ere-login-wrap").find(".ere_messages");n.valid()&&e.ajax({type:"post",url:s,dataType:"json",data:n.serialize(),beforeSend:function(){t.empty().append('<span class="success text-success"> '+a+"</span>")},success:function(e){e.success?(t.empty().append('<span class="success text-success"><i class="fa fa-check"></i> '+e.message+"</span>"),""==o?window.location.reload():window.location.href=o):("function"==typeof ere_reset_recaptcha&&ere_reset_recaptcha(),t.empty().append('<span class="error text-danger"><i class="fa fa-close"></i> '+e.message+"</span>"))}})}),e(".ere_forgetpass").on("click",function(r){r.preventDefault();var n=e(this).parents("form");e.ajax({type:"post",url:s,dataType:"json",data:n.serialize(),beforeSend:function(){e(".ere_messages_reset_password").empty().append('<span class="success text-success"> '+a+"</span>")},success:function(s){s.success?e(".ere_messages_reset_password").empty().append('<span class="success text-success"><i class="fa fa-check"></i> '+s.message+"</span>"):("function"==typeof ere_reset_recaptcha&&ere_reset_recaptcha(),e(".ere_messages_reset_password").empty().append('<span class="error text-danger"><i class="fa fa-close"></i> '+s.message+"</span>"))}})}),e(".ere-reset-password").off("click").on("click",function(s){s.preventDefault();var a=e(this).closest(".ere-login-wrap").slideUp("slow").next(".ere-reset-password-wrap");a.slideDown("slow"),a.find(".reset_password_user_login").focus()}),e(".ere-back-to-login").off("click").on("click",function(s){s.preventDefault();var a=e(this).closest(".ere-reset-password-wrap").slideUp("slow").prev(".ere-login-wrap");a.slideDown("slow"),a.find(".login_user_login").focus()}),e("#ere_signin_modal").on("shown.bs.modal",function(){e(".ere-back-to-login",e("#ere_signin_modal")).click()}),e("#ere_signin_modal").on("hide.bs.modal",function(){e(".ere-back-to-login",e("#ere_signin_modal")).click()})}})}(jQuery);