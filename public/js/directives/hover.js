app.directive('borderOnHover', function(){
	return {
		restrict: 'A',
		link: function(scope, element){
			element.on('mouseenter', function(){
				element.css({border: "black solid 10px"});
			})
			element.on('mouseleave', function(){
				element.css({border: "black solid 1px"});
			})
		}
	}
})