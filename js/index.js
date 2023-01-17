/*!
 * Start Bootstrap - Freelancer Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function() {
    $('#work_payx').load('work/payx.html');
    $('#work_msft').load('work/msft.html');
    $('#work_techm').load('work/techm.html');
    $('#work_bipl').load('work/bipl.html');
    $('#project_jif').load('projects/jif.html');
    $('#project_call').load('projects/call.html');
    $('#project_cam').load('projects/cam.html');
    $('#project_dvcs').load('projects/dvcs.html');
    $('#project_sb').load('projects/sb.html');
    $('#project_als').load('projects/als.html');
    $('#project_dap').load('projects/dap.html');
    $('#project_osc').load('projects/osc.html');
    $('#education_uor').load('education/uor.html');
    $('#education_svit').load('education/svit.html');
    $('#intro').particleground();
    $('body').on('click', '.page-scroll a', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Closes the Responsive Menu on Menu Item Click
$('.navbar-collapse ul li a').click(function() {
    $('.navbar-toggle:visible').click();
});
