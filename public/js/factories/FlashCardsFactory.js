app.factory('FlashCardsFactory', function ($http) {
        
        return {
            getFlashCards: function (category) {
                var url = (category)? '/cards' + '?category=' + category : '/cards'
                return $http.get(url)
                    .then(function (res) {
                        return res.data;
                    })
                }
                
        }
});