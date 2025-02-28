
# Catch Captain : A Coin-Catching Game!
![lightmode](/assets/catch.png)  

| Catch Captain Logo|  

| ![lightmode](/assets/project-light.png) | ![darkmode](/assets/project-dark.png) |
|---------------------------|---------------------------|
| light Theme               | Dark Theme                |


## Overview
**Catch Captain** is an interactive browser game where players control a bucket to catch falling coins while avoiding missing too many. The objective is to **collect 10 coins** to win the game before running out of lives.

[Play Now](https://daninorth.github.io/browser-based-game/)  

[View Code on GitHub](https://github.com/DaniNorth/browser-based-game.git)

## How to Play
- Use the **Left** and **Right** arrow keys to move the bucket.
- Catch **falling coins** to **increase your score**.
- Missing coins reduces your **lives**.
- If you collect **10 coins**, you **win the game**!
- If you lose all your **lives**, it's **Game Over**.
- Click the **"How to Play"** button for instructions (pauses the game).
- Click **Restart** to play again.

## Features
- **Chanable Theme** – Dynamic light/dark mode with a background that changes accordingly.  
- **Randomized Gameplay** – Responsive movement and random falling objects.  
- **Pause** – The game pauses when the **How to Play** window is open.  
- **Win & Lose Conditions** – Track scores and lives to determine the game's outcome.  
- **Restart** – Quickly restart the game after winning or losing with the click of a button.  

## Project Structure
Catch-Captain/  
│── assets/    
    ├── # various media files    
│── index.html  
│── README.md   
│──── css/    
    ├── style.css  
|── app.js


## ⚙️ Installation & Setup
1. **Clone the repository**  
   ```sh
   git clone https://github.com/your-username/catch-captain.git

## Planning Proposal
**Project Proposal:** *Falling Object Catch Game*  

I want to create my own game where the player catches falling objects. The goal is to build a fun and engaging experience with increasing difficulty.  
Minimum Viable Product (MVP)  

- The game will feature a simple board where objects fall from the top.
- The player will control a container (e.g., a basket) to catch objects.
- A counter will track the player's score.
- Animations will be implemented using CSS.
- Win/Loss Conditions:  
-- The player wins if they collect 10 objects.  
-- The player loses if they miss 3 objects.  
-- A restart button will appear when the game ends.  

**Enhancements & Next Steps**  

*Adding Visuals*
- Replace CSS shapes with actual images for the falling objects and player container.
- Introduce "bad" falling objects that count as a missed object if caught.  
  
*Increasing Difficulty*
- Implement a timer that gradually increases the falling speed, 
- making the game more challenging over time.
  
*Advanced Features*  

- Increase the number of "bad" falling objects in proportion to the falling speed.
- Allow players to select different difficulty levels.

## credits and tools used
Logo and background video creation through Canva and downloaded 

used ChatGPT for project planning, indentifiying in-game functions like 
- requestAnimationFrame(callback: FrameRequestCallback): number;  
- setTimeout(handler: TimerHandler, timeout?: number, ...arguments: any[]): number;

other assets from
utilized assets from Google fonts icons for dark and light mode icons

image assets credits
- [Bucket](https://www.cleanpng.com/png-copper-product-design-7248495/)
- [Coin](https://pngtree.com/freepng/glossy-golden-coin_4199602.html)
- [Interface background](https://i.pinimg.com/736x/30/3f/2c/303f2c41db5dc4d8d4c1ca739487e8b1.jpg)

