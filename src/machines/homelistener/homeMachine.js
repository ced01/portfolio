import { createMachine, invoke, transition, reduce, guard, state} from 'robot3';

const wait = (duration) => {
  return new Promise( resolve => {
    window.setTimeout(() => {
      resolve();
    }, duration )
  });
}

/* let create a machine for authentification, with different state : edit, loading, error and success*/

const homeMachine = createMachine('welcome', {
    welcome:invoke(
      () => wait(2000),
      transition("done","askname", reduce((ctx,ev) => ({ ...ctx, speak:true }))),
    ),
    askname: invoke(
      () => wait(2000),
      transition("done", "hide", reduce((ctx) => ({ ...ctx, msg: "Comment vous appelez vous ?", speak:true }))),
    ),
    hide:invoke(
      () => wait(2000),
      transition("done", "askwho", reduce((ctx) => ({ ...ctx, speak:false }))),
    ),
    askwho: state(
      transition("question","responseforname", reduce((ctx,ev) => { console.log(ev); return { ...ctx, msg: "Hey, "+ ev.value + " est-ce bon ?", potentialSurname:ev.value, speak:true }}))
    ),
    responseforname : state(
      transition("response","confirmation", reduce((ctx,ev) => ({ ...ctx, msgClass: "hide", response: ev.value, speak:false })))
    ),
    confirmation:invoke(
      () => wait(2000),
      transition("done", "listen", reduce((ctx,ev) => ( { ...ctx, response : ev.value,msg: "Je m'appelle Cédric Lautard, ingénieur web et freelance", surname:ctx.potentialSurname, speak: true, emotion:"", emotionpicture:"" })), guard((ctx) => { return (ctx.response.includes("oui") || ctx.response.includes("yes"))})),
      transition("done", "askwho", reduce((ctx,ev) => ( { ...ctx, response : ev.value,msg: "Pouvez vous répeter votre nom ?", speak: true })), guard((ctx) => { return (ctx.response.includes("non") || ctx.response.includes("no"))})),
    ),
    /*listen: state(
      transition("question", "responseformsg", reduce((ctx,ev) => ({ ...ctx, msg: "J'ai compris cela '"+ ev.value +"' est ce bon ? (répondre oui ou non)", textFromVoice: ev.value, speak:true })))
    ),
    responseformsg : state(
      transition("response","msgconfirmation", reduce((ctx,ev) => ({ ...ctx, responseformsg: ev.value, speak:false })))
    ),
    msgconfirmation: invoke(
      () => wait(2000),
      transition("done", "loading", reduce((ctx) => { console.log(ctx); return { ...ctx, msg: "Je vois, laissez moi deviner...", speak:true }}), guard((ctx) => { console.log(ctx.responseformsg); return ctx.responseformsg.includes("oui") })),
      transition("done", "listen", reduce((ctx) => ( { ...ctx, msg: "Veuillez me répéter vos pensées.", speak:true })), guard((ctx) => ctx.responseformsg.includes("non"))),
    ),
    loading:invoke(
      (ctx) => emotionRecognition(ctx.textFromVoice),
      transition("done", "emotionfound", reduce((ctx,ev) => { console.log(ev.data); return { ...ctx, emotionpicture:ev.data.data.informations.emotion, emotion : ev.data.data.negationPercentage >= 0.15 ? "not  " + ev.data.data.informations.emotion : ev.data.data.informations.emotion, speak:true }})),
      //transition("error", "confirmation", reduce((ctx) => ({ ...ctx, msg : "Veuillez vérifier votre réseau", speak:true })))
    ),
    emotionfound : invoke(
      () => wait(8000), 
      transition("done", "confirmation", reduce((ctx) => ({...ctx, response : "success" }))),
    )*/
}, () => ({ 
  title: "Bienvenue dans mon portfolio", 
  potentialSurname: "", 
  surname: "", 
  msg:"", 
  textFromVoice:"", 
  response: "", 
  responseformsg:"", 
  nameSaved:false, 
  speak:false, 
  emotions:[] 
}));

export default homeMachine;