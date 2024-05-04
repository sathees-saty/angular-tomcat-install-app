# angular-tomcat-install-app
angular-tomcat-install-app
* npm, node and tomcat already installed
* Installl Angular
* D:\angular-js-development>npm install -g @angular/cli@latest
* D:\angular-js-development>ng --help -> to see the available commands
* D:\angular-js-development>ng version -> to see angular version
* D:\angular-js-development >ng new my-angular-app
* This will create a new AngularJS application in the my-angular-app directory.
* D:\angular-js-development >cd my-angular-app
* D:\angular-js-development >ng build
* This will build the AngularJS application and create a dist folder in the my-angular-app directory.
* To deploy the AngularJS application to Tomcat, you need to copy the contents (ie: newly created** my-angular-app** folder) of the dist folder to the webapps folder of the Tomcat server. The webapps folder is typically located in the C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps directory.
* To start the Tomcat server, open a command prompt and navigate to the bin folder of the Tomcat server. Then, run the following command:
* D:\Tomcat\apache-tomcat-9.0.87-windows-x64\apache-tomcat-9.0.87\bin>startup.bat
* Open my-angular-app directory under tomcat installed folder
* Create WEB-INF and inside WEB-INF created classes folder
* Create html file under webapps project fodder  **my-angular-app**
* Run http://localhost:8080/my-angular-app/HelloHome.html
* ![image](https://github.com/sathees-saty/angular-tomcat-install-app/assets/65384711/cb1d1907-46cd-45c1-838e-7b191ec2d6d0)
* Hide div tag:
* localhost:8080/my-angular-app/hidediv.html
* ![image](https://github.com/sathees-saty/angular-tomcat-install-app/assets/65384711/c6bf730a-c783-415a-baaa-45bad243116f)
* Shopping List:
* files: app.js styles.css myshoppinglist.html
* ![image](https://github.com/sathees-saty/angular-tomcat-install-app/assets/65384711/c5290215-1068-4ca9-9ff0-7026e630dd57)
* Tomcat folder:
* ![image](https://github.com/sathees-saty/angular-tomcat-install-app/assets/65384711/3b03861d-3152-4a31-be9a-9f544c39b523)
* VS IDE :
* ![image](https://github.com/sathees-saty/angular-tomcat-install-app/assets/65384711/2eda5412-3042-44f0-841e-eceefec3cb37)
* redirect to external URL and internal URL
* create inputform.html and submit-form.html
* ![image](https://github.com/sathees-saty/angular-tomcat-install-app/assets/65384711/da02dcac-9b0d-418c-872e-9d1bb222bbb4)






