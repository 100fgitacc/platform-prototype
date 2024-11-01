import React, { useState } from 'react';
import styles from './index.module.css';
import SliderComponent from './SliderComponent';
import CalculatorSelector from 'components/calculator-selector';

const Calculator = ({handleShowBars}) => {
    return(    
        <div className={`${styles['calculator-wrapper']}`}>
            <div className={`${styles['calculator-inner']}`}>
                <div>
                    <div className={`${styles['calculator-item']}`}>
                        <SliderComponent/>
                    </div>
                    <div className={`${styles['calculator-item']}`}>
                        <p className={`${styles['item-title']}`}>Gitcoin Passport Rang</p>
                        <label className={`${styles['input-wrapper']}`}>
                            Min
                            <input type='number' placeholder='Add value'/> 
                        </label>
                        <label className={`${styles['input-wrapper']}`}>
                            Max
                            <input type='number' placeholder='Add value'/> 
                        </label>
                    </div>
                    <div className={`${styles['calculator-item']}`}>
                        <p className={`${styles['item-title']}`}>Number of projects in which invested</p>
                        <label className={`${styles['input-wrapper']}`}>
                            Min
                            <input type='number' placeholder='Add value'/> 
                        </label>
                        <label className={`${styles['input-wrapper']}`}>
                            Max
                            <input type='number' placeholder='Add value'/> 
                        </label>
                    </div>
                    <div className={`${styles['calculator-item']}`}>
                        <p className={`${styles['item-title']}`}>Number of projects in which activities were completed</p>
                        <label className={`${styles['input-wrapper']}`}>
                            Min
                            <input type='number' placeholder='Add value'/> 
                        </label>
                        <label className={`${styles['input-wrapper']}`}>
                            Max
                            <input type='number' placeholder='Add value'/> 
                        </label>
                    </div>
                    
                    <button className={`button-primary`} onClick={()=>handleShowBars(true)}>Result</button>
                </div>
                <div>
                    <div className={`${styles['calculator-item']}`}>
                            <p className={`${styles['item-title']}`}>Minimum amount of funds on the wallet</p>
                            <label className={`${styles['input-wrapper']}`}>
                                Min
                                <input type='number' placeholder='Add value'/> 
                            </label>
                            <label className={`${styles['input-wrapper']}`}>
                                Max
                                <input type='number' placeholder='Add value'/> 
                            </label>
                    </div>
                    <div className={`${styles['calculator-item']}`}>
                    <div className="checkbox-container">
                        <input type="checkbox" id="customCheckbox" className="custom-checkbox"/>
                        <label for="customCheckbox">KYC</label>
                    </div>
                    </div>
                    <div className={`${styles['calculator-item']}`}>
                        <CalculatorSelector/>
                    </div>
                </div>
            </div>
        </div>
  )
};

export default Calculator;
