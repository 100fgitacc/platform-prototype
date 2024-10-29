import React, { useState } from 'react';
import styles from './index.module.css';
import Select from 'react-select';

const options = [
    { value: 'EN', label: 'Airdrop points' },
    { value: 'FR', label: 'Airdrop points' },
    { value: 'DE', label: 'Airdrop points' }
];

const CalculatorSelector = () => {
    const customStyles = {
        control: (provided) => ({
            ...provided,
            cursor: 'pointer',
            border: '1px solid #CBD5E1',
            fontWeight:'300',
            width:'204px'
        }),
        option: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
        }),
    };
    const [defaultLanguage, setDefaultLanguage] = useState(options[0]);
    const handleChange = (selectedOption) => {
        setDefaultLanguage(selectedOption);
    };
    
    return(
        <div className={styles.wrapper}>
          
           <Select
            options={options}
            styles={customStyles}
            onChange={handleChange}
            defaultValue={defaultLanguage}
            components={{ IndicatorSeparator: () => null }}
            />
        </div>
    );
}

export default CalculatorSelector;