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
    
    /* width:100%; */

    //test//
    overflow-y:hidden;

`;
const TitleBox = styled.div`
    width:90%;
    &>textarea{
        outline:none;
        resize:none;

        border:solid red 1px;
        font-size:1em;
        font-family:'Malgun gothic';
        font-weight:900;
        
        width:700px;
        
        overflow-y:visible; 
    }
`;

export default function MainBody({sideSignals, onHover}){
    const widthCheckerIdRef = useRef(null); // 있어야하나?
    const [fixedVeiwportWidth,setFixedViewportWidth ] = useState("100%");
    
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
        return ()=>{clearInterval(widthCheckerIdRef.current)};
    });

    let tmpArr = [];
    for (let i=0;i<500;i++){
        tmpArr.push(i);
    }
    return(<>
        <TriggerBox 
                    sideSignals={sideSignals} 
                    onHover={(newSideSignals)=>{onHover(newSideSignals)}}
            />
        
        <StyledMainBody>
            <TitleBox
                
            >
                <Block viewportWidth={fixedVeiwportWidth}/>
            </TitleBox>
            {tmpArr.map((attr)=>{
                return <div >{attr}</div>
            })}
        </StyledMainBody>
    </>);
}