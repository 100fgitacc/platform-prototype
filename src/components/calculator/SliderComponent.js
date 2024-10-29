import React, { useState } from 'react';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';

const SliderComponent = () => {
  const [value, setValue] = useState(34); 

  const handleSliderChange = (newValue) => {
      setValue(newValue);
  };

    return(    
      <div>
        <label>Registration times</label>
        <Slider
            min={1}
            max={100}
            value={value}
            onChange={handleSliderChange}
            trackStyle={{ backgroundColor: '#073FC2', height: 8 }}
            handleStyle={{
                borderColor: '№073FC2',
                height: 20,
                width: 20,
                marginLeft: -10,
                marginTop: -7,
                backgroundColor: 'white',
            }}
            railStyle={{ backgroundColor: '#e9e9e9', height: 8 }}
        />
        <div style={{ textAlign: 'center', marginTop: 5, color: '#000000' }}>{value}</div>
      </div>
    );
};

export default SliderComponent;
