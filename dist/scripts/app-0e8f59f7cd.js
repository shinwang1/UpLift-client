!function(){"use strict";angular.module("formIo",["ngSanitize","ngMessages","ngAria","ui.router","ui.bootstrap","toastr","formio","ngFormioHelper"])}(),function(){"use strict";function e(e,t,a){function o(){i(),e(function(){r.classAnimation="rubberBand"},4e3)}function n(){a.info('Fork <a href="https://github.com/Swiip/generator-gulp-angular" target="_blank"><b>generator-gulp-angular</b></a>'),r.classAnimation=""}function i(){r.awesomeThings=t.getTec(),angular.forEach(r.awesomeThings,function(e){e.rank=Math.random()})}var r=this;r.awesomeThings=[],r.classAnimation="",r.creationDate=1469214618949,r.showToastr=n,o()}e.$inject=["$timeout","webDevTec","toastr"],angular.module("formIo").controller("MainController",e)}(),function(){"use strict";function e(e){e.init()}e.$inject=["FormioAuth"],angular.module("formIo").run(e)}(),function(){"use strict";function e(e,t){e.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}),t.otherwise("/")}e.$inject=["$stateProvider","$urlRouterProvider"],angular.module("formIo").config(e)}(),function(){"use strict";angular.module("formIo").constant("malarkey",malarkey).constant("moment",moment)}(),function(){"use strict";function e(e,t,a,o,n){e.debugEnabled(!0),a.setBaseUrl("https://api.form.io"),o.setStates("auth.login","home"),o.setStates("auth.register","home"),o.setForceAuth(!0),o.register("login","user","user/login"),o.register("register","user","user/register"),t.allowHtml=!0,t.timeOut=3e3,t.positionClass="toast-top-right",t.preventDuplicates=!0,t.progressBar=!0}e.$inject=["$logProvider","toastrConfig","FormioProvider","FormioAuthProvider","FormioResourceProvider"],angular.module("formIo").config(e)}(),angular.module("formIo").run(["$templateCache",function(e){e.put("app/main/main.html",'<div class=container><div><acme-navbar creation-date=main.creationDate></acme-navbar></div><div class="jumbotron text-center"><h1>\'Allo, \'Allo!</h1><p class=lead><img src=assets/images/yeoman.png alt="I\'m Yeoman"><br>Always a pleasure scaffolding your apps.</p><p class="animated infinite" ng-class=main.classAnimation><button type=button class="btn btn-lg btn-success" ng-click=main.showToastr()>Splendid Toastr</button></p><p>With ♥ thanks to the contributions of<acme-malarkey extra-values="[\'Yeoman\', \'Gulp\', \'Angular\']"></acme-malarkey></p></div><div class=row><div class="col-sm-6 col-md-4" ng-repeat="awesomeThing in main.awesomeThings | orderBy:\'rank\'"><div class=thumbnail><img class=pull-right ng-src="assets/images/{{ awesomeThing.logo }}" alt="{{ awesomeThing.title }}"><div class=caption><h3>{{ awesomeThing.title }}</h3><p>{{ awesomeThing.description }}</p><p><a ng-href={{awesomeThing.url}}>{{ awesomeThing.url }}</a></p></div></div></div></div></div>')}]);
//# sourceMappingURL=../maps/scripts/app-0e8f59f7cd.js.map
