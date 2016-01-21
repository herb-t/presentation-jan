/**
* This is the BubbleDemo constructor complete with animation
* @method insert
* @method bubbleSort
* @param {arr} - the array you want to bubbleSort
* @param {tl} - timeline
* @constructor
*/
var BubbleDemo = function() {
	var array = [];

	this.insert = function(item) {
		array.push(item);
	};

	// bubble sort 
	this.bubbleSort = function(arr, tl){
		var len = arr.length; 
		for (var i = len-1; i >=0; i--) {
			for(var j = 1; j<=i; j++) { 
				
				// selectors
				var left = $('.bubble-list-index-' + arr[j-1]);
				var right = $('.bubble-list-index-' + arr[j]);
				var width = left.width();
				
				// timeline - hightlight the 2 items in comparison red
				tl.to(left.find('img'), 0.5, {borderColor: 'red'});
				tl.to(right.find('img'), 0.5, {borderColor: 'red'});

				if(arr[j-1]>arr[j]) {

					var temp = arr[j-1];
					arr[j-1] = arr[j];
					arr[j] = temp;

					// if left is bigger than the item on right
					// switch them with GSAP
					tl.to(left, 0.5, {y: 125, ease: Power4.easeOut});
					// tl.to(left, 0.5, {x: (width * j) - left.position().left + 15, ease:Power2.easeInOut});
					// tl.to(right, 0.5, {x: width * (j-1) - right.position().left + 15, ease:Power2.easeInOut});
					tl.to(left, 0.5, {x: (width * j) - left.position().left, ease:Power2.easeInOut});
					tl.to(right, 0.5, {x: width * (j-1) - right.position().left, ease:Power2.easeInOut});
					tl.to(left, 0.5, {y: 0, ease: Back.easeOut});
				}

				// when done comparing, turn border back to black
				tl.to(left.find('img'), 0.5, {borderColor: 'black'});
				tl.to(right.find('img'), 0.5, {borderColor: 'black'});
			}
		}
		return arr;
	};
};

// bubble sort animation
var bubbleArray = new BubbleDemo();
bubbleArray.insert(egBubbleArr);

$('#sortReal').on('click', function() {

	var tl = new TimelineMax();

	bubbleArray.bubbleSort(egBubbleArr, tl);
	console.log(egBubbleArr);
	   
});