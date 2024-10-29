import React, { useState } from 'react';
import styles from './index.module.css';
import Select from 'react-select';

const options = [
    { value: 'a', label: 'All project members' },
    { value: 'v', label: 'Segment 1' },
    { value: 'c', label: ' Segment 2' }
];

const MembersSelector = () => {
    const customStyles = {
        control: (provided) => ({
            ...provided,
            cursor: 'pointer',
            backgroundColor: '#F1F5F9',
            fontWeight:'300',
            width:'204px',
            borderRadius:'10px',
            border:'none',
            padding:'0',
            minHeight:'unset',
            height: '28px !important',
        }),
        singleValue: (provided) => ({
            ...provided,
            height: '28px',
            marginTop:'2px'
        }),
        option: (provided, state) => ({
            ...provided,
            cursor: 'pointer',
        }),
        dropdownIndicator: (provided) => ({
            ...provided,
            color: '#000', 
            padding:'0px 8px',
            height: '28px !important',
        }),
    };
    const [defaultMembers, setDefaultMembers] = useState(options[0]);
    const handleChange = (selectedOption) => {
        setDefaultMembers(selectedOption);
    };
    
    return(
        <div className={styles.wrapper}>
           <Select
            options={options}
            styles={customStyles}
            onChange={handleChange}
            defaultValue={defaultMembers}
            components={{ IndicatorSeparator: () => null }}
            />
        </div>
    );
}

export default MembersSelector;