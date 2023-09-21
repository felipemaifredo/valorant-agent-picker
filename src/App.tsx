import React from 'react';
import './App.css';

import imgAstra from './icons/astra.png';
import imgAstra2 from './splashs/astra.png';

import imgbreach from './icons/breach.png';
import imgbreach2 from './splashs/breach.png';

import imgbrimstone from './icons/brimstone.png';
import imgbrimstone2 from './splashs/brimstone.png';

import imgchamber from './icons/chamber.png';
import imgchamber2 from './splashs/chamber.png';

import imgcypher from './icons/cypher.png';
import imgcypher2 from './splashs/cypher.png';

import imgdeadlock from './icons/deadlock.png';
import imgdeadlock2 from './splashs/deadlock.png';

import imgfade from './icons/fade.png';
import imgfade2 from './splashs/fade.png';

import imggekko from './icons/gekko.png';
import imggekko2 from './splashs/geeko.png';

import imgharbor from './icons/harbor.png';
import imgharbor2 from './splashs/harbor.png';

import imgjett from './icons/jett.png';
import imgjett2 from './splashs/jett.png';

import imgkayo from './icons/kayo.png';
import imgkayo2 from './splashs/kayo.png';

import imgkilljoy from './icons/killjoy.png';
import imgkilljoy2 from './splashs/killjoy.png';

import imgneon from './icons/neon.png';
import imgneon2 from './splashs/neon.png';

import imgomen from './icons/omen.png';
import imgomen2 from './splashs/omen.png';

import imgphoenix from './icons/phoenix.png';
import imgphoenix2 from './splashs/phoenix.png';

import imgraze from './icons/raze.png';
import imgraze2 from './splashs/raze.png';

import imgreyna from './icons/reyna.png';
import imgreyna2 from './splashs/reyna.png';

import imgsage from './icons/sage.png';
import imgsage2 from './splashs/sage.png';

import imgsova from './icons/sova.png';
import imgsova2 from './splashs/sova.png';

import imgviper from './icons/viper.png';
import imgviper2 from './splashs/viper.png';

import imgyoru from './icons/yoru.png';
import imgyoru2 from './splashs/yoru.png';

import imgskye from './icons/skye.png';
import imgskye2 from './splashs/skye.png';

import { useState } from 'react';

function App() {
  const [agentSorted, setAgentSorted] = useState<AgentData | null>(null);
  const [executando, setExecutando] = useState(false);

  interface AgentData {
    imgIcon: string;
    imgSplashs: string;
    name: string;
  }
  
  const agentsData = [
    { imgIcon: imgAstra, imgSplashs: imgAstra2, name: 'Astra' },
    { imgIcon: imgbreach, imgSplashs: imgbreach2, name: 'Breach' },
    { imgIcon: imgbrimstone, imgSplashs: imgbrimstone2, name: 'Brimstone' },
    { imgIcon: imgchamber, imgSplashs: imgchamber2, name: 'Chamber' },
    { imgIcon: imgcypher, imgSplashs: imgcypher2, name: 'Cypher' },
    { imgIcon: imgdeadlock, imgSplashs: imgdeadlock2, name: 'Deadlock' },
    { imgIcon: imgfade, imgSplashs: imgfade2, name: 'Fade' },
    { imgIcon: imggekko, imgSplashs: imggekko2, name: 'Gekko' },
    { imgIcon: imgharbor, imgSplashs: imgharbor2, name: 'Harbor' },
    { imgIcon: imgjett, imgSplashs: imgjett2, name: 'Jett' },
    { imgIcon: imgkayo, imgSplashs: imgkayo2, name: 'Kayo' },
    { imgIcon: imgkilljoy, imgSplashs: imgkilljoy2, name: 'Killjoy' },
    { imgIcon: imgneon, imgSplashs: imgneon2, name: 'Neon' },
    { imgIcon: imgomen, imgSplashs: imgomen2, name: 'Omen' },
    { imgIcon: imgphoenix, imgSplashs: imgphoenix2, name: 'Phoenix' },
    { imgIcon: imgraze, imgSplashs: imgraze2, name: 'Raze' },
    { imgIcon: imgreyna, imgSplashs: imgreyna2, name: 'Reyna' },
    { imgIcon: imgsage, imgSplashs: imgsage2, name: 'Sage' },
    { imgIcon: imgsova, imgSplashs: imgsova2, name: 'Sova' },
    { imgIcon: imgviper, imgSplashs: imgviper2, name: 'Viper' },
    { imgIcon: imgyoru, imgSplashs: imgyoru2, name: 'Yoru' },
    { imgIcon: imgskye, imgSplashs: imgskye2, name: 'Skye' }
  ];

  const createCardIcon = (agent: AgentData, index: number): JSX.Element => {
    return (
      <img className='img-agent' key={index} src={agent.imgIcon} alt={`Icone do agente ${agent.name}`} />
    );
  }

  const renderAgents = () => {
    return agentsData.map((agent, index) =>
      createCardIcon(agent, index)
    );
  };

  const sortAgent = () => {
    if (executando) {
      return;
    } else {
      setAgentSorted(null);
      setExecutando(true);
      const indiceSorteado = Math.floor(Math.random() * agentsData.length);
      setTimeout(() => {
        setAgentSorted(agentsData[indiceSorteado]);
        setExecutando(false);
      }, 2000);
    };
  };
  
  return (
    <div className="App">
      <div className='btn-box'>
        <button onClick={sortAgent} disabled={executando}>Sortar Agente</button>
      </div>
      <div className='agents-container'>
        {renderAgents()}
      </div>
      { agentSorted &&  
        <div className='sorted-agent'>
          <img src={agentSorted.imgSplashs} alt='Imagem' />
          <p>{agentSorted.name}</p>
        </div>
      }
      
    </div>
  );
};

export default App;
