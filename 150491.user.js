// ==UserScript==
// @name		Tweakers 7.5
// @namespace	tweakers.net
// @description	Make tweakers.net usable again
// @include		http://tweakers.net/*
// @include		https://tweakers.net/*
// @include		http://gathering.tweakers.net/*
// @include		https://gathering.tweakers.net/*
// @include		https://secure.tweakers.net/*
// @require		http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js
// @version		1.1.8
// @grant		GM_addStyle
// ==/UserScript==

/**
 * Compressed with http://www.cssdrive.com/index.php/main/csscompressor/
 * @see https://github.com/eXistenZNL/Tweakers-7.5/blob/1.1.8/style.css
 */
GM_addStyle("body{background:#444}#layout{ min-height:100%; background-color:#444}h1,h2,h3,p{margin:0 0 10px}#menubar{width:1020px;border-radius:8px 8px 0 0;height:32px;margin-bottom:36px;z-index:2}#searchbar{width:1020px;height:0px;margin:0 auto;background:none;position:relative;z-index:1}#search{position:absolute;width:320px;right:20px;top:22px;padding:0}#search .keywordSearch{width:176px;height:24px;margin-top:4px;float:right;margin-right:10px}#search input.text{width:174px;height:16px;font-size:12px;padding:5px 10px 3px}#search input.text.small{width:88px}#search input.submit{float:right;background-position:-3px -75px;height:24px;width:26px}.mainSearchSuggest{margin-left:-311px}#streamone{position:absolute;left:-15px}#detailedSearchListing{width:85px;line-height:16px;height:24px;font-size:12px}#search .keywordSearch{width:220px}.galleryHeadingContainer,.pageTabsContainer,.notificationsContainer,#tabs,#tweakbase{position:relative;margin:0 auto;width:1020px}#tracker .fakeTop{ height:70px; border-bottom:1px solid rgb(195,198,198)}#tracker .fakeTop >div{ bottom:-41px}.notificationsContainer{padding-top:62px}#b_tb{margin-left:0}#contentArea{background:#fff;border-radius:0 0 8px 8px;margin-bottom:20px;padding:24px 20px 20px;box-shadow:0 0 10px 7px #222}#bottom .hr{display:none}#fpaItems{margin-bottom:10px;float:right;width:330px;border:1px solid #dddede;background:linear-gradient(#F5F6F6,#EDEEEE) repeat scroll 0 0 #EDEEEE;padding:2px}#fpaItems .fpaItem{float:left;width:161px;margin:1px !important;height:122px;border:1px solid #dddede;position:relative}#fpaItems .fpaItem div.imageContainer{width:100%}#fpaItems .fpaItem img{margin-left:-42px}#fpaItems .fpaItem div.textContainer{background:none repeat scroll 0 0 rgba(0,0,0,0.5);color:#fff;width:100%;height:auto;font-size:12px;line-height:1.4em;padding:4px;position:absolute;bottom:0}#fp_tabs_container{margin-bottom:10px;height:31px}#fp_tabs{padding-top:0}table.highlights{margin-bottom:15px}table.highlights td{padding:3px 0}table.highlights .type{padding:0}.secondColumn .fpItem{margin-bottom:10px}.secondColumn .fpItem:last-child{margin-bottom:0}#inlineTracker{background:linear-gradient(#F5F6F6,#EDEEEE) repeat scroll 0 0 #EDEEEE;border:1px solid #DDDEDE;border-radius:1px 1px 1px 1px;box-shadow:0 0 0 1px rgba(255,255,255,0.33) inset;padding:15px 15px 17px}#inlineTracker h4{margin:7px 0}#inlineTracker ul{padding-left:0;margin:0}#inlineTracker .time{margin-right:10px} .articleColumn{line-height:1.4em} .eenReactie{margin-top:5px;width:600px}.reactieContent{padding:5px 15px 5px 0px}.reactieHeader{padding:1px 0px 1px 15px;background-color:#E7E8E8;margin-left:-20px}.reactieBody.hidden .reactieHeader{padding:0px 10px;opacity:0.35}.reactieBody.informative,.reactieBody.informative .reactieHeader{background-color:#EFFFE2;border-left:1px solid #CFD4C9}.reactieBody.spotlight, .reactieBody.spotlight .reactieHeader{background-color:#D8FFC2;border-left:1px solid #BECFBE}#pollListing{overflow:visible}.reacties{padding-left:10px}.modFilter{width:375px}.modFilter .scoreButton{margin-left:3px}.modFilter .reactionCount{margin:0px 7px 0px 4px} .galleryHeading .karma{padding-top:0}.galleryHeading .karma p{display:inline;margin-right:5px} #title .actionbutton.sendreply,#title .actionbutton.newmessage{position:relative;top:14px} .newsArticleColumn .newsSubmitButton{position:relative;top:34px}  #forum_tabs{padding-top:0}.reactie{line-height:1.4em}#community li{padding:5px 0}#content .forumList:last-child table.listing{border:10px solid #fc0;color:#65f;margin-bottom:0}table.listing td,table.listing th{padding:2px 5px}table.listing td.tags{overflow:hidden;white-space:nowrap}.channelHeader{display:none}#messages,.topic_actions{overflow:hidden}div.message .messageheader{background-color:#ddd}div.message{margin-bottom:0px;line-height:1.4em;border-top:0;border-radius:0} #title{height:50px}#title p.mods{display:none}.pagecounter{margin-top:10px}#footer .breadcrumb{margin-bottom:0}div.message.topicstarter .messageheader{background-color:#ccc}.forumList:nth-child(3) table.listing th{background:linear-gradient(#db2252,#b5012e) repeat scroll 0 0 #c20c3b}.forumList:nth-child(4) table.listing th{background:linear-gradient(#673c87,#4c2a66) repeat scroll 0 0 #553070}.forumList:nth-child(5) table.listing th{background:linear-gradient(#24b635,#1c8c29) repeat scroll 0 0 #21a931}.forumList:nth-child(6) table.listing th{background:linear-gradient(#ff6d26,#ff4800) repeat scroll 0 0 #ff560e}.forumList:nth-child(7) table.listing th{background:linear-gradient(#00b689,#14a985) repeat scroll 0 0 #0fad85}.forumList:nth-child(9) table.listing{margin-bottom:0 !important}  .article #fpaItems:last-child{margin-bottom:0}");

$.noConflict();
jQuery(document).ready(function($) {

	/** Place the tracker on a usable spot **/
	$.ajax({
		type: "GET",
		url: "/xmlhttp/xmlHttp.php?application=frontpage&type=tracker&action=get_tracker&output=json&nocache=" + (new Date).getTime(),
		dataType: "json",
	}).done(function(data) {
		html = '<div id="inlineTracker" class="fpItem tracker"><h2>Inline tracker</h2>' + data.data.html + "</div>";
		$("#pricewatch").before(html);
	});
});
