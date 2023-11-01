## Lottery Simulator Demo App (UI only)

<!-- **Distributions:**  
PROD: [..](https://..)  
DEV:  [..](https://..) -->


### Project task description
A client wants to request a lottery simulator web application for research, the purpose of which is to show how many times - how many hits are achieved in how much time.

**Specification of the application**  
Similar to Lottery 5, you should be able to draw 5 numbers in a row from 1 to 90.

As in the lottery, no number can appear more than once in a draw. The user can see on the interface which numbers have been drawn. They should be able to enter their own numbers or play with random numbers. You can burn your own numbers into the code or create input fields that can actually be filled in. 
I would like to have a slider to control the speed of the draws. The slider speed should be variable between 1 second and 1 millisecond. Also, we would like to give the user the option to see how long they have been playing the lottery (I would like to show in years, once a week there is a draw). 

The interface should show how many tickets have been entered, how many 2, 3, 4 and 5 hit tickets have been entered, and how much money has been spent on tickets (the cost of a ticket in the app is 300 HUF)

In case the user has had 5 tickets, the draw should be stopped and the number of years elapsed should be highlighted (different from the previous status in terms of appearance).

**Design:**  

![Design](/docs/Lottery_simulator.png "Design")
