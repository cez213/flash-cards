app.controller('MainController', function ($scope, FlashCardsFactory, ScoreFactory) {
	FlashCardsFactory.getFlashCards()
			.then(function(cards){
				$scope.flashCards = cards;
			}).then(null, function(err){
				return next(err);
			})

	$scope.answerQuestion = function (answer, flashCard) {
		if (!flashCard.answered) {
			flashCard.answered = true;
			flashCard.answeredCorrectly = answer.correct;
			if(flashCard.answeredCorrectly) ScoreFactory.correct ++;
			else ScoreFactory.incorrect ++;
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
		$scope.selected = category;
		FlashCardsFactory.getFlashCards(category)
			.then(function(data){
				$scope.flashCards = data;
			})
	}

	$scope.resetCategories = function(){
		$scope.selected = 'all';
		FlashCardsFactory.getFlashCards()
				.then(function(data){
				$scope.flashCards = data;
			})
	}

})