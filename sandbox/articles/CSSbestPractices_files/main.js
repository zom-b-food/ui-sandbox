/**
  * @version 1.2
 */
jQuery.fn.pagination = function(maxentries, opts){
	opts = jQuery.extend({
		items_per_page:10,
		num_display_entries:10,
		current_page:0,
		num_edge_entries:0,
		link_to:"#",
		prev_text:"Prev",
		next_text:"Next",
		ellipse_text:"...",
		prev_show_always:true,
		next_show_always:true,
		callback:function(){return false;}
	},opts||{});

	return this.each(function() {
		/**
		 * Calculate the maximum number of pages
		 */
		function numPages() {
			return Math.ceil(maxentries/opts.items_per_page);
		}

		/**
		 * Calculate start and end point of pagination links depending on
		 * current_page and num_display_entries.
		 * @return {Array}
		 */
		function getInterval()  {
			var ne_half = Math.ceil(opts.num_display_entries/2);
			var np = numPages();
			var upper_limit = np-opts.num_display_entries;
			var start = current_page>ne_half?Math.max(Math.min(current_page-ne_half, upper_limit), 0):0;
			var end = current_page>ne_half?Math.min(current_page+ne_half, np):Math.min(opts.num_display_entries, np);
			return [start,end];
		}

		/**
		 * This is the event handling function for the pagination links.
		 * @param {int} page_id The new page number
		 */
		function pageSelected(page_id, evt){
			current_page = page_id;
			drawLinks();
			var continuePropagation = opts.callback(page_id, panel);
			if (!continuePropagation) {
				if (evt.stopPropagation) {
					evt.stopPropagation();
				}
				else {
					evt.cancelBubble = true;
				}
			}
			return continuePropagation;
		}

		/**
		 * This function inserts the pagination links into the container element
		 */
		function drawLinks() {
			panel.empty();
			var interval = getInterval();
			var np = numPages();
			// This helper function returns a handler function that calls pageSelected with the right page_id
			var getClickHandler = function(page_id) {
				return function(evt){ return pageSelected(page_id,evt); }
			}
			// Helper function for generating a single link (or a span tag if it's the current page)
			var appendItem = function(page_id, appendopts){
				page_id = page_id<0?0:(page_id<np?page_id:np-1); // Normalize page id to sane value
				appendopts = jQuery.extend({text:page_id+1, classes:""}, appendopts||{});
				if(page_id == current_page){
					var lnk = jQuery("<span class='current'>"+(appendopts.text)+"</span>");
				}
				else
				{
					var lnk = jQuery("<a>"+(appendopts.text)+"</a>")
						.bind("click", getClickHandler(page_id))
						.attr('href', opts.link_to.replace(/__id__/,page_id));


				}
				if(appendopts.classes){lnk.addClass(appendopts.classes);}
				panel.append(lnk);
			}
			// Generate "Previous"-Link
			if(opts.prev_text && (current_page > 0 || opts.prev_show_always)){
				appendItem(current_page-1,{text:opts.prev_text, classes:"prev"});
			}
			// Generate starting points
			if (interval[0] > 0 && opts.num_edge_entries > 0)
			{
				var end = Math.min(opts.num_edge_entries, interval[0]);
				for(var i=0; i<end; i++) {
					appendItem(i);
				}
				if(opts.num_edge_entries < interval[0] && opts.ellipse_text)
				{
					jQuery("<span>"+opts.ellipse_text+"</span>").appendTo(panel);
				}
			}
			// Generate interval links
			for(var i=interval[0]; i<interval[1]; i++) {
				appendItem(i);
			}
			// Generate ending points
			if (interval[1] < np && opts.num_edge_entries > 0)
			{
				if(np-opts.num_edge_entries > interval[1]&& opts.ellipse_text)
				{
					jQuery("<span>"+opts.ellipse_text+"</span>").appendTo(panel);
				}
				var begin = Math.max(np-opts.num_edge_entries, interval[1]);
				for(var i=begin; i<np; i++) {
					appendItem(i);
				}

			}
			// Generate "Next"-Link
			if(opts.next_text && (current_page < np-1 || opts.next_show_always)){
				appendItem(current_page+1,{text:opts.next_text, classes:"next"});
			}
		}

		// Extract current_page from options
		var current_page = opts.current_page;
		// Create a sane value for maxentries and items_per_page
		maxentries = (!maxentries || maxentries < 0)?1:maxentries;
		opts.items_per_page = (!opts.items_per_page || opts.items_per_page < 0)?1:opts.items_per_page;
		// Store DOM element for easy access from all inner functions
		var panel = jQuery(this);
		// Attach control functions to the DOM element
		this.selectPage = function(page_id){ pageSelected(page_id);}
		this.prevPage = function(){
			if (current_page > 0) {
				pageSelected(current_page - 1);
				return true;
			}
			else {
				return false;
			}
		}
		this.nextPage = function(){
			if(current_page < numPages()-1) {
				pageSelected(current_page+1);
				return true;
			}
			else {
				return false;
			}
		}
		// When all initialisation is done, draw the links
		drawLinks();
        // call callback function
        opts.callback(current_page, this);
	});
}

//==== my functionality
jQuery(document).ready(function(){
	jQuery('#top-ads-block').load('/wp-content/themes/wdd2/ads-rotator-ajax.php');
	jQuery('#under-comments-ads').load('/wp-content/themes/wdd2/ads-rotator-ajax.php?adfeed=bt-ads');
	
  //jQuery('#bottom-post-ads').load('/wp-content/themes/wdd2/ads-rotator-ajax.php?adfeed=bt-ads2');
	
	

	buildTabs("#demo2");

	var demo_tabs = buildTabs("#demo");
	var all_posts_tab = demo_tabs[2];
	//all_posts_tab.addEventListener('click', function(e){ pag_current_action='all'; }, false);
	jQuery(all_posts_tab).bind('click', function(e){pag_current_action='all';});

	var popular_posts_tab = demo_tabs[0];
	jQuery(popular_posts_tab).bind('click', function(e){pag_current_action='popular';});
	//popular_posts_tab.addEventListener('click', function(e){ pag_current_action='popular'; }, false);

	var last_posts_tab = demo_tabs[1];
	//last_posts_tab.addEventListener('click', function(e){pag_current_action='last'; }, false);
	jQuery(last_posts_tab).bind('click', function(e){pag_current_action='last';});

	var tabs = new Array('popular','last','all');

	for (var i=0; i<3; i++){

		jQuery('#pag_container_'+tabs[i]).pagination(pag_posts_nums[tabs[i]], {
                    num_edge_entries: 0,
                    num_display_entries: 10,
                    callback:pageselectCallback,
                    items_per_page:pag_posts_per_page,
					prev_text:"prev",
					next_text:"next"
        });
	}
	initSmoothScroll('top');

});

function pageselectCallback(page_index, jq){
				if(jq.id){
				  return false;
				}

			    var pag_cont = '#pag_posts_content_'+ pag_current_action;
				var pag_url = pag_script_url + ( page_index + 1) + '&action=' + pag_current_action;
				jQuery.get(pag_url,
					function(data){
					  var main_ul = jQuery(pag_cont);
					  main_ul.after('<ul id="temp_pagination_ul">' + data + '</ul>');
					   var new_ul = jQuery('#temp_pagination_ul');
					   if(new_ul){
					     new_ul.hide();
						 pags_trans_slide(main_ul, new_ul);
					   }
					   else
					     jQuery(pag_cont).html(data);
					}
				);

                return false;
}

function pags_trans_opacity(main_ul){

		 main_ul.css("opacity", "0");

		 main_ul.animate({'opacity':'1'},{duration:250,complete: function(){}});

}

function pags_trans_slide(main_ul, temp_ul){

		main_ul.stop();
		var init_height = temp_ul.height();
		main_ul.animate({"opacity": "0", "height":init_height + 'px'},{duration:250, complete: function(){

			main_ul.html(temp_ul.html());
			main_ul.css('height','auto');
			temp_ul.remove();
		    pags_trans_opacity(main_ul);

		 } })
}

function buildTabs(section_id){
    jQuery(section_id + " .yui-nav li").removeClass("selected"); //Remove any "active" class
	jQuery(section_id + " .yui-nav li:first").addClass("selected").show(); //Activate first tab
	jQuery(section_id + " .yui-content .tab-content").hide(); //Hide all content
	jQuery(section_id + " .yui-content .tab-content:first").show(); //Show first tab content

	var new_tabs = jQuery(section_id + " .yui-nav li");
	new_tabs.click(function(e) {

	   var prev_selected_li = jQuery(section_id + " .yui-nav li.selected");
	   var prev_activeTab = jQuery(prev_selected_li.find("a").attr("href") + '_j');

	   jQuery(section_id + " .yui-nav li").removeClass("selected"); //Remove any "active" class
	   jQuery(this).addClass("selected"); //Add "active" class to selected tab

	   jQuery(section_id + " .yui-content .tab-content").hide(); //Hide all tab content

	   //prev_selected_li.addClass('selected');
	   prev_activeTab.show();

		var activeTab = jQuery(jQuery(this).find("a").attr("href") + '_j'); //Find the href attribute value to identify the active tab + content


		tabs_trans_slide(activeTab, prev_activeTab);
		//jQuery(activeTab).show();

		return false;
	});
	return new_tabs;
}


function tabs_trans_opacity(my_active_tab, prev_selected){
  if(prev_selected){

		 my_active_tab.show();
	     my_active_tab.addClass('selected-tab');
		 my_active_tab.css("opacity", "0");

		 my_active_tab.animate({'opacity':'1'},{duration:250, complete: function(){

		 } })
	  }



}

function tabs_trans_slide(my_active_tab, prev_selected){

	if(prev_selected){
	    prev_selected.stop();

		var init_height = my_active_tab.height();

		prev_selected.animate({"opacity": "0", "height":init_height + 'px'},{duration:250, complete: function(){
		    prev_selected.hide();
			prev_selected.css("opacity", "1");
			prev_selected.css('height','auto');
		    tabs_trans_opacity(my_active_tab, prev_selected);

		 } })
	  }
	else{

	   my_active_tab.show();
	   my_active_tab.addClass('selected-tab');
	}

}


var initPage = function() {
	initInp();
}

var initInp = function() {
	var inp = document.getElementsByTagName('input');
	for (var i = 0; i < inp.length; i++)
	{
		if (inp[i].className == 'text')
		{
			inp[i].onclick = function()
			{
				this.value = '';
			}
		}
	}
}


if (window.addEventListener){window.addEventListener("load", initPage, false);
} else if (window.attachEvent){window.attachEvent("onload", initPage);}


function onLogoEnter(e){
 var tip = jQuery('#ftooltip');
 var x_offset = e.target.offsetLeft+1;// + tag_element.offsetWidth/2 - 100;// result_box.offsetWidth/2;
 var y_offset = e.target.offsetTop + e.target.offsetHeight-12;// + tag_element.offsetHeight;
 tip.css('left', x_offset + 'px');
 tip.css('top' ,  y_offset + 'px');
 tip.stop(true).animate({'opacity':'1', 'marginTop' : '15px'}, 400);
 tip.css('display', 'block');
}

function onLogoLeave(e){
  var tip = jQuery('#ftooltip');
  tip.stop(true).animate({'opacity' : 0, 'marginTop' : '0px'}, 400);
}

//window.addEvent('domready', function() {
jQuery(document).ready(function(){
   var top_logo = jQuery('#top_logo');
   top_logo.bind('mouseenter', onLogoEnter);
   top_logo.bind('mouseleave', onLogoLeave);
   var tip = jQuery('#ftooltip');
   tip.css("opacity", "0");
});

//window.addEvent('domready', function(){
jQuery(document).ready(function(){

  if(screen.width > 1024)
    return;
 //$$('#page div.overflow').setStyles({});
  jQuery('#page').css({
    width:'1076px',
    padding:'0px',
    'margin-left':'-73px',
    overflow:'hidden'
  });

  jQuery('#page').css('min-width','1076px');
  
  

});

/* jQuery SmoothScroll */
function initSmoothScroll(hash_name){
  jQuery('a[href^=#'+ hash_name +']').click(function() {
   // duration in ms
   var duration = 500;
   // easing values: swing | linear
   var easing='swing';
   // make sure it's the same location
   if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'') && location.hostname==this.hostname && this.hash.replace(/#/,''))
   {
      // get parameters
      var hash=this.hash;
      var target=jQuery(hash).offset().top;
      // animate to target and set the hash to the window.location after the animation
      jQuery("html:not(:animated),body:not(:animated)").animate({ scrollTop: target }, duration, easing, function() { location.hash=hash; });
      // cancel default click action
      return false;
   }

  });

}
