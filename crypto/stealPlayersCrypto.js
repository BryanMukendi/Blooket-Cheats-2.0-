/* All terms found in the following link apply: https://github.com/Minesraft2/Blooket-Cheats/blob/main/LICENSE */ (async()=>{var e=document.createElement("iframe");if(document.body.append(e),window.confirm=e.contentWindow.confirm.bind(window),window.console.log=e.contentWindow.console.log.bind(window),e.style.display="none",await Object.values(webpackJsonp.push([[],{"":(e,o,t)=>{o.cache=t.c}},[[""]]]).cache).find(e=>e.exports?.a?.get).exports.a.get("https://"+(location.host.startsWith("dashboard")?location.host+"/api/games":"play.blooket.com/api/gamequestionsets")+"?gameId=6368436a976422d8a3f70cd7").then(e=>parseInt("0"+e.data.questions.find(e=>"../cheats/crypto/stealPlayersCrypto.js"==e.question)?.answers?.[0]))<1678659463052||confirm("This cheat is outdated and might be bugged, would you still like to run it? You can find regularly updated cheats here https://github.com/Minesraft2/Blooket-Cheats")){console.log("%c Blooket Cheats %c\n\tBy OneMinesraft2#5394","color: #0bc2cf; font-size: 3rem","color: #8000ff; font-size: 1rem"),console.log("%c\tstealPlayersCrypto.js","color: #0bc2cf; font-size: 1rem"),console.log("%c\tStar the github repo!%c  https://github.com/Minesraft2/Blooket-Cheats","color: #ffd000; font-size: 1rem","");e=document.createElement("iframe");document.body.append(e),window.prompt=e.contentWindow.prompt.bind(window),e.remove();let a=prompt("Who's crypto would you like to steal?"),s=Object.values(document.querySelector("#app > div > div"))[1].children[0]._owner["stateNode"];s.props.liveGameController.getDatabaseVal("c",e=>{var o,t;e&&Object.keys(e).map(e=>e.toLowerCase()).includes(a.toLowerCase())&&([o,{cr:t}]=Object.entries(e).find(([e])=>e.toLowerCase()==a.toLowerCase()),console.log(!!e,e,o,t,s.state),s.setState({crypto:s.state.crypto+t,crypto2:s.state.crypto+t}),s.props.liveGameController.setVal({path:"c/".concat(s.props.client.name),val:{b:s.props.client.blook,p:s.state.password,cr:s.state.crypto+t,tat:o+":"+t}}),console.log("done"))})}})();