import { styled } from "styled-components";
import TriggerBox from './TriggerBox.js';
import { useState, useRef, useEffect } from "react";
import Block from './Block.js';
const StyledMainBody = styled.div`
    /* width:100vw;
    height:100vh; */
    /* border:solid black 1px; */
    padding:70px;

    flex-grow:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    
    /* width:90%; */

    //test//
    overflow-y:hidden;

`;
const TitleBox = styled.div`
    width:90%;
    margin:5px;
    &>div{
        height:100px;
        font-size:5em;
    }
    /* &>textarea{
        outline:none;
        resize:none;

        border:solid red 1px;
        font-size:1em;
        font-family:'Malgun gothic';
        font-weight:900;
        
        /* width:700px; */
        
        overflow-y:visible; 
    } */
`;
const ParagraphBox=styled.div`
    width:90%;
`;
const initContent={
    0:{
        "time":"0",
        text:"wake up",
        checked:true
    }
};
export default function MainBody({sideSignals, onHover}){
    const widthCheckerIdRef = useRef(null); // 있어야하나?
    const [fixedVeiwportWidth,setFixedViewportWidth ] = useState("100%");
    const [contents, setContents] = useState(initContent);
    // 1초마다 viewport 체크
    useEffect(()=>{
        let prevViewportWidth =fixedVeiwportWidth;
        let currViewportWidth = fixedVeiwportWidth;
        console.log("hi");
        widthCheckerIdRef.current = setInterval(()=>{
            console.log("tic");
            prevViewportWidth = currViewportWidth;
            currViewportWidth = document.documentElement.clientWidth;
            
            console.log(`prev: ${prevViewportWidth} curr: ${currViewportWidth}`);

            if(prevViewportWidth === currViewportWidth){
                clearInterval(widthCheckerIdRef.current);
                setFixedViewportWidth(currViewportWidth);
                console.log(currViewportWidth);
            }

        },1000)
        console.log(widthCheckerIdRef.current);
    });




    let tmpArr = [];
    for (let i=0;i<500;i++){
        localStorage.setItem(`${i}`, i);
        tmpArr.push(localStorage.getItem(`${i}`));
    }



    function addTodo(){
        localStorage.setItem()
    }

    return(<>
        <TriggerBox 
                    sideSignals={sideSignals} 
                    onHover={(newSideSignals)=>{onHover(newSideSignals)}}
            />
        
        <StyledMainBody>
            <TitleBox
                
            >
                <Block  isTItle={true}>Todo</Block>
            </TitleBox>
            <ParagraphBox>
                {tmpArr.map((attr, index)=>{
                    return <Block content={contents[index]} onContent={setContents}  isTItle={false}>{attr}</Block>
                })}
            </ParagraphBox>
            
        </StyledMainBody>
    </>);
}