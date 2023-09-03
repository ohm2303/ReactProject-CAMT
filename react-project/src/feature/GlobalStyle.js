import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
.GrayBackground{
    background-color: #e7e7e7;
    border-radius: 5px;
    border: none;
    padding: 1.3%;
    margin-left: 25%;
    margin-right: 25%;
  
}
//Button


    .ButtonNormal {
      display: flex;
      justify-content: center;
      margin-left: auto;
      font-size: 15px;
      background-color: black; /* Change background color */
      border-radius: 30px;
      box-sizing: border-box;
      color: white; /* Change text color to black */
      border: none;
      padding: 5px 20px;
      cursor: pointer;
      transition: all 300ms cubic-bezier(0.23, 1, 0.32, 1);
      user-select: none;
      -webkit-user-select: none;
      touch-action: manipulation;
      align-items: center;
      font-family: Anuphan
    }
    
    .ButtonNormal:hover {
      color: white; /* Change text color to white */
      background-color: black; /* Change background color to black */
      box-shadow: rgba(0, 0, 0, 0.25) 0 8px 15px;
      transform: translateY(-2px);
    }
    
    .ButtonNormal:active {
      box-shadow: none;
      transform: translateY(0);
    }

    .iconInButtons{
      display:block;  
    }
        .textInButtons{
          padding-left: 15px;
          padding:10px;
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
margin-top:70px;
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

/*Dropdownmenu*/
@import url(https://fonts.googleapis.com/css?family=Roboto:400,700);

.DropdownMenu html {
  height: 100%;
  background-color: #f8f8f8;
}

.DropdownMenu body{
  overflow: hidden;
  height: fit-content;
  width: 600px;
  margin: 0 auto;
  background-color: #ffffff;
  font-family: 'Roboto', sans-serif;
  color: #555555;
}

.DropdownMenu a {
  text-decoration: none;
  color: inherit;
}

.DropdownMenu {
  box-sizing: border-box;
  padding:0px;
}

.DropdownMenu_menu {
  display: block;
  position: relative;
  cursor: pointer;
}

.DropdownMenu_menu-title {
  display: block;
  width: 130px;
  height: 40px;
  background: none;
  text-align: center;
  color: #ffffff;
  font-weight: bold;
  text-transform: uppercase;
  transition: 0.3s background-color;
}

.DropdownMenu_menu-title:before {
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

.DropdownMenu_menu-title:hover { 
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;}
.DropdownMenu_menu-title:hover:before { border-top-color: #8db842; }

.DropdownMenu_menu:hover > .menu-title:before {
  border-top-width: 0;
  transition:
    0.2s border-top-width ease-in,
    0.3s border-top-color;
}

.DropdownMenu_menu-title:after {
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

.DropdownMenu_menu:hover > .menu-title:after {
  border-bottom-width: 5px;
  transition: 0.2s 0.2s border-bottom-width ease-out;
}

.DropdownMenu_menu-title_2nd { background: #4e96b3; }
.DropdownMenu_menu-title_2nd:hover { background: #3e86a3; }
.DropdownMenu_menu-title_2nd:before { border-top-color: #4e96b3; }
.DropdownMenu_menu-title_2nd:hover:before { border-top-color: #3e86a3; }

.DropdownMenu_menu-title_3rd { background: #c97676; }
.DropdownMenu_menu-title_3rd:hover { background: #b96666; }
.DropdownMenu_menu-title_3rd:before { border-top-color: #c97676; }
.DropdownMenu_menu-title_3rd:hover:before { border-top-color: #b96666; }

.DropdownMenu_menu-title_4th { background: #dbab58; }
.DropdownMenu_menu-title_4th:hover { background: #cb9b48; }
.DropdownMenu_menu-title_4th:before { border-top-color: #dbab58; }
.DropdownMenu_menu-title_4th:hover:before { border-top-color: #cb9b48; }

.DropdownMenu_menu-dropdown {
  color:black;
  min-width: 100%;
  padding: 15px 0;
  position: absolute;
  background: #ebebeb;
  z-index: 100;
  transition:
    0.5s padding,
    0.5s background;
}

.DropdownMenu_menu-dropdown:after {
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

.DropdownMenu_menu:not(:hover) > .DropdownMenu_menu-dropdown {
  padding: 4px 0;
  background: white;
  z-index: 99;
}

.DropdownMenu_menu:not(:hover) > .DropdownMenu_menu-dropdown:after {
  border-top-color: white;
}

.DropdownMenu_menu:not(:hover) > .DropdownMenu_menu-title:after {
  border-bottom-color: white;
}

.DropdownMenu_menu-dropdown > * {
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

.DropdownMenu_menu-dropdown > *:hover {
  background: rgba(0,0,0,0.1);
}

.DropdownMenu_menu:not(:hover) > .DropdownMenu_menu-dropdown > * {
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

.DropdownMenu_List {
   list-style-type: none;
}

.DropdownMenu_List > * {
  float: left;
}
.DropdownMenu_menu-dropdown{
  margin:10px;
}
.DropdownMenu_List > * + * {
  margin-left: 0;
}
.DropdownMenu_pic{
  box-shadow:0 0 16px 7px #78A3D4,
  0 0 13px 1.5px #48abe0;
  ;
  
  border-radius:50% ;
  width: 40px;
  height: 40px;
}

.DropdownMenu_titleDetail{
  font-size: 18px;
  margin-top: -4.5vh;
  margin-left: 3.5vh;
  color: #fff;
  font-family: 'Anuphan';
}
.DropdownMenu_titlepic {
    display: flex;
    align-items: flex-end;
  }
  .DropdownMenu_List{
    padding: 0px;
    display:flex;
  }
  
`;
export default GlobalStyle;