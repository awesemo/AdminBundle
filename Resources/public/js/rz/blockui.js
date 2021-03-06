jQuery(document).ready(function(){
    rz_blockui.init();
    jQuery(document).ajaxStop(jQuery.unblockUI);
});

var rz_blockui = {
    init: function() {
        jQuery.blockUI.defaults.css.border= '0px solid transparent';
        jQuery.blockUI.defaults.css.backgroundColor= 'transparent';
        jQuery.blockUI.defaults.css.cursor= 'wait';
        jQuery.blockUI.defaults.css.textAlign= 'left';
        jQuery.blockUI.defaults.centerY = false;
        jQuery.blockUI.defaults.border= 'none';
        jQuery.blockUI.defaults.baseZ= 9999;
        jQuery.blockUI.defaults.ignoreIfBlocked = true;
        jQuery.blockUI.defaults.fadeOut = 800;
        jQuery.blockUI.defaults.fadeIn = 800;
    }
};
