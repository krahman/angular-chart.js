# angular-chart.js

Beautiful, reactive, responsive charts for Angular.JS using Chart.js. [Demo](http://jtblin.github.io/angular-chart.js/)

# Installation

    bower install angular-chart.js --save
    
or copy the files from `dist/`.

# Utilisation

There are 6 types of charts so 6 directives: `chart-line`, `chart-bar`, `chart-radar`, `chart-pie`, `chart-polar-area`, `chart-doughnut`.

They all use mostly the same API:

- `data`: series data
- `labels`: x axis labels (line, bar, radar) or series labels (pie, doughnut, polar area)
- `options`: chart options (as from [Chart.js documentation](http://www.chartjs.org/docs/))
- `series`: (default: `[]`): series labels (line, bar, radar)
- `click`: onclick event handler (line, radar)
- `legend`: (default: `false`): show legend below the chart

There is another directive `chart-base` that takes an extra attribute `chart-type` to define the type
dynamically.

# Example

## Markup

```html
<canvas id="line" class="chart chart-line" data="data" labels="labels" legend="true" series="series" click="onClick"></canvas> 
```

## Javascript

```javascript
angular.module("app", ["chart.js"]).controller("LineCtrl", ['$scope', '$timeout', function ($scope, $timeout) {

  $scope.labels = ["January", "February", "March", "April", "May", "June", "July"];
  $scope.series = ['Series A', 'Series B'];
  $scope.data = [
    [65, 59, 80, 81, 56, 55, 40],
    [28, 48, 40, 19, 86, 27, 90]
  ];
  $scope.onClick = function (points, evt) {
    console.log(points, evt);
  };
  
  // Simulate async data update
  $timeout(function () {
    $scope.data = [
      [28, 48, 40, 19, 86, 27, 90],
      [65, 59, 80, 81, 56, 55, 40]
    ];
  }, 3000);
}]);
```