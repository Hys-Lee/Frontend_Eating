import Header from './headers_components/Header';
import Sidebar from './headers_components/Sidebar';
import styled from "styled-components"
import { useCallback, useState } from 'react';
import MainBody from './main_componenets/MainBody';

// import './App.css';

const StyledApp = styled.div`
    display:flex;
    flex-direction: row; 
    justify-content:stretch;
    
    width:100vw;
    height:auto;

    /* top:0px; */
    
    
    /* overflow-x:hidden; */
`;

const MainSection = styled.div`
  display:flex;
  flex-direction:column;
  align-items:stretch;
  flex-shrink:1;
  flex-grow:1;
  max-width:100%;
  min-width:0%;
  /* height:auto; */

  /* height:${(props)=>{
    if(props.MouseElseWhere===true){
      return "auto";
    }else{
      return "auto";
    }
  }}; */
  
  
/*   
  height:100vh;
  overflow-y:hidden; */
  
  top:0px;
  
`;






export default function App() {
  const [sideSignals, setSideSignals] = useState({clicked:false, hovered:false});
  const [totalBedgeCount, setTotalBedgeCounts] = useState(0);
  const [scrollPrevented, setScrollPrevented] = useState(false);
  const [coverZindex, setCoverZindex]  = useState(-5); // 적당한 음수



  if(scrollPrevented){/// 나중에 처리
    console.log("hovering!!");
    
  }
  

  return (
    <div>
      <StyledApp 
        onKeyDown={()=>{coverZindex<0&&setCoverZindex(-1*coverZindex)}}
        onMouseMove={()=>{coverZindex>0&&setCoverZindex(-1*coverZindex);}}
      >
        
        {sideSignals.clicked&&<Sidebar onHoveredMouse={(newScrollPrevented)=>{setScrollPrevented(newScrollPrevented)}}  sideSignals={sideSignals}onClose={newSideSignals=>{setSideSignals(newSideSignals)}}/>}
        <MainSection>
        
          <Header
            coverZindex={coverZindex}
            onHoveredMouse={(newScrollPrevented)=>{setScrollPrevented(newScrollPrevented)}}
            sideSignals={sideSignals} 
            onShow={newSideSignals=>{setSideSignals(newSideSignals)}}
            bedgeCount={totalBedgeCount}
          />

          <MainBody 
            sideSignals={sideSignals}
            onHover={newSideSignals=>{setSideSignals(newSideSignals)}}
          />
        </MainSection>
        
        {/* hovered sidebar */}
     
        
     </StyledApp>

    
     

     {(sideSignals.hovered===true && sideSignals.clicked===false)&&
        <Sidebar 

          onHoveredMouse={(newScrollPrevented)=>{setScrollPrevented(newScrollPrevented)}}
          sideSignals={sideSignals}
          onClose={newSideSignals=>{setSideSignals(newSideSignals)}}
        />} 
      

    </div>
    
    
      // <div style={{'display':'flex'}}>
      //    <div>1</div>
      //    <div>2</div>
      // </div>
      
      
     

  );
}


