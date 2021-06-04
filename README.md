# VeloHints

Welcome to the VeloHints project!

## Description

Using VeloHints you will be able to pave the way for cycling from anywhere in the world to anywhere! 
In addition to this, you will get the hints from the other users and also will be 
able to give them. You can leave information about bad road, incidents, parking places
and so on.


## Prerequisites
To work with this project you need firstly install it:

```git clone https://github.com/muliarska/delta_velo_hints```


In addition to this, install

- **yarn or npm**

## Project structure

- ```src``` folder contains all needed components and views that are used to build the application.

## Usage

First of all you need to run the program:

```
$ cd delta_velo_hints
$ yarn start (or npm start)
```

Then you need to redirect to login page:

You have for example ```http://localhost:3000/``` but you need ```http://localhost:3000/login```. Just write the ```login```
near in the initial http.

1. You need to register in our site and then to log in


   ![](https://github.com/muliarska/delta_velo_hints/blob/main/usage_example/sign_up.png)
   ![](https://github.com/muliarska/delta_velo_hints/blob/main/usage_example/login.png)


2. Then you will be redirected to the map page, where you are able to create a route from one place
to another.
   You just need to click on the place where you are and the second click will be your destination. 
   Then the route will be created and will look like this:
   
   ![](https://github.com/muliarska/delta_velo_hints/blob/main/usage_example/routing.png)

3. After that you are able to put markers about bad road, accidents, parking places that will
be useful for other users.

   ![](https://github.com/muliarska/delta_velo_hints/blob/main/usage_example/markers.png)


## Important

You can only put markers NEAR the route(NOT ON THE ROUTE) or in other parts of the map.

In the current stage global data storage of markers is not working yet.


## Contributors

- [Khrystyna Kokolus](https://github.com/khristinakokolus)
- [Yana Muliarska](https://github.com/muliarska)
- [Yaroslav Prytula](https://github.com/SlavkoPrytula)
- [Andriy Turko](https://github.com/AndriiTurko)
