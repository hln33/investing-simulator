# Investment Sim

CMPT-372 - Investment Simulator

This is an Investment Simulator program created for CMPT-372.

Work Flow Expectations:
- Make PRs only for dev branch (dev branches from master)
- Don't merge your own PRs
- Make a branch for every issue

<h2>How to access the VM through a GUI using Chrome Remote Desktop:</h2><br>
- go to this page: https://remotedesktop.google.com/headless.<br>
- keep pressing the blue button until you get to the "authorize button". Click <br>
the button and on the next page, copy the text below "debian linux".<br>
- ssh into the VM through GCP and once you have access into the terminal, paste and enter the text (NOTE: the text does have a time limit)<br>
- input a passkey which you'll use to access the GUI.<br>
- you can now access the GUI with your created passkey through this page: https://remotedesktop.google.com/<br>
<br>
If stuck, check out this tutorial -- the section regarding chrome remote desktop should be helpful.
<br>
<h2>How to access PostGresql:</h2><br>
- enter: su – postgres <br>
- password is: 12345 <br>
- to access the postgres shell, enter: psql <br>
- to access the investment-sim database, enter: psql investment-sim <br>
- if you want to exit the current db, enter: \q <br>
- to list databases, enter: \dt <br>
<br>
More PostGresql commands here: https://hasura.io/blog/top-psql-commands-and-flags-you-need-to-know-postgresql/ </br>





Team Members:
-------------
Andy C.
Mathew W.
Harry N.
Denzel N.
