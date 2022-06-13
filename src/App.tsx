import { useEffect, useState } from 'react'
import { Weather } from './weather';
import axios from 'axios';
import { View } from './View';

const Ciudades = [3601783, 2643743, 2968815, 5128638, 1850147, 2147714];

function App() {
  const [weather, setWeathers] = useState<Weather[]>([]);

  const getWeathers = async () => {
    let newWeathers: Weather[] = [];
    for (let ciudad of Ciudades) {
      const request = await axios.get<Weather>("https://api.openweathermap.org/data/2.5/weather", { params: { APPID: "612e6fb8bcc89f7e29e5f14842e99f53", id: ciudad } });
      const weather = request.data;
      newWeathers = [...newWeathers, weather];
    }

    setWeathers(newWeathers);
  }
  //actualizar
  useEffect(() => {
    getWeathers();
    const update = setInterval(getWeathers, 60000);
    return () => {
      clearInterval(update);
    }
  }, [])

  return (
    <div className="container"><div className='grid_container'>{weather.map(e => <View key={e.id} clima={e} />)}</div>
    </div>
  )
}

export default App
