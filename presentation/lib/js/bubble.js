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
				var left = $('.bubble-list-index-' + arr[j-1]);
				var right = $('.bubble-list-index-' + arr[j]);

				var width = left.width();
				
				tl.to(left.find('img'), 0.5, {borderColor: 'red'});
				tl.to(right.find('img'), 0.5, {borderColor: 'red'});

				if(arr[j-1]>arr[j]) {


					var temp = arr[j-1];
					arr[j-1] = arr[j];
					arr[j] = temp;

					tl.to(left, 0.5, {y: 125, ease: Power4.easeOut});
					tl.to(left, 0.5, {x: (width * j) - left.position().left + 10, ease:Power2.easeInOut});
					tl.to(right, 0.5, {x: width * (j-1) - right.position().left + 10, ease:Power2.easeInOut});
					tl.to(left, 0.5, {y: 0, ease: Back.easeOut});
				}

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