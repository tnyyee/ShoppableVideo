// Declare the shoppableVideo module and its dependency 'ui.bootstrap'
var app = angular.module('shoppableVideo', ['ui.bootstrap']);
// Declare the AppCtrl controller
app
  .controller('AppCtrl', ['$scope', function ($scope) {

    // Card counter
    var counter = 1;

    // Variable for the video title
    $scope.videoTitle = "";


    // Array to store the productCards
    $scope.productCards = [];

    // Array to store the products
    $scope.products = [];

    //Collapse variable
    $scope.isCollapsed = false;

    // Array to store the products in the library
    $scope.libraryProducts = [
      {
        title: 'Smördeg',
        image: '../assets/images/Smordeg-01.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Eatables"
      },
      {
        title: 'Smördeg Eko',
        image: '../assets/images/Smordeg2-01.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Eatables"
      },
      {
        title: 'Smördeg Lyx',
        image: '../assets/images/Smordeg3.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Eatables"
      },
      {
        title: 'Ägg Frigående',
        image: '../assets/images/Ägg - Frigående.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Eatables"
      },
      {
        title: 'Ägg',
        image: '../assets/images/Ägg-Vanlig.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Eatables"
      },
      {
        title: 'Ägg Eko',
        image: '../assets/images/Ägg-eko.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Eatables"
      },
      {
        title: 'Kniv Japansk',
        image: '../assets/images/Kniv-Avancerad.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Tools"
      },
      {
        title: 'Kniv Barn',
        image: '../assets/images/Kniv-Barn.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Tools"
      },
      {
        title: 'Kniv Stor',
        image: '../assets/images/Kniv-Större-01.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Tools"
      },
      {
        title: 'Förkläde Brun',
        image: '../assets/images/Förkläde-läder-01.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Others"
      },
      {
        title: 'Förkläde Tyg',
        image: '../assets/images/Förkläde-Tyg.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Others"
      },
      {
        title: 'Äggklocka',
        image: '../assets/images/Äggklocka.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Others"
      },
      {
        title: 'Pensel Silikon',
        image: '../assets/images/pensel-silicon.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Tools"
      },
      {
        title: 'Kavel rund',
        image: '../assets/images/kavel-rund.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Tools"
      },
      {
        title: 'Kavel Barn',
        image: '../assets/images/kavel-barn.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Tools"
      },
      {
        title: 'Kavel',
        image: '../assets/images/Kavel.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Tools"
      },
      {
        title: 'Gjutjärn',
        image: '../assets/images/stekpanna-gjutjärn.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Tools"
      },
      {
        title: 'Stekpanna',
        image: '../assets/images/Stekpanna.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Tools"
      },
      {
        title: 'Pensel m. kniv',
        image: '../assets/images/pensel-med-kniv.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Tools"
      },
      {
        title: 'Pensel Trä',
        image: '../assets/images/pensel-trä.png',
        link: "",
        offer: "",
        buttonText: "",
        targetGroup: "",
        category: "Tools"
      }

    ];

    // Array that store all the categories that are used in the dropdown-list
    $scope.categories = []
    angular.forEach($scope.libraryProducts, function(value, category){
        if($scope.categories.indexOf(value.category) == -1)
        {
            $scope.categories.push(value.category);
        }
    });

    // Add productCard to the end of the array
var addProductCard = function () {
  $scope.productCards.push({ title: 'Product Card ' + counter, content: 'Product Card ' + counter, imageURL: '../assets/images/placeholder.png' });
  counter++;
  $scope.productCards[$scope.productCards.length - 1].active = true;
};

// Remove product card by index
var removeProductCard = function (event, index) {
  event.preventDefault();
  event.stopPropagation();
  $scope.productCards.splice(index, 1);
  counter--;
};

// Initialize the scope functions
$scope.addProductCard    = addProductCard;
$scope.removeProductCard = removeProductCard;

// For demonstration add 5 productCards
for (var i = 0; i < 5; i++) {
  addProductCard();
}

  }])
  .directive('tabHighlight', [function () {

    return {
      restrict: 'A',
      link: function (scope, element) {
        // Here is the major jQuery usage where we add the event
        // listeners mousemove and mouseout on the tabs to initalize
        // the moving highlight for the inactive tabs
        var x, y, initial_background = '#c3d5e6';

        element
          .removeAttr('style')
          .mousemove(function (e) {
            // Add highlight effect on inactive tabs
            if(!element.hasClass('active'))
            {
              x = e.pageX - this.offsetLeft;
              y = e.pageY - this.offsetTop;

              // Set the background when mouse moves over inactive tabs
              element
                .css({ background: '-moz-radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.0) 45px), ' + initial_background })
                .css({ background: '-webkit-radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.0) 45px), ' + initial_background })
                .css({ background: 'radial-gradient(circle at ' + x + 'px ' + y + 'px, rgba(255,255,255,0.4) 0px, rgba(255,255,255,0.0) 45px), ' + initial_background });
            }
          })
          .click(function () {
            // Return the inital background color of the tab
            element.removeAttr('style');
          });
      }
    };
  }]);
