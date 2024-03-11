$(function() {
	const defoult = "PLAYERS";
	const playerName = $(".playerName");

	$("#imagawa").mouseover(function() {
		playerName.text("imagawa");
	}).mouseout(function(){
		playerName.text(defoult);
	});

	$("#prina").hover(function() {
		playerName.text("Prina");
	}).mouseout(function(){
		playerName.text(defoult);
	});

	$("#wappo").hover(function() {
		playerName.text("wappo");
	}).mouseout(function(){
		playerName.text(defoult);
	});

	$("#tori").hover(function() {
		playerName.text("tori");
	}).mouseout(function(){
		playerName.text(defoult);
	});

	$("#uryyyyy").hover(function() {
		playerName.text("URYYYYY");
	}).mouseout(function(){
		playerName.text(defoult);
	});

	$("#ymgc").hover(function() {
		playerName.text("ymgc");
	}).mouseout(function(){
		playerName.text(defoult);
	});

	$("#yujiron").hover(function() {
		playerName.text("Yujiron");
	}).mouseout(function(){
		playerName.text(defoult);
	});

	$("#itouhamu").hover(function() {
		playerName.text("itouhamu");
	}).mouseout(function(){
		playerName.text(defoult);
	});
});


$(function () {
    const icon = $('.icon');
    icon.hover(function () {
      //マウスオーバーしたときの処理
      icon.not(this).stop().animate({opacity:0.3});
    },function () {
      //マウスアウトしたときの処理
       icon.not(this).stop().animate({opacity:1});
    });
});