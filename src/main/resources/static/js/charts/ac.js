/**
 * 
 */
var app = angular.module('angularChartApp', ['chart.js']);  
app.controller('angularPieChartController', function ($scope,$http) {
$scope.data=[];	$scope.labels = [];
	$http.get('./chartData/').then(function(response){
//		$scope.result ={"order_count":2,"order_type":"Critical Order"},{"order_count":1,"order_type":"New Order"},{"order_count":3,"order_type":"Order in Progess"};
//			JSON.parse (JSON.stringify(response.data));
		$scope.result = response.data ;
		for(var i = 0;i<$scope.result.length;i++){
			$scope.data.push($scope.result[i]);
			$scope.labels.push($scope.result[i+1]);
			i++;
		}
	   },function (error){
		   alert("error");
	   }); 
//    $scope.labels = ["Internet bill", "School fee", "House budget"];
//    $scope.data = [100,300,700];
    //Make sure to use color codes, instead of color name.
    $scope.colorsPie = ['#90EE90', '#FF6600', '#8080FF','#803690', '#00ADF9', '#DCDCDC', '#46BFBD', '#FDB45C',]; 
    //PieDataSetOverride is used to draw lines to display the labels
    $scope.PieDataSetOverride = [{ yAxisID: 'y-axis-1' }]; //y-axis-1 is the ID defined in scales under options.
    $scope.optionsPie = {
        legend: { display: true },
        responsive: true,  // set to false to remove responsiveness. Default responsive value is true.
        scales: {
            yAxes: [
              {
                  id: 'y-axis-1',
                  type: 'linear',
                  display: true,
                  position: 'left'
              }]
        }
    }
    $scope.clickme = function($event){
        alert(points+"You've clicked upon "+$event[0]._view.label);
        var points = getPointsAtEvent($event);
        alert(chart.datasets[0].points.indexOf(points[0]));
    } 
});
