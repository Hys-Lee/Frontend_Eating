import {useCallback, useEffectEvent, useEffect, useState, useRef, useMemo} from 'react';
import { styled } from 'styled-components';


const StyledTextarea=styled.textarea`
    // height은 제외. js로 통제 중
    box-sizing:content-box;

    /* padding:0; // scrollHeight -> height 할 때, padding은 0이어야 맞게 된다. */
    height : ${props=>props.scrollHeight};
    margin:0;
    width:100%;
`;
// setInterval(()=>{console.log(document.documentElement.clientWidth);},1000);
export default function Block({viewportWidth}){
    const textRef = useRef(null);
    // const [state, setState] = useState(0);
    // // console.log(textRef.current.scrollHeight);
    // const textareaHeight = textRef.current?textRef.current.style.height:0;
    // const textareaWidth = textRef.current?textRef.current.style.width:`100%`;
    // useEffect(()=>{

    //     let theWidth = document.documentElement.clientW0idth;
    //     setState(theWidth);
    // },[state]);
    
    
    
    // const textWidth = textRef.current?textRef.current.style.width : 0;
    const [scrollHeight,setSCrollHeight] =useState('');// = textRef.current?`${textRef.current.scrollHeight}px` : 0;
    console.log(scrollHeight);
    const handleHeight = ()=>{
        setSCrollHeight(`${textRef.current.scrollHeight}px`);
        // console.log(`${textRef.current.style.height} vs. ${textRef.current.scrollHeight} `);
        // textRef.current.style.height = 0;
        // textRef.current.style.height = `${textRef.current.scrollHeight}px`;
        // console.log(`${textRef.current.style.height} vs. ${textRef.current.scrollHeight} `);
    };
    // useEffect(()=>{
    //     console.log(`${textRef.current.style.height} vs. ${textRef.current.scrollHeight} `);
    //     textRef.current.style.height = 0;
    //     textRef.current.style.height = `${textRef.current.scrollHeight}px`;
    //     console.log(`${textRef.current.style.height} vs. ${textRef.current.scrollHeight} `);
    // }, [viewportWidth]);
    

    // useEffect(()=>{
    //     handleHeight();
    // }, [textWidth]);
    

    return(
        <div>
            
            <StyledTextarea
                ref={textRef}
                onInput={handleHeight}
                scrollHeight={scrollHeight}
            />
        </div>);
} 