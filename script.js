var App = angular.module('myApp', []);
App.controller('myCtrl', function($scope) {
    //$scope.dom = '<!DOCTYPE foo SYSTEM "Foo.dtd"><a><b>bbb</b><c/><d><soapenv:Envelope xmlns:soapenv="http://xxx" xmlns:xsd="http://yyy" xmlns:xsi="http://zzz"></soapenv></d><e><![CDATA[ <z></z> ]]></e><f><g></g></f></a>';
    //$scope.display = '<rss version=\'2.0\'><channel><title>BJP Title</title></channel>    </rss>'
    $scope.display = 'ABCD123456'
})

App.directive('prettyprint', function() {
    return {
        restrict: 'C',
        link: function postLink(scope, element, attrs) {
              element.text(vkbeautify.xml(scope.display, 4));
        }
    };
});
