

# Planning a React App
-

1. Component Structure/Tree  -  What functionality should be its own component. 

2. Application State/Data - What should the app data look like?

3. Components vs containers - which components should be stateless/functional 
or stateful/class 

-

# Burger Builder Application

## Component Tree:
	- App
		- Layout
			- Toolbar (fixed, will always show)
				- Drawer toggle
				- logo
				- navigation items
			- Side Drawer (fixed, will always show)
			 	- navigation items (can be shared with toolbar)
			 	- logo (can be shared with toolbar)
			- Backdrop (fixed, will always show)
				- html code.
			- Footer (fixed, will always show)
			- {props.children} : variable based on what we are rendering currently eg: Landing page, checkout page etc. 
				- Burger Builder Page 


## Burger Builder Page: Stateful Component that holds the state. np
	This page is supposed to give us the build controls - where we add the ingredients to the burger : meat, salad, cheese, fries etc. and a checkout button. 
		- Build Controls: 
				- build control 1, build control 2 ....
				- order button 
		- Burger
				- Ingredients displayed controlled by the buildcontrols
		- Modal 
				- re-usable modal that takes {props.children}
				Eg: Error message, confirmation message etc. 


## State:
	- Ingredients:
		{ meat:1, cheese:2}
	- purchased: true/false
	- total_price : 12.99 

	Where should the state sit ? In which component. We will place it in the Burger Builder Component. 

## Burger-builder Folder Structure:
	- Components (contains stateless/functional components)
	- Containers (contains stateful/class components)