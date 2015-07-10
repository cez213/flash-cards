app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
	FlashCardsFactory.getFlashCards()
			.then(function(data){
				$scope.flashCards = data;
			}).then(null, function(err){
				return next(err);
			})

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
			if(flashCard.answeredCorrectly) ScoreFactory.correct += 1;
			else ScoreFactory.incorrect += 1;
		}
	};

	$scope.categories = [
	    'MongoDB',
	    'Express',
	    'Angular',
	    'Node'
	];

	$scope.selected = 'all';
	$scope.getCategoryCards = function(category){
		FlashCardsFactory.getFlashCards(category)
			.then(function(data){
				$scope.flashCards = data;
				$scope.selected = category;
			})
	}

	$scope.resetCategories = function(){
		FlashCardsFactory.getFlashCards()
				.then(function(data){
				$scope.flashCards = data;
				$scope.selected = 'all';
			})
	}

})