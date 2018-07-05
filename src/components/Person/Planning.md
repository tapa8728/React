

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
			- Side Drawer (fixed, will always show)
			- Backdrop (fixed, will always show)
			- Footer (fixed, will always show)
			- {props.children} : variable based on what we are rendering currently eg: Landing page, checkout page etc. 
