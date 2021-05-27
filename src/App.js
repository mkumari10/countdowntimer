import React,{useState} from 'react';
import './App.css';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import PinterestIcon from '@material-ui/icons/Pinterest';
import Cardtime from './Cardtime';

function App(){
  let dateobj,todayDay,todayhrs,todaymin,todaysec;
  dateobj=new Date();
  todayDay=dateobj.getDate();
  todayhrs=dateobj.getHours();
  todaymin=dateobj.getMinutes();
  todaysec=dateobj.getSeconds();

  const [cSec,setcSec] = useState(todaysec);
  const [cMin,setcMin] = useState(todaymin);
  const [cHrs,setcHrs] = useState(todayhrs);
  const [cDays,setcDays] = useState(todayDay);

   setTimeout(() => {
    todaysec=dateobj.getSeconds();
    if(todaysec<=9){
      var tsec='0'+todaysec;
      setcSec(tsec); 
    }else{
      setcSec(todaysec); 
    }
   }, 1000);
 
    React.useEffect(() => {
    },[cSec]);

    setTimeout(() =>{     
    todaymin=dateobj.getMinutes();
    if(todaymin<=9){
      var tmin='0'+todaymin;
      setcMin(tmin); 
    }else{
      setcMin(todaymin); 
    }
    },1000);

    React.useEffect(() => {
    },[cMin]);

    setTimeout(() =>{  
    todayhrs=dateobj.getHours();
    if(todayhrs<=9){
      var thrs='0'+todayhrs;
      setcHrs(thrs); 
    }else{
      setcHrs(todayhrs); 
    }
    },1000);

    React.useEffect(() => {
    },[cHrs]);


    setTimeout(() =>{  
      todayDay=dateobj.getDate();
      if(todayDay<=9){
        var tdays='0'+todayDay;
        setcDays(tdays); 
      }else{
        setcDays(todayDay); 
      }
      },1000);
  
      React.useEffect(() => {
      },[cDays]);

  const styleForicon = {
    fontSize: '27px',
    padding: '0.5em',
    color:'hsl(237, 18%, 59%)'
  };

  const Appcard = {
     display:'flex',
     fontSize:'4em',
     backgroundColor:'hsl(236, 21%, 26%)',
     justifyContent: 'center',
     alignItems: 'center',
     margin:'0px 15px',
     padding:'0.4em 0.6em',
     width: '4.3vw',
     color:'hsl(345, 95%, 68%)',
     boxShadow: 'rgb(28 26 32) 0px 11px 0px',
     borderRadius:'0.2em',
     position:'relative',
     zIndex:'1'
    
  }

  const cardtext = {
     color:'hsl(237, 18%, 59%)',
     fontSize:'1em',
     padding:'1em',
     paddingTop: '1.8em',
    letterSpacing: '3px',
    textTransform: 'uppercase',
    position:'relative'
  }

  return (
    <div className="App fluid-container">
      <header className="App-header">
        <h2>We're launching soon</h2>
      </header>
      <div className='App-content'>
         <Cardtime cardStyle={Appcard} textstyle={cardtext} cardcont={cDays} ctext='Days'/>
         <Cardtime cardStyle={Appcard} textstyle={cardtext} cardcont={cHrs} ctext='Hours'/>
         <Cardtime cardStyle={Appcard} textstyle={cardtext} cardcont={cMin} ctext='Minutes'/>
         <Cardtime cardStyle={Appcard} textstyle={cardtext} cardcont={cSec} ctext='Seconds'/>
      </div>
      <div className="social-block">
         <a href='https://www.instagram.com/manju_10k'><FacebookIcon style={styleForicon} className='socialicon'/></a>
         <a href='https://www.instagram.com/manju_10k'><PinterestIcon  style={styleForicon} className='socialicon'/></a>
         <a href='https://www.instagram.com/manju_10k'><InstagramIcon style={styleForicon}  className='socialicon'/></a>
      </div>
    </div>   
  );
}
export default App;
