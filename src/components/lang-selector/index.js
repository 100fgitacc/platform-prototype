import React, { useState } from 'react';
import styles from './index.module.css';
import Select from 'react-select';

const options = [
    { value: 'EN', label: 'English (United States)' },
    { value: 'FR', label: 'Frankreich' },
    { value: 'DE', label: 'Deutschland' }
];

const LangSelector = () => {
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
            <div className={styles.image}>
                <img className={styles.icon} src='../assets/img/icons/world-icon.png' alt='icon'/>
            </div>
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

export default LangSelector;