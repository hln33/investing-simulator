# Investment Sim

CMPT-372 - Investment Simulator

This is an Investment Simulator program created for CMPT-372.

Work Flow Expectations:
- Make PRs only for dev branch (dev branches from master)
- Don't merge your own PRs
- Make a branch for every issue

<h2>How to access the VM through a GUI using Chrome Remote Desktop:</h2>
- go to this page: https://remotedesktop.google.com/headless.
- keep pressing the blue button until you get to the "authorize button". Click 
the button and on the next page, copy the text below "debian linux".
- ssh into the VM through GCP and once you have access into the terminal, paste and enter the text (NOTE: the text does have a time limit)
- input a passkey which you'll use to access the GUI.
- you can now access the GUI with your created passkey through this page: https://remotedesktop.google.com/

If stuck, check out this tutorial -- the section regarding chrome remote desktop should be helpful.

<h2>How to access PostGresql:</h2>
- enter: su – postgres
- password is: 12345
- to access the postgres shell, enter: psql
- to access the investment-sim database, enter: psql investment-sim
- if you want to exit the current db, enter: \q
- to list databases, enter: \dt

More PostGresql commands here: https://hasura.io/blog/top-psql-commands-and-flags-you-need-to-know-postgresql/





Team Members:
-------------
Andy C.
Mathew W.
Harry N.
Denzel N.
