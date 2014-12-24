app.controller('signupController',['$scope','userService',function($scope,userService){




      $scope.init=function()
      {
          $scope.getCssClass =["signup-page", "access-page", "has-full-screen-bg"];
          $scope.showSpinner=false;

      }

      $scope.signUp=function(isValid){

        if(isValid)
          {

              $scope.showSpinner=true;

              var signUpPromise=userService.signUp($scope.name,$scope.email,$scope.password);
              signUpPromise.then(
                  function(data){
                    console.log(data);
                     $scope.showSpinner=false;
                        //console.log(data);
                  },
                  function(error){
                        $scope.showSpinner=false;
                        $scope.err=error;
                  }
              );

          }
      };



      $scope.facebookSignUp=function(){

              $scope.showSpinner=true;

              var facebookSignUpPromise=userService.facebookSignUp();
              facebookSignUpPromise.then(
                  function(data){
                    console.log(data);
                     $scope.showSpinner=false;
                        //console.log(data);
                  },
                  function(error){
                        $scope.showSpinner=false;
                        $scope.err=error;
                  }
              );

      };

      $scope.googleSignUp=function(){
        
              $scope.showSpinner=true;
              var facebookSignUpPromise=userService.facebookSignUp();
              facebookSignUpPromise.then(
                  function(data){
                    console.log(data);
                     $scope.showSpinner=false;
                        //console.log(data);
                  },
                  function(error){
                        $scope.showSpinner=false;
                        $scope.err=error;
                  }
              );

      };


 }]);
