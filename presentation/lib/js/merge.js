/**
* This is the MergeDemo constructor complete with animation
* @method insert
* @method mergeSort
* @param {arr} - the array you want to mergeSort
* @param {tl} - timeline
* @constructor
*/
var MergeDemo = function() {
	var array = [];

	this.insert = function(item) {
		array.push(item);
	};

	// merge sort
	this.mergeSort = function(arr) {
		var len = arr.length;
		if(len < 2)
			return arr;
			for (i=0;i<arr.length;i++) {
			    $("#indiviualArrays").append("<ul><li class='indiviaual-list-index-" + arr[0] +"'><img src='images/" + arr[0] + ".png'/></li></ul>");
			    TweenMax.staggerTo("#indiviualArrays ul li", 0.5, {autoAlpha: 1, top: 0, ease: Back.easeOut}, 0.05);
			}

		// arr.forEach(function() {
		// 	$("#indiviualArrays").append("<ul><li><img src='images/" + arr[0] + ".png'/></li></ul>")
		// 	TweenMax.staggerTo("#indiviualArrays ul li", 0.5, {autoAlpha: 1, top: 0, ease: Back.easeOut}, 0.05);
		// });

		var mid = Math.floor(len/2), 
		left = arr.slice(0,mid), 
		right = arr.slice(mid);		

		// left.forEach(function() {

		// 	$("#leftDump").append("<li ><img src='images/" + left + ".png'/></li>");
		// })

		// right.forEach(function() {
		// 	$("#rightDump").append("<li><img src='images/" + right + ".png'/></li>");
		// })

		return this.merge(this.mergeSort(left),this.mergeSort(right));

	};

	this.merge = function(left, right) {

		var result = [],
		lLen = left.length,
		rLen = right.length,
		l = 0,
		r = 0;

		console.log(left);
		console.log(right);

		while(l < lLen && r < rLen) {

			if(left[l] < right[r]) {   
				result.push(left[l++]);

				for (i=0;i<left.length;i++) {
				    $("#leftDump").append("<li class='left-list-index-" + left[i] +"'><img src='images/" + left[i] + ".png'/></li>");
				    TweenMax.staggerTo("#leftDump li", 0.5, {delay: 1, autoAlpha: 1, top: 0, ease: Back.easeOut}, 0.05);
				}
			}
			else {     
				result.push(right[r++]);

				for (i=0;i<right.length;i++) {
				    $("#rightDump").append("<li class='right-list-index-" + right[i] +"'><img src='images/" + right[i] + ".png'/></li>");
					TweenMax.staggerTo("#rightDump li", 0.5, {delay: 1.5, autoAlpha: 1, top: 0, ease: Back.easeOut}, 0.05);
				}
			}
		}

		return result.concat(left.slice(l)).concat(right.slice(r));
	};

};



// merge sort animation
var mergeArray = new MergeDemo();
mergeArray.insert(egMergeArr);
console.log(egMergeArr);

$('#mergeReal').on('click', function() {
	$("#egMerge li").css('display', 'none');
	var tl = new TimelineMax(),
	mergedArray = [];

	mergedArray = mergeArray.mergeSort(egMergeArr);

	console.log('mergeArr', mergedArray);
	for (i=0;i<mergedArray.length;i++) {
	    $("#mergeDump").append("<li class='merge-list-index-" + mergedArray[i] +"'><img src='images/" + mergedArray[i] + ".png'/></li>");
		TweenMax.staggerTo("#mergeDump li", 0.5, {delay: 2, autoAlpha: 1, top: 0, ease: Back.easeOut}, 0.05);
	}

});
