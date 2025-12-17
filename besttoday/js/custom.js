/*----- MOBILE_MENU_START -----*/
$(".js_hamburger").click(function () {
	$(".hamburger_btn").toggleClass("pst_open");
	$(".header_menu").toggleClass("pst_open");
	$(".navigation-main-hp").slideToggle();
	$("html, body").toggleClass("hide-scroll");
});
/*----- MOBILE_MENU_END -----*/

/*-- MEAG_MENU_START --*/
$(document).ready(function () {
	// when you hover a toggle show its dropdown menu
	$(".navbar .dropdown").hover(function () {
		var width = $(document).width();
		if (width > 992) {
			$(this).toggleClass("show");
			$(this).parent().find(".dropdown-menu").toggleClass("show");
			$('.navbar .dropdown-menu').css("display", "");
		}
	});

	// hide the menu when the mouse leaves the dropdown
	$(".navbar .dropdown").mouseleave(function () {
		var width = $(document).width();
		if (width > 992) {
			$(this).removeClass("show");
			$(this).parent().find(".dropdown-menu").removeClass("show");
			$('.navbar .dropdown-menu').css("display", "");
		}
	});

	//mobile jquery  
	$(".navbar .dropdown-toggle").click(function () {
		var width = $(document).width();
		if (width <= 991) {
			if ($(this).next('.dropdown-menu').hasClass("show") == false) {
				$('.navbar .dropdown-menu').slideUp("600");
				$(this).next('.dropdown-menu').slideToggle("600");
			}
			else {
				$(this).next('.dropdown-menu').slideToggle("600");
			}
		}
	});

	$(document).mouseup(function (e) {
		var width = $(document).width();
		if (width <= 991) {
			var container = $(".navbar .dropdown");
			// if the target of the click isn't the container nor a descendant of the container
			if (!container.is(e.target) && container.has(e.target).length === 0) {
				//container.hide();
				$('.navbar .dropdown-menu', this).not('.in .dropdown-menu').stop(true, true).slideUp("600");
				$(this).removeClass('show');
			}
		}
	});
});
/*-- MEAG_MENU_END --*/

/*----- close mobile menu when click menu START-----*/
$(".headmenu_a").click(function () {
	if ($(".header_menu").hasClass("pst_open")) {
		$(".hamburger_btn").toggleClass("pst_open");
		$(".header_menu").toggleClass("pst_open");
		if ($("html").hasClass('hide-scroll')) {
			$("html, body").removeClass('hide-scroll');
		}
	}
});
/*----- close mobile menu when click menu END-----*/

/*-- FIX_HEADER_START --*/
$(function () {
	var stickyHeaderTop = 100;
	$(window).scroll(function () {
		if ($(window).scrollTop() > stickyHeaderTop) {
			if ($('#header').hasClass("pst_blackheader") == false) {
				//$("#header").css("margin-top","-167px");
				$('#header').addClass('pst_blackheader');
				//$("#header").animate({marginTop: "0px"},800);
			}
			if ($('#header').hasClass("pst_blackheader") == true) {
				//$("#header").css("display","block");
			}
		} else {
			//$("#header").css("display","block");
			$('#header').removeClass('pst_blackheader');
		}
	})
});
/*-- FIX_HEADER_END --*/

/*--Text Spliter for animation--*/
const targetList = document.querySelectorAll('.js-split')
const node = Array.prototype.slice.call(targetList, 0)
node.forEach(function (target) {
	const text = target.textContent
	target.innerHTML = ''
	text.split('').forEach(function (c) {
		target.innerHTML += '<span>' + c + '</span>'
	})
})
/*--Text Spliter for animation end--*/
/*--pspander--*/
$(function () {
	$('.pspander.pst_show').find('.pspander_collapse').slideDown();
	$('.pspander_header').click(function (e) {
		if ($(this).closest('.pspander').hasClass('pst_show')) {
			$(this).closest('.pspander').find('.pspander_collapse').slideUp();
			$(this).closest('.pspander').removeClass('pst_show');
		} else {
			$(this).closest('.pspander').find('.pspander_collapse').slideDown();
			$(this).closest('.pspander').addClass('pst_show');
		}
	})
});
/*--pspander end--*/
/*-- animation test keys start --*/
$(function () {
	$(window).keydown(function (e) {
		if (e.keyCode == 81) {
			if ($(".banner_block_tp").hasClass("run_ani")) {
				$(".banner_block_tp").removeClass("run_ani");
				$(".banner_zigzag_tp").removeClass("run_ani");
			} else {
				$(".banner_block_tp").addClass("run_ani");
				$(".banner_zigzag_tp").addClass("run_ani");
			}
			if ($(".scroll_trigger").hasClass("run_ani")) {
				$(".scroll_trigger").removeClass("run_ani");
			} else {
				$(".scroll_trigger").addClass("run_ani");
			}
		}
	})
});
/*-- animation test keys end --*/
$(document).ready(function () {
	$(".accordion").click(function () {
		$(this).toggleClass("active"); // Toggle the active class  
		var panel = $(this).next(); // Get the next sibling panel  

		// Toggle max height with transition  
		if (panel.css("max-height") && panel.css("max-height") !== "0px") {
			panel.css("max-height", "0px"); // Collapse  
		} else {
			panel.css("max-height", panel.prop('scrollHeight') + "px"); // Expand  
		}
	});
});



document.addEventListener("DOMContentLoaded", function () {
	const items = document.querySelectorAll(".faq_item");
	if( !items ) return ;
	items.forEach(function (item) {
		item.querySelector('.faq_btn').addEventListener("click", function () {
			item.classList.toggle("open");

			const panel = item.querySelector('.faq_pannel');

			if (panel.style.maxHeight && panel.style.maxHeight !== "0px") {
				panel.style.maxHeight = "0px";
			} else {
				panel.style.maxHeight = panel.scrollHeight + "px";
			}
		});
	});
});