/**
 * Created by Administrator on 2016/9/8.
 */

$(function () {
    /*��������js*/
    $('#main ul Li').click(function(){
        $(this).addClass('active').siblings('.active').removeClass('active');
        var tar=$(this).attr('data-tar');
        $(tar).addClass('active').siblings('.active').removeClass('active');
    });
});
