### What is MEAN?

 - M ==> mongoDB
 - E ==> Express framework for NodeJS
 - A ==> Angular
 - N ==> NodeJs

### What is Angular?

  - A Client-side (Browser)Framework which allows you to build Single-Page-Applications (SPA)
    - Render UI with Dynamic Data 
    - Handle User Input
    - Communicate with Backend Services
    - Provides a "Mobile App" - like User Experience

### What is NodeJS?

  - A Server-side Library: JavaScript on the Server-side
    - Listen to Requests and Send Responses
    - Execute Server-side Logic
    - Interact with Databases and Files
    - An Alternative to PHP, Ruby on Rails, Java etc. Is rarely used Standalone!

### What is Express?

  - A Node Framework which simplifies writing Server-side Code and Logic.
    - Based on Node, offers same Functionalities.
    - Middleware-based: Funnel Requests through Functions.
    - Includes Routing, View-rendering & More.
    - Simplifies the Usage of Node, Express is for Node what Laravel would for PHP.

### What is mongoDB?

  - A NoSQL Database which stores "Documents" in "Collections" (instead of "Recors" in "Tables" as in SQL).
    - Store Application Data (Users, Product,...)
    - Enforces no DAta Schema or Relation
    - Easily connected to Node/ Express (NOT to Angular!)
    - A powerful Database which can easily be integrated into Node/ Express Environment

Requirements

  - NodeJS
  - Angular CLI
  - mongoDB
  - express related packages for BE

#### 1. Angular

  - New App is created then need to add in declarations section in module
  - Add FormsModule for directives to work like ngModel for inbuilt declaration and add it in imports section in module.

To Assign Values to component
  1. To set values from imput we can use `#postInput` and use it as function parameters. It provies element
  2. Using directives like ngModel

Angular Material can be used for prebuilt components

