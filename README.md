# Investment Sim

CMPT-372 - Investment Simulator

This is an Investment Simulator program created for CMPT-372.

<h1>Work Flow Expectations:</h1>
- Make PRs only for dev branch (dev branches from master)<br>
- Don't merge your own PRs<br>
- Make a branch for every issue<br>

<h1>Frontend Information:</h1>

How to start the client:<br>
- from the root, cd into client<br>
- run: npm start<br>

Main UI Library: Prime React - https://primereact.org/

What it is:
- Includes a list of components which we can use to help speed up component creation. Site includes well-documented components which contain different class names to modify the components.

Notes on how to use it:
- If using a component from PrimeReact, instead of importing the components directly into the file you're working on, wrap the component into our own component. This way, if we decide to change UI frameworks, we only need to change the code from the component we created rather than changing every single import involving PrimeReact. Or don't :D

<hr>

Main CSS Library: Prime Flex - https://www.primefaces.org/primeflex/

What it is:
- PrimeFlex works hand-in-hand with PrimeReact and has a number of CSS classes which range from using flexbox to organizing a grid layout (the grid classes are extremely from personal experience)

<hr>

<h1>Backend Information:</h1>

How to start the server:<br>
- from the root, run: npm start<br>
- NOTE: nodemon has been installed so dont worry about refreshing the server to apply updates; it will do it automatically<br>

<h2>How to access the VM through a GUI using Chrome Remote Desktop:</h2>
- go to this page: https://remotedesktop.google.com/headless.<br>
- keep pressing the blue button until you get to the "authorize button". Click <br>
the button and on the next page, copy the text below "debian linux".<br>
- ssh into the VM through GCP and once you have access into the terminal, paste and enter the text (NOTE: the text does have a time limit)<br>
- input a passkey which you'll use to access the GUI.<br>
- you can now access the GUI with your created passkey through this page: https://remotedesktop.google.com/<br>
<br>
If stuck, check out this tutorial -- the section regarding chrome remote desktop should be helpful.
<br>
<h2>How to access PostGresql:</h2>
- enter: su – postgres <br>
- password is: 12345 <br>
- to access the postgres shell, enter: psql <br>
- to access the investment-sim database, enter: psql investment-sim <br>
- if you want to exit the current db, enter: \q <br>
- to list all tables, enter: \dt <br>
<br>

<h3>UPDATE:</h3>
- installed a PostGresql GUI using pgadmin4; can find it inside the top-left activities button of the desktop (search pgadmin)<br>
- this is connected to the local PostGresql DB, which should make it easier for future development<br>

More PostGresql commands here: https://hasura.io/blog/top-psql-commands-and-flags-you-need-to-know-postgresql/ </br>

Team Members:
-------------
Andy C.
Mathew W.
Harry N.
Denzel N.