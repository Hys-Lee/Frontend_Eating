import {useCallback, useEffectEvent, useEffect, useState, useRef, useMemo} from 'react';
import { styled } from 'styled-components';
import menuSVG from '../svgs/menu_dot.svg';

const Textbox=styled.div`
    // height은 제외. js로 통제 중
    /* box-sizing:content-box; */

    /* padding:0; // scrollHeight -> height 할 때, padding은 0이어야 맞게 된다. */
    /* height:0; */
    
    
    /* height:${props=>props.scrollHeight}; */
    padding:0;
    margin:2px;
    width:100%;
    height:100%;
    display:flex;
    align-items:center;
`;
const StyledBLock=styled.div`
    display:flex;
    &>button{
        background:ivory;
        width:1.5em;
        height:1.5em;
        padding:0;
        margin:1px;
        border:1px solid grey;

        /* display:flex;
        justify-content:center;
        align-items:center;
        &>img{
        width:1em;
        } */
    }
`;
// setInterval(()=>{console.log(document.documentElement.clientWidth);},1000);
export default function Block({isTItle, children, content, onContent}){

    // const textRef = useRef(null);
    // // const [state, setState] = useState(0);
    // // // console.log(textRef.current.scrollHeight);
    // // const textareaHeight = textRef.current?textRef.current.style.height:0;
    // // const textareaWidth = textRef.current?textRef.current.style.width:`100%`;
    // // useEffect(()=>{

    // //     let theWidth = document.documentElement.clientW0idth;
    // //     setState(theWidth);
    // // },[state]);
    
    
    
    // // const textWidth = textRef.current?textRef.current.style.width : 0;
    // const [scrollHeight,setSCrollHeight] =useState('');// = textRef.current?`${textRef.current.scrollHeight}px` : 0;
    // console.log(`scrollHeight:${scrollHeight}`);
    // const handleHeight = ()=>{
    //     // setSCrollHeight('auto');
    //     // setSCrollHeight(`${textRef.current.scrollHeight}px`);
    //     // console.dir(textRef.current);

    //     // console.log(`${textRef.current.style.height} vs. ${textRef.current.scrollHeight} `);
    //     // if(textRef.current.style.height !== `${textRef.current.scrollHeight}px`){
    //     //     textRef.current.style.height = 'auto';
    //     //     textRef.current.style.height = `${textRef.current.scrollHeight}px`;
    //     // }
        

        
    //     // console.log(`${textRef.current.style.height} vs. ${textRef.current.scrollHeight} `);
    // };

    // useEffect(()=>{
    //     // console.log(`${textRef.current.style.height} vs. ${textRef.current.scrollHeight} `);
    //     // textRef.current.style.height = 0;
    //     // textRef.current.style.height = `${textRef.current.scrollHeight}px`;
    //     // console.log(`${textRef.current.style.height} vs. ${textRef.current.scrollHeight} `);
    //     handleHeight();
    // }, [viewportWidth]);
    

    // // useEffect(()=>{
    // //     handleHeight();
    // // }, [textWidth]);
    
    function textChange(e){
        const newContent={...content, text:e.target.value}
        onContent((rest)=>({...rest, newContent}));
    }
    return(
        <StyledBLock>
            
            {/* <StyledTextarea
                ref={textRef}
                onInput={handleHeight}
                
            /> */}
            {!isTItle&&<button>X</button>}
            {!isTItle&&<button>O</button>}
            {/* {!isTItle&&<button><img src={menuSVG} alt="menu"/></button>} */}
            <Textbox role='textbox' contentEditable onInput={e=>{textChange(e)}}>{children}</Textbox>
            {/* {!isTItle&&<div>{content.time}</div>} */}
        </StyledBLock>);
} 