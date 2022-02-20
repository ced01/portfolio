import React, { useEffect } from 'react';
import { Row, Col, Button, Image, Container } from 'react-bootstrap';
import SpRecognition from '../../browserutils/speechrecognition/speechrecognition';
import useListenerMachine  from "../../hooks/homelistener/useHomeMachine";
import listenerMachine from "../../machines/homelistener/homeMachine";
import Typography from '@material-ui/core/Typography';
import LazyLoad from 'react-lazyload';
import "./home.css";

import imagePath1 from "../../assets/pictures/others/web-technology-2.jpeg";
import imagePath2 from "../../assets/pictures/others/formation.jpeg";

const synth = window.speechSynthesis;
let voices = [];

function setSpeech(){
  return new Promise(
    function (resolve, reject) {
      let id = null;
      id = setInterval(() => {
        if (synth.getVoices().length !== 0) {
          resolve(synth.getVoices());
          clearInterval(id);
        }
      }, 10);
    }
  )
}

if( voices.length === 0 ){
  setSpeech().then((vs) => voices = vs);
}

function Listener () {

  const { state, context, send } = useListenerMachine(listenerMachine);
  const listenMode = ["askwho","responseforname"].includes(state);
  const spRecognition = new SpRecognition();
  

  useEffect(()=> {

    let timer = null;
    //speak(context.msg);
    if( listenMode ){
      if(state === "askwho"){
        spRecognition.setOnResult("question",send);
      }
      if(state === "responseforname"){
        spRecognition.setOnResult("response",send);
      }
      spRecognition.start();
      
      spRecognition.getInstance().addEventListener('audioend', async () => {
        await new Promise(( resolve, reject ) => { 
          timer = setTimeout(() => {
            console.log('Speech instance is no more listenning, let start it again ');
            spRecognition.stop();
            resolve('Speech recognition instance stopped');
          }, 5000 );
         }).then((value)=> { 
          spRecognition.start();
            if(state === "askwho"){
              spRecognition.setOnResult("question",send);
            }
            if(state === "responseforname"){
              spRecognition.setOnResult("response",send);
            } 
        });
      });
    }
    return () => clearTimeout(timer);
  },[state,listenMode,send]);

  return (
    <Container fluid className="dialog">
      <Row>
        <Col md="8" sm="12" >
          <Typography variant="h5">{ context.title + (context.surname ? ", "+ context.surname : "") + "." }</Typography><br></br>
          <Typography variant="h6">{ context.msg + ( listenMode ?  " Je vous écoute..." : "" )  }</Typography>
        </Col>
      </Row><br></br>
      <Row>
        <Col md="6" sm="12">
          <LazyLoad once>
            <Image src={imagePath1} rounded className="home-picture"/>
          </LazyLoad>  
        </Col>
        <Col md="6" sm="12">
            <Row>
              <Col>
                <LazyLoad once>
                  <Image src={imagePath2} rounded className="home-picture2" height="400px"/>
                </LazyLoad>
              </Col>
            </Row><br/><br/>
            <Row>
              <Col md="6" sm="8">
                <Button className="home-btn" variant="secondary"  href="https://data-driven-hr.fr/" target="_blanck"> {"Je propose des services web"}</Button>
              </Col>
              <Col md="6" sm="4">
                <Button className="home-btn" variant="dark" href="/contact"> { ( !listenMode ? context.surname : "" ) + " contacte moi" } </Button>
              </Col>
            </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default Listener;