import Text from "./SubComponent/Text";
import  "./AddBook.css";
import Input from "./SubComponent/Input";
import Dropdown from "./SubComponent/Dropdown";
import GrayBackground from "./SubComponent/GrayBackground";
import UploadFile from "./SubComponent/UploadFile";
import Button from "./SubComponent/Button";


const AddBook = () => {
    const test = () => {
        console.log("test");
    }
    return (
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Anuphan&family=Noto+Serif+Thai:wght@200;300&display=swap" rel="stylesheet"></link>
            <br/>
            <div style={{lineHeight: "0px"}}>
            <Text size={60} family={'Anuphan'} children={"เพิ่มหนังสือ"} weight={"600"} />
            <hr className="style1"/>
            </div>
            <GrayBackground>
            <div style={{lineHeight: "10px"}}>
            <Text size={25} family={'Noto Serif Thai'} children={"กรุณากรอกข้อมูล"} weight={"600"} />


            <div style={{display:"flex",boxSizing:"border-box",flexDirection: "row",marginLeft:"15%"}}>

            <div style={{display:'block',textAlign:"left",marginLeft:"6%"}}>
            <Text size={18} family={'Noto Serif Thai'} children={"ประเภท E-Book"} weight={"600"}/> 
            <Input type="text" placeholder="Enter something..."size={"small"}  />
            </div>

            <div style={{display:'block',textAlign:"left",marginLeft:"17%"}}>
            <Text size={18} family={'Noto Serif Thai'} children={"หมวดหมู่"} weight={"600"} />
            <Input type="text" placeholder="Enter something..."size={"small"}  />
            </div>

            </div>
            
            
            <div style={{display:"flex", flexContain:"start",marginLeft:"20%"}}>
            <div style={{textAlign:"left"}}>
            <Text size={18} family={'Noto Serif Thai'} children={"ชื่อหนังสือ"} weight={"600"}/>
            <Input type="text" placeholder="Enter something..."size={"500px"}  />
            </div>
            </div>
            
            <div style={{display:"flex", flexContain:"start",marginLeft:"20%"}}>
            <div style={{textAlign:"left"}}>
            <Text size={18} family={'Noto Serif Thai'} children={"ราคา"} weight={"600"} />
            <Input type="text" placeholder="Enter something..."size={"500px"}  />
            </div>
            </div>

            <div style={{display:"flex", flexContain:"start",marginLeft:"20%"}}>
            <div style={{textAlign:"left"}}>
            <Text size={18} family={'Noto Serif Thai'} children={"รูปหน้าปก"} weight={"600"} />
            <UploadFile className="UploadFileCSS" />
            </div>
            <div style={{textAlign:"left",marginLeft:"2%"}} >
            <Text size={18} family={'Noto Serif Thai'} children={"อัพตัวอย่างหนังสือ"} weight={"600"} />
            <UploadFile className="UploadFileCSS"  />
            </div>
            </div>

            <div style={{display:"flex", flexContain:"start",marginLeft:"20%"}}>
            <div style={{textAlign:"left"}}>
            <Text size={18} family={'Noto Serif Thai'} children={"อัพหนังสือฉบับเต็ม"} weight={"600"}/>
            <UploadFile className="UploadFileCSS"/>
            </div>
            
            </div> 
           
            </div>
            
            <Button css="buttonNormal " onClick={console.log("test")} value={"ADD BOOK"} />
            </GrayBackground>
        </div>
    );
}

export default AddBook;