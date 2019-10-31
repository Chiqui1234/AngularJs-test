var nissanSearchApp = angular.module("search", []);

nissanSearchApp.controller("searchController", function($scope) {    
$scope.cars =
{
    coupe370z: {
        model: '370Z',
        motor: [
            '4.2 liters v6',
            '4.2 liters v6 turbo (Nismo)',
            '4.2 liters v6 twin-turbo (Nismo)'
        ],
        price: 1000
    },
    gtrEgoist: {
        model: 'GT-R EGOIST',
        motor: [
            '3.9 liters 6-inline',
            '4.2 liters v6 turbo (Nismo)',
            '4.2 liters v6 twin-turbo (Nismo)'
        ],
        image: [
            'https://upload.wikimedia.org/wikipedia/commons/d/d1/2012_Nissan_GT-R_Egoist.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/5/5e/2012_Nissan_GT-R_Egoist_rear.jpg'
        ],
        price: 2000
    },
    gtrLbWorks: {
        model: 'GT-R LB WORKS',
        motor: [
            '4.2 liters v6 twin-turbo (Nismo)',
            '4.2 liters v6 twin-turbo (LB Works)'
        ],
        image: [
            'https://cdn.shopify.com/s/files/1/1705/8047/products/Snip20180330_69_1024x1024.png?v=1524216761',
            'https://cdn.shopify.com/s/files/1/1705/8047/products/Snip20180330_71_1024x1024.png?v=1524216763'
        ],
        price: 3000
    }
},
$scope.query = '',
$scope.result = '',
$scope.deleteQuery = function ()
{
    $scope.query = '';
    console.log("listo.");
},
$scope.searchQuery = function()
{
    if( $scope.query.toUpperCase() == $scope.cars.coupe370z.model )
    {
        // $scope.result = 'Compralo a tan sólo $' + $scope.cars.coupe370z.price + ', o 36 cuotas de ' + ($scope.cars.coupe370z.price / 36 * 1.12).toFixed(1) + '';   
        result = 'coupe370z';       
    }
    if( $scope.query.toUpperCase() == $scope.cars.gtrEgoist.model )
    {
        // $scope.result = 'Compralo a tan sólo $' + $scope.cars.gtrEgoist.price + ', o 36 cuotas de ' + ($scope.cars.gtrEgoist.price / 36 * 1.12).toFixed(1) + '';   
        result = 'gtrEgoist';
    }
}
})