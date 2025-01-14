import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
 @import url("https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600&display=swap");
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  -web-font-smoothing: antialising;
  -mox-osx-font-smoothing: grayscale;
}

body {
  height: 100vh;
  width: 100vw;
  background: linear-gradient(180deg, #807ECE 0%, #8E7ECE 100%);
  display: grid;
  place-content: center;
}
body * {
  font-family: "Rubik", sans-serif;
  letter-spacing: 0.02em;
  color: #EBEBEB;
}
body #app {
  width: 356px;
  height: 566px;
  background: #2D2A37;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25), 0px 188px 52px rgba(0, 0, 0, 0.01), 0px 120px 48px rgba(0, 0, 0, 0.04), 0px 68px 41px rgba(0, 0, 0, 0.15), 0px 30px 30px rgba(0, 0, 0, 0.26), 0px 8px 17px rgba(0, 0, 0, 0.29), inset 0px 6px 8px rgba(255, 255, 255, 0.1), inset 0px -4px 5px rgba(0, 0, 0, 0.22);
  border-radius: 48px;
}
body #app #display {
  margin-top: 54px;
  padding-inline: 54px;
}
body #app #display #last-calc {
  text-align: right;
  font-size: 20px;
  line-height: 140%;
  color: #6B6B6B;
}
body #app #display #result {
  margin-top: 8px;
  display: flex;
  justify-content: space-between;
}
body #app #display #result span {
  font-size: 36px;
  line-height: 140%;
}
body #app #keyboard {
  margin-top: 26px;
  margin-inline: 32px;
  padding-bottom: 32px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
body #app #keyboard button {
  border: none;
  width: 64px;
  height: 64px;
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0%, rgba(255, 255, 255, 0.05) 100%), #2D2A37;
  box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.06);
  border-radius: 999px;
  font-size: 24px;
  line-height: 28px;
  cursor: pointer;
}
body #app #keyboard button:hover {
  box-shadow: none;
}
body #app #keyboard button.clear {
  color: #975DFA;
}
body #app #keyboard button.functions {
  background: linear-gradient(180deg, rgba(0, 0, 0, 0.05) 0.01%, rgba(255, 255, 255, 0.05) 100%), #462878;
  box-shadow: 0px 11px 7px rgba(0, 0, 0, 0.01), 0px 7px 7px rgba(0, 0, 0, 0.04), 0px 4px 6px rgba(0, 0, 0, 0.1), 0px 2px 4px rgba(0, 0, 0, 0.26), 0px 0px 2px rgba(0, 0, 0, 0.29), inset 0px 2px 3px rgba(255, 255, 255, 0.1);
}
body #app #keyboard button.functions:hover {
  box-shadow: none;
}

@media (max-width: 500px) {
  #app {
    width: 95%;
    height: 566px;
  }
}
`