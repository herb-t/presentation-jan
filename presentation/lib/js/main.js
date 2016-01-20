for (i=0;i<egBubbleArr.length;i++) {
    $("#egBubble").append("<li class='bubble-list-index-" + egBubbleArr[i] +"'><img src='images/" + egBubbleArr[i] + ".png'/></li>");
}

for (i=0;i<egMergeArr.length;i++) {
    $("#egMerge").append("<li class='merge-list-index-" + egMergeArr[i] +"'><img src='images/" + egMergeArr[i] + ".png'/></li>");
}

for (i=0;i<egQuickArr.length;i++) {
    $("#egSort").append("<li class='sort-list-index-" + egQuickArr[i] +"'><img src='images/" + egQuickArr[i] + ".png'/></li>");
}

// native sort animation
$('#quickReal').on('click', function() {

	egQuickArr.sort();

	for (i=0;i<egQuickArr.length;i++) {
	    $("#sortDump").append("<li class='list-index-" + egQuickArr[i] +"'><img src='images/" + egQuickArr[i] + ".png'/></li>");
	    TweenMax.staggerTo('#sortDump li', 0.5, {autoAlpha: 1, top: 0, ease: Back.easeOut}, 0.05);
	}
	   
});

// intro anim
var tl = new TimelineMax();

tl.to('#logo', 0.75, {autoAlpha: 1, left: 20, ease: Power1.easeOut});
tl.to('.intro-slide h1', 0.75, {autoAlpha: 1, top: 0, ease: Power1.easeOut}, 0.25);
tl.to('.intro-slide h2', 0.75, {autoAlpha: 1, top: 0, ease: Power1.easeOut}, 0.5);
tl.to('.intro-slide img', 0.75, {autoAlpha: 1, top: 0, scale: 1, ease: Back.easeOut}, 0.75);