import { createGlobalStyle } from "styled-components";
const  GlobalStyle = createGlobalStyle`

a{
  text-decoration: none;
  color: #fff;
}



.GrayBackground{
    background-color: #e7e7e7;
    border-radius: 5px;
    border: none;
    padding: 1.3%;
    margin-left: 25%;
    margin-right: 25%;
  
}
//Button
.ButtonNormal{
  border-radius: 30px;
  border: none;
  padding: 1.3%;

  background-image: linear-gradient(
    to right,
    #57646d,
    #edf0f1,
    #0d3142 100%,
    #20385B 200%
  );
  text-shadow: 0 1px 1px #333;
  transition: all 0.25s;
  transform: scale(0.8);
  background-position-x: 0%;
  background-size: 300%;
  height: 5.5vh;

  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-bottom-width:3px;
  border-bottom-color: #000000;
  border-bottom-style:solid;
  transform: scale(0.9);
}
.ButtonNormal:hover{
  cursor: pointer;
  background-position-x: 100%;
  transform: scale(1.05);
}
.iconInButtons{
  display:block;  
}
    .textInButtons{
      padding-left: 15%;
      margin-top: -5%;
      font-size:20px;
    }

// selectForpay
.cssB{
margin-top: 20%;
}
.buttonDelete{
    width: 70%;
    color: aliceblue;
    font-family:'Noto Serif Thai', serif;
}
.titleBook{
    font-size: 20px;
    line-height: 20%;
}
.pic{
    display: block;
    width: 15%;
}
img{
    width: 100%;
}
.icon{
    width: 30%;
}
// ADD BOOK
@font-face {
    font-family: Doknatle;
    src: url("/src/asset/Doknatle-d9YRE.otf") format("opentype");
}
body{
    text-align: center;
}
hr { border-left: 0; }
hr.style1{
	border-top: 2px solid #000000 ;
    width: 50%
} 
.input-Big-group {
    display:flex;
    flex-Direction:row;
    text-Align:left;
    justify-content: flex-start;
}
.input-Big-group1{
    display:flex;
    flex-Direction:row;
    text-Align:left;
}
.input-group0{
    display:flex;
    flex-direction: column;
    margin-left: 6%;


}
.input-group1{
    display:flex;
    flex-direction: column;
    margin-left: 17%;

}
.input-group2{
    display:flex;
    flex-direction: column;
    align-items: flex-start;
    margin-Left:6%;
}
.input-group3{
    display:flex;
    flex-direction: column;
    margin-Left:8%;
}
.input-group4{
text-align: left;
}
.input-group5{
display:flex;
flex-direction: column;
align-items: start;
margin-Left:6%;
}
.UploadFileCSS1{
  width: 248%;
}
.text0{
    font-family:'Noto Serif Thai', serif;
    font-size: 25px;
    font-weight:600;
}
.text1{
    font-family:'Noto Serif Thai', serif;
    font-size: 18px;
    font-weight:600;
}
.text2{
    font-family:'Noto Serif Thai', serif;
    font-size: 18px;
    font-weight:600;
    margin-left: 5%;
}
//login-p
.popupBackground {
    padding: 30px;
    background-color: white;
    z-index: 2;
    position:fixed; 
    top: 50%;
    left:50%;
    transform: translate(-50%, -50%);
    opacity: 1;
    width: 29%;
    height: 62%;
    border-radius:2% ;
}
.textButton{
    font-size: 12px;
    padding: 8px;
    width: 30%;
    height: 90%;
    font-family:'Anuphan';
    font-weight:bolder;
}
hr.style2{
    border-top: 2px solid #000000 ;
    width: 80%
} 

.test{
border: 1.5px solid #000000;
}

.textButtonLogin{
    font-size: 14px;
    padding: 12px;
    font-family:'Anuphan';
    font-weight:bolder;
}
.iconXmark{
    position: absolute;
    top: 3%;
    left: 90%;
 
}
//busket-p
.busketPage{
display: flex;
flex-direction: column;
}
 
.textS{
    font-family:"Anuphan";
    color: gray;
    font-weight: 400;
    font-size: 24px;
    line-height: 40px;
}
.textB{
    line-height: 2px;
    font-family:"Anuphan";
    font-weight: revert;
}
//load-p
.loadBlackground{

    background-color: #000000;
    width: 100%;
    height: max-content;
}
.wrapper {
  width: 200px;
  height: 100vh;
  position: relative;
  z-index: 1;
}

.circle {
  margin-top: 45vh;
  width: 20px;
  height: 20px;
  position: absolute;
  border-radius: 50%;
  background-color: #fff;
  left: 15%;
  transform-origin: 50%;
  animation: circle7124 .5s alternate infinite ease;
}

@keyframes circle7124 {
  0% {
    top: 60px;
    height: 5px;
    border-radius: 50px 50px 25px 25px;
    transform: scaleX(1.7);
  }

  40% {
    height: 20px;
    border-radius: 50%;
    transform: scaleX(1);
  }

  100% {
    top: 0%;
  }
}

.circle:nth-child(2) {
  left: 45%;
  animation-delay: .2s;
}

.circle:nth-child(3) {
  left: auto;
  right: 15%;
  animation-delay: .3s;
}

.shadow {
  width: 20px;
  height: 4px;
  border-radius: 50%;
  background-color: rgba(0,0,0,0.9);
  position: absolute;
  top: 62px;
  transform-origin: 50%;
  z-index: -1;
  left: 15%;
  filter: blur(1px);
  animation: shadow046 .5s alternate infinite ease;
}

@keyframes shadow046 {
  0% {
    transform: scaleX(1.5);
  }

  40% {
    transform: scaleX(1);
    opacity: .7;
  }

  100% {
    transform: scaleX(.2);
    opacity: .4;
  }
}

.shadow:nth-child(4) {
  left: 45%;
  animation-delay: .2s
}

.shadow:nth-child(5) {
  left: auto;
  right: 15%;
  animation-delay: .3s;
}

// 
@import url(https://fonts.googleapis.com/css?family=Roboto:400,700);

html {
  height: 100%;
  background-color: #f8f8f8;
}

body {
  overflow: hidden;
  height: 100%;
  width: 600px;
  margin: 0 auto;
  background-color: #ffffff;
  font-family: 'Roboto', sans-serif;
  color: #555555;
}

a {
  text-decoration: none;
  color: inherit;
}

* {
  box-sizing: border-box;
}



.menu {
  display: block;
  position: relative;
  cursor: pointer;
}

.menu-title {
  display: block;
  width: 130px;
  height: 40px;
  padding: 12px 0 0;
  background: #9dc852;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.3s background-color;
}

.menu-title:before {
  content: "";
  display: block;
  height: 0;
  border-top: 5px solid #9dc852;
  border-left: ($menu_WIDTH / 2) solid transparent;
  border-right: ($menu_WIDTH / 2) solid transparent;
  border-bottom: 0 solid #dddddd;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 101;
  transition:
    0.2s 0.2s border-top ease-out,
    0.3s border-top-color;
}

.menu-title:hover { background: #8db842; }
.menu-title:hover:before { border-top-color: #8db842; }

.menu:hover > .menu-title:before {
  border-top-width: 0;
  transition:
    0.2s border-top-width ease-in,
    0.3s border-top-color;
}

.menu-title:after {
  content: "";
  display: block;
  height: 0;
  border-left: ($menu_WIDTH / 2) solid transparent;
  border-right: ($menu_WIDTH / 2) solid transparent;
  border-bottom: 0 solid #ebebeb;
  position: absolute;
  bottom: 0;
  left: 0;
  z-index: 101;
  transition: 0.2s border-bottom ease-in;
}

.menu:hover > .menu-title:after {
  border-bottom-width: 5px;
  transition: 0.2s 0.2s border-bottom-width ease-out;
}

.menu-title_2nd { background: #4e96b3; }
.menu-title_2nd:hover { background: #3e86a3; }
.menu-title_2nd:before { border-top-color: #4e96b3; }
.menu-title_2nd:hover:before { border-top-color: #3e86a3; }

.menu-title_3rd { background: #c97676; }
.menu-title_3rd:hover { background: #b96666; }
.menu-title_3rd:before { border-top-color: #c97676; }
.menu-title_3rd:hover:before { border-top-color: #b96666; }

.menu-title_4th { background: #dbab58; }
.menu-title_4th:hover { background: #cb9b48; }
.menu-title_4th:before { border-top-color: #dbab58; }
.menu-title_4th:hover:before { border-top-color: #cb9b48; }

.menu-dropdown {
  min-width: 100%;
  padding: 15px 0;
  position: absolute;
  background: #ebebeb;
  z-index: 100;
  transition:
    0.5s padding,
    0.5s background;
}

.menu-dropdown:after {
  content: "";
  display: block;
  height: 0;
  border-top: 5px solid #ebebeb;
  border-left: ($menu_WIDTH / 2) solid transparent;
  border-right: ($menu_WIDTH / 2) solid transparent;
  position: absolute;
  top: 100%;
  left: 0;
  z-index: 101;
  transition: 0.5s border-top;
}

.menu:not(:hover) > .menu-dropdown {
  padding: 4px 0;
  background: #dddddd;
  z-index: 99;
}

.menu:not(:hover) > .menu-dropdown:after {
  border-top-color: #dddddd;
}

.menu:not(:hover) > .menu-title:after {
  border-bottom-color: #dddddd;
}

.menu-dropdown > * {
  overflow: hidden;
  height: 30px;
  padding: 5px 10px;
  background: rgba(0,0,0,0);
  white-space: nowrap;
  transition: 
    0.5s height cubic-bezier(.73,.32,.34,1.5),
    0.5s padding cubic-bezier(.73,.32,.34,1.5),
    0.5s margin cubic-bezier(.73,.32,.34,1.5),
    0.5s 0.2s color,
    0.2s background-color;
}

.menu-dropdown > *:hover {
  background: rgba(0,0,0,0.1);
}

.menu:not(:hover) > .menu-dropdown > * {
  visibility: hidden;
  height: 0;
  padding-top: 0;
  padding-bottom: 0;
  margin: 0;
  color: rgba(25,25,25,0);
  transition: 
    0.5s 0.1s height,
    0.5s 0.1s padding,
    0.5s 0.1s margin,
    0.3s color,
    0.6s visibility;
  z-index: 99;
}

.hList {
   list-style-type: none;
}

.hList > * {
  float: left;
}

.hList > * + * {
  margin-left: 0;
}
.pic{
  margin-top: -0.5vh;
  margin-left: 0.5vh;
  border-radius:50% ;
  width: 30px;
  height: 30px;
}
.titleDetail{
  font-size: 6px;
  margin-top: -3.5vh;
  margin-left: 3.5vh;
  color: #000;
  font-family: 'Anuphan';
}
`;
export default GlobalStyle;