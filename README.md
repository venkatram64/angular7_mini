# AssignmentsApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 7.3.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).


step 1: ng new my_app


step 2: 
npm install --save @angular/material @angular/cdk @angular/animations

step 3: ng g c <name of the component>

        ng g c --spec='false' <name of the component>

step 4: create "shared" dir in src/app location
 cd src\app\shared ng g d --spec='false' submitted

 step 5: cd scr\app\assignment
 ng g c assignment_details

 step 6:at app level :
 ng g c --spec="false" add-assignment

 Creating Services:
 step 1: go to shared folder
 cd src\app\shared ng g s --spec='false' assignment

 step 2: go to shared folder
 cd src\app\shared ng g s --spec='false' logging