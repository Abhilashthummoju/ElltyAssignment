import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

function App() {
  return (
    <div style={{display:'flex',flexDirection:'row',backgroundColor:'#e1e1e1',height:'100vh'}}>

      {/* -----------------------FIRST COMPONENT---------------------------- */}
      <div style={{display:"flex",flexDirection:'column',width:"380px",height:"200px",marginTop:20}}>
        <button style = {{border: 'none',margin:"12px",width:"340px",height:"40px",backgroundColor:'#FFCE22',padding: "10px, 20px, 10px, 20px",borderRadius:"4px"}}>Done</button>
        <button style = {{border: 'none',margin:"12px",width:"340px",height:"40px",backgroundColor:'#FFD84D',padding: "10px, 20px, 10px, 20px",borderRadius:"4px"}}>Done</button>
        <button style = {{border: 'none',margin:"12px",width:"340px",height:"40px",backgroundColor:'#FFCE22',padding: "10px, 20px, 10px, 20px",borderRadius:"4px"}}>Done</button>
      </div>


      {/* ------------------------SECOND COMPONENT--------------------------- */}
      <div style={{width:"65px",height:'425px',marginTop:20}}>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:"12px",width:'25px',height:'25px',borderRadius:'6px',backgroundColor:'#FFFFFF',position:'absoulte',top:20,left:20}}></div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:"12px",width:'25px',height:'25px',borderRadius:'6px',backgroundColor:'#FFFFFF',position:'absoulte',top:20,left:20}}>
        <FontAwesomeIcon icon={faCheck} style={{ opacity: 0.10 }} />
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:"12px",width:'25px',height:'25px',borderRadius:'6px',backgroundColor:'#FFFFFF',position:'absoulte',top:20,left:20}}>
        <FontAwesomeIcon icon={faCheck} style={{ opacity: 0.25 }} />
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:"#5087F8",margin:"12px",width:'25px',height:'25px',borderRadius:'6px',position:'absoulte',top:20,left:20}}>
        <FontAwesomeIcon icon={faCheck} style={{ opacity: 1,color:'#FFFFFF' }} />
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:"12px",width:'25px',height:'25px',borderRadius:'6px',backgroundColor:'#2469F6',position:'absoulte',top:20,left:20}}>
        <FontAwesomeIcon icon={faCheck} style={{ opacity: 1,color:'#FFFFFF' }} />
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:"12px",width:'25px',height:'25px',borderRadius:'6px',backgroundColor:'#5087F8',position:'absoulte',top:20,left:20}}>
        <FontAwesomeIcon icon={faCheck} style={{ opacity: 1,color:'#FFFFFF' }} />
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:"12px",width:'25px',height:'25px',borderRadius:'6px',backgroundColor:'#2469F6',position:'absoulte',top:20,left:20}}>
        <FontAwesomeIcon icon={faCheck} style={{ opacity: 1,color:'#FFFFFF' }} />
        </div>

        <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:"12px",width:'25px',height:'25px',borderRadius:'6px',backgroundColor:'#FFFFFF',position:'absoulte',top:20,left:20}}>
        <FontAwesomeIcon icon={faCheck} style={{ opacity: 0.15 }} />
        </div>
        <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:"12px",width:'25px',height:'25px',borderRadius:'6px',backgroundColor:'#FFFFFF',position:'absoulte',top:20,left:20}}></div>
      </div>



      {/* ----------------------------------THHIRD COMPONENT---------------------------- */}
      <div style={{width:"410px",height:"520px",marginTop:"15px",display:"flex",justifyContent:"center",flexDirection:"column",alignItems:'center'}}>
        <div style={{width:"370px",height:'42px',backgroundColor:"#FFFFFF",display:"flex",justifyContent:"space-between",alignItems:'center'}}>
          <label color='black' style={{marginLeft:"15px",fontSize:"13px"}}>All Pages</label>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:"12px",width:'23px',height:'23px',borderRadius:'6px',backgroundColor:'#FFFFFF',border:"1px solid",borderColor:"#c9c9c9"}}></div>
        </div>
        <div style={{marginTop:"20px",width:"370px",height:'42px',backgroundColor:"#FFFFFF",display:"flex",justifyContent:"space-between",alignItems:'center'}}>
          <label color='black' style={{marginLeft:"15px",fontSize:"13px"}}>All Pages</label>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:"12px",width:'23px',height:'23px',borderRadius:'6px',backgroundColor:'#FFFFFF',border:"1px solid",borderColor:"#c9c9c9"}}>
          <FontAwesomeIcon icon={faCheck} style={{ opacity: 0.10 }} />
          </div>
        </div>
        <div style={{marginTop:"20px",width:"370px",height:'42px',backgroundColor:"#FFFFFF",display:"flex",justifyContent:"space-between",alignItems:'center'}}>
          <label color='black' style={{marginLeft:"15px",fontSize:"13px"}}>All Pages</label>
          <div style={{boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",display:'flex',justifyContent:'center',alignItems:'center',margin:"12px",width:'23px',height:'23px',borderRadius:'6px',backgroundColor:'#FFFFFF',border:"1px solid",borderColor:"#787878"}}>
          <FontAwesomeIcon icon={faCheck} style={{ opacity: 0.20 }} />
          </div>
        </div>
        <div style={{width:"370px",marginTop:"20px",height:'42px',backgroundColor:"#FFFFFF",display:"flex",justifyContent:"space-between",alignItems:'center'}}>
          <label color='black' style={{marginLeft:"15px",fontSize:"13px"}}>All Pages</label>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',backgroundColor:"#5087F8",margin:"12px",width:'23px',height:'23px',borderRadius:'6px',position:'absoulte',top:20,left:20}}>
            <FontAwesomeIcon icon={faCheck} style={{ opacity: 1,color:'#FFFFFF' }} />
          </div>
        </div>
        <div style={{width:"370px",height:'42px',marginTop:"20px",backgroundColor:"#FFFFFF",display:"flex",justifyContent:"space-between",alignItems:'center'}}>
          <label color='black' style={{marginLeft:"15px",fontSize:"13px"}}>All Pages</label>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:"12px",width:'23px',height:'23px',borderRadius:'6px',backgroundColor:'#2469F6',position:'absoulte',top:20,left:20}}>
            <FontAwesomeIcon icon={faCheck} style={{ opacity: 1,color:'#FFFFFF' }} />
          </div>
        </div>
        <div style={{width:"370px",height:'42px',marginTop:"20px",backgroundColor:"#FFFFFF",display:"flex",justifyContent:"space-between",alignItems:'center'}}>
          <label color='black' style={{marginLeft:"15px",fontSize:"13px"}}>All Pages</label>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:"12px",width:'23px',height:'23px',borderRadius:'6px',backgroundColor:'#5087F8',position:'absoulte',top:20,left:20}}>
            <FontAwesomeIcon icon={faCheck} style={{ opacity: 1,color:'#FFFFFF' }} />
          </div>
        </div>
        <div style={{width:"370px",height:'42px',marginTop:"20px",backgroundColor:"#FFFFFF",display:"flex",justifyContent:"space-between",alignItems:'center'}}>
          <label color='black' style={{marginLeft:"15px",fontSize:"13px"}}>All Pages</label>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:"12px",width:'23px',height:'23px',borderRadius:'6px',backgroundColor:'#2469F6',position:'absoulte',top:20,left:20}}>
            <FontAwesomeIcon icon={faCheck} style={{ opacity: 1,color:'#FFFFFF' }} />
          </div>
        </div>

        <div style={{width:"370px",marginTop:"20px",height:'42px',backgroundColor:"#FFFFFF",display:"flex",justifyContent:"space-between",alignItems:'center'}}>
          <label color='black' style={{marginLeft:"15px",fontSize:"13px"}}>All Pages</label>
          <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:"12px",width:'23px',height:'23px',borderRadius:'6px',backgroundColor:'#FFFFFF',position:'absoulte',border:"1px solid",borderColor:"#c9c9c9"}}>
            <FontAwesomeIcon icon={faCheck} style={{ opacity: 0.15 }} />
          </div>
        </div>
      </div>


      {/* ------------------------------------FOURTH COMPONENT--------------------------------- */}
      <div style={{width:"578px",height:"794px",display:"flex",backgroundColor:"#FFFFff"}}>
        <div style={{padding:"10px 0px 10px 0px",boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",width:"370px",height:"326px",border:"1px solid",backgroundColor:"white",position:"relative",top:"85px",left:"104px",borderRadius:"6px",borderColor:"#c9c9c9"}}>
          <div style={{width:"370px",height:'42px',backgroundColor:"#FFFFFF",display:"flex",justifyContent:"space-between",alignItems:'center'}}>
            <label color='black' style={{marginLeft:"15px",fontSize:"13px"}}>All Pages</label>
            <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:"12px",width:'23px',height:'23px',borderRadius:'6px',backgroundColor:'#FFFFFF',border:"1px solid",borderColor:"#c9c9c9"}}></div>
          </div>
          <div style={{width:"370px",height:"20px",padding:"10px 15px 10px 15px",display:"flex"}}>
            <div style={{width:"340px", height: "0.7px",border:"none", borderBottom: "0.7px solid black" }}></div>
          </div>
          <div style={{width:"370px",height:"164px",marginTop:"-10px"}}>
            <div style={{width:"370px",height:'42px',backgroundColor:"#FFFFFF",display:"flex",justifyContent:"space-between",alignItems:'center'}}>
              <label color='black' style={{marginLeft:"15px",fontSize:"13px"}}>Page 1</label>
              <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:"12px",width:'23px',height:'23px',borderRadius:'6px',backgroundColor:'#FFFFFF',border:"1px solid",borderColor:"#c9c9c9"}}></div>
            </div>
            <div style={{width:"370px",height:'42px',backgroundColor:"#FFFFFF",display:"flex",justifyContent:"space-between",alignItems:'center'}}>
              <label color='black' style={{marginLeft:"15px",fontSize:"13px"}}>Page 2</label>
              <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:"12px",width:'23px',height:'23px',borderRadius:'6px',backgroundColor:'#FFFFFF',border:"1px solid",borderColor:"#c9c9c9"}}></div>
            </div>
            <div style={{width:"370px",height:'42px',backgroundColor:"#FFFFFF",display:"flex",justifyContent:"space-between",alignItems:'center'}}>
              <label color='black' style={{marginLeft:"15px",fontSize:"13px"}}>Page 3</label>
              <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:"12px",width:'23px',height:'23px',borderRadius:'6px',backgroundColor:'#FFFFFF',border:"1px solid",borderColor:"#c9c9c9"}}></div>
            </div>
            <div style={{width:"370px",height:'42px',backgroundColor:"#FFFFFF",display:"flex",justifyContent:"space-between",alignItems:'center'}}>
              <label color='black' style={{marginLeft:"15px",fontSize:"13px"}}>Page 4</label>
              <div style={{display:'flex',justifyContent:'center',alignItems:'center',margin:"12px",width:'23px',height:'23px',borderRadius:'6px',backgroundColor:'#FFFFFF',border:"1px solid",borderColor:"#c9c9c9"}}></div>
            </div>
          </div>
          <div style={{width:"370px",height:"20px",padding:"10px 15px 10px 15px",display:"flex"}}>
            <div style={{width:"340px", height: "0.7px",border:"none", borderBottom: "0.7px solid black" }}></div>
          </div>
          <div style={{width:"370px",height:"60px",display:"flex",justifyContent:"center",alignItems:"center",marginTop:"-15px"}}>
          <button style = {{border: 'none',width:"340px",height:"40px",backgroundColor:'#FFCE22',padding: "10px, 20px, 10px, 20px",borderRadius:"4px"}}>Done</button>
          </div>
        </div>
      </div>
    </div>
  );
}


export default App;
