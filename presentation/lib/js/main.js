// intro anim
var tl = new TimelineMax();

tl.to('#logo', 0.75, {autoAlpha: 1, left: 20, ease: Power1.easeOut});
tl.to('.intro-slide h1', 0.75, {autoAlpha: 1, top: 0, ease: Power1.easeOut}, 0.25);
tl.to('.intro-slide h2', 0.75, {autoAlpha: 1, top: 0, ease: Power1.easeOut}, 0.5);
tl.to('.intro-slide img', 0.75, {autoAlpha: 1, top: 0, scale: 1, ease: Back.easeOut}, 0.75);

// bubble sort anim tl's
var bubbleFrameOne = new TimelineMax({paused: true});

bubbleFrameOne.to('#bSortOne', 0.5, {borderColor: 'red', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortTwo', 0.5, {borderColor: 'red', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {top: 100, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {left: 65, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortTwo', 0.5, {left: -60, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {top: 0, borderColor: 'black', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortTwo', 0.5, {top: 0, borderColor: 'black', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {top: 0, borderColor: 'red', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortThree', 0.5, {top: 0, borderColor: 'red', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {top: 100, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {left: 125, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortThree', 0.5, {left: -60, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {top: 0, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {top: 0, borderColor: 'black', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortThree', 0.5, {borderColor: 'black', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {borderColor: 'red', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortFour', 0.5, {borderColor: 'red', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {top: 100, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {left: 185, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortFour', 0.5, {left: -60, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {top: 0, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {borderColor: 'black', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortFour', 0.5, {borderColor: 'black', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {borderColor: 'red', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortFive', 0.5, {borderColor: 'red', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {top: 100, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {left: 262, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortFive', 0.5, {left: -60, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {top: 0, ease:Power1.easeOut});
bubbleFrameOne.to('#bSortOne', 0.5, {borderColor: 'black', ease:Power1.easeOut});
bubbleFrameOne.to('#bSortFive', 0.5, {borderColor: 'black', ease:Power1.easeOut});

var bubbleFrameTwo = new TimelineMax({paused: true});

bubbleFrameTwo.to('#bSortOneS2', 0.5, {borderColor: 'red', ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortTwoS2', 0.5, {borderColor: 'red', ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortOneS2', 0.5, {top: 100, ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortOneS2', 0.5, {left: 65, ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortTwoS2', 0.5, {left: -60, ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortOneS2', 0.5, {top: 0, borderColor: 'black', ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortTwoS2', 0.5, {top: 0, borderColor: 'black', ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortOneS2', 0.5, {top: 0, borderColor: 'red', ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortThreeS2', 0.5, {top: 0, borderColor: 'red', ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortOneS2', 0.5, {top: 100, ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortOneS2', 0.5, {left: 125, ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortThreeS2', 0.5, {left: -60, ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortOneS2', 0.5, {top: 0, ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortOneS2', 0.5, {top: 0, borderColor: 'black', ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortThreeS2', 0.5, {borderColor: 'black', ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortOneS2', 0.5, {borderColor: 'red', ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortFourS2', 0.5, {borderColor: 'red', ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortOneS2', 0.5, {top: 100, ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortOneS2', 0.5, {left: 193, ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortFourS2', 0.5, {left: -60, ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortOneS2', 0.5, {top: 0, ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortOneS2', 0.5, {borderColor: 'black', ease:Power1.easeOut});
bubbleFrameTwo.to('#bSortFourS2', 0.5, {borderColor: 'black', ease:Power1.easeOut});

$('#bSortStageOne').on('click', function(){
	if ($('.bubble-sort-frame-one').hasClass('played')) {
		bubbleFrameOne.reverse();
	} else {
		bubbleFrameOne.play();
	};

	$('.bubble-sort-frame-one').toggleClass('played');
});

$('#bSortStageTwo').on('click', function(){
	if ($('.bubble-sort-frame-two').hasClass('played')) {
		bubbleFrameTwo.reverse();
	} else {
		bubbleFrameTwo.play();
	};

	$('.bubble-sort-frame-two').toggleClass('played');
})

// eg bubble
var egBubbleArr = []; 
egBubbleArr[0] = "images/4.png";
egBubbleArr[1] = "images/0.png";
egBubbleArr[2] = "images/2.png";
egBubbleArr[3] = "images/1.png";
egBubbleArr[4] = "images/3.png";

// function displayAllImages() {
// 	 for (i=0;i<egBubbleArr.length;i++) {
// 	    document.write("<li><img src='" + egBubbleArr[i] + "' width='160' height='120'/><span>" + egBubbleArr[i] + "</span></li>");
// 	    console.log(egBubbleArr);
// 	}
// }
// for (i=0;i<egBubbleArr.length;i++) {
//     document.write("<li><img src='" + egBubbleArr[i] + "' width='160' height='120'/><span>" + egBubbleArr[i] + "</span></li>");
// }

//document.querySelector('#egBubble').innerHTML = egBubbleArr;
// document.querySelector('#egBubble').write("<li><img src='" + egBubbleArr[i] + "' width='160' height='120'/><span>" + egBubbleArr[i] + "</span></li>");
