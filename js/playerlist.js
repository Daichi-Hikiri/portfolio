// プレイヤーアイコンをホバー時に背景文字をプレイヤー名に変更
$(function() {
	const defoult = "PLAYERS";  // デフォルト文字
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


// アイコンをマウスホバーした時の処理
$(function () {
    const icon = $('.icon');
    icon.hover(function () {
      // ホバー時、他のアイコンの透明度を変更
      icon.not(this).stop().animate({opacity:0.3});
    },function () {
      // ホバーアウト時に元に戻す処理
       icon.not(this).stop().animate({opacity:1});
    });
});