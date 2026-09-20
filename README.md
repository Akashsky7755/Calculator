# 🧮 Spider-Man Calculator

A simple and interactive calculator built using **HTML, CSS, and
JavaScript**, featuring a full-screen Spider-Man video background and
keyboard support.

## ✨ Features

-   Basic arithmetic operations: `+`, `-`, `*`, `/`
-   Percentage `%` operation
-   Decimal calculations
-   `AC` button to clear the complete expression
-   `DEL` button to remove the last character
-   `=` button to calculate the result
-   Keyboard support for:
    -   Numbers `0–9`
    -   `+`, `-`, `*`, `/`, `%`
    -   Decimal `.`
    -   `Enter` / `=`
    -   `Backspace`
    -   `Escape` / `Delete`
-   Horizontal scrolling for long expressions
-   Full-screen looping Spider-Man video background
-   Dark overlay for better calculator visibility
-   Responsive full-screen layout

## 🛠️ Technologies Used

-   **HTML5** --- Calculator structure and background video
-   **CSS3** --- Styling, layout, buttons, video background, and overlay
-   **JavaScript** --- Calculator functionality and keyboard controls

## 📁 Project Structure

``` text
Spider-Man-Calculator/
│
├── index.html
├── style.css
├── app.js
├── spiderman.mp4
└── README.md
```

## 🚀 How to Run

1.  Download or clone the project.
2.  Keep `index.html`, `style.css`, `app.js`, and `spiderman.mp4` in the
    same folder.
3.  Open `index.html` in a web browser.
4.  Start using the calculator.

## ⌨️ Keyboard Shortcuts

  Key                   Action
  --------------------- -----------------------
  `0–9`                 Enter number
  `+ - * / %`           Enter operator
  `.`                   Decimal point
  `Enter` / `=`         Calculate
  `Backspace`           Delete last character
  `Escape` / `Delete`   Clear calculator

## 🎨 UI

The calculator uses a dark, semi-transparent interface with rounded
buttons and orange operator/equal-button accents. A looping Spider-Man
video is displayed as the full-screen background.

## ⚙️ Implementation

The calculator stores the current expression in a JavaScript string and
updates the display whenever the expression changes. Button clicks and
keyboard events are both supported.

The current implementation uses JavaScript's `eval()` function to
evaluate the entered mathematical expression.

## 📌 Note

Make sure `spiderman.mp4` is present in the project directory. The HTML
references it directly as the background video.

## 👨‍💻 Author

**Akash Gautam**

------------------------------------------------------------------------

⭐ If you like this project, feel free to customize the design, add
scientific calculator functions, sound effects, themes, or more keyboard
shortcuts.
