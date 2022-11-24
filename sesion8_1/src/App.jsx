import { useState } from 'react'
import './App.css'
import { isWaterBoiling } from './temperature';
import { TemperatureField } from './components/TemperatureField';

export default function App() {
  const [{v, u}, setConversion] = useState({v:'', u:''});
  return(
    <div>
      <h1>El agua esta hirviendo?</h1>
      {Boolean(u && v)&&(
      <h2>
        Temperatura({v} °{u}) {isWaterBoiling(u,v)? 'Si': 'No'}
      </h2>
      )}
      <TemperatureField
        to="C"
        value={v}
        from={u}
        onUpdate={(u,v) => setConversion({v,u})}
        ></TemperatureField>
      <TemperatureField
        to="F"
        value={v}
        from={u}
        onUpdate={(u,v) => setConversion({v,u})}
        ></TemperatureField>
    </div>
  )

}


