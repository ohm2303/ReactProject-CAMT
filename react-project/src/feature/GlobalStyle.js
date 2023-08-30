import { createGlobalStyle } from "styled-components";

const  GlobalStyle = createGlobalStyle`
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
`;
export default GlobalStyle;