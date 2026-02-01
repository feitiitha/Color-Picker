import React, { useState } from 'react';
import './ColorPicker.css';

function ColorPicker() {
    const [color, setColor] = useState('#808080');
    const [red, setRed] = useState(128);
    const [green, setGreen] = useState(128);
    const [blue, setBlue] = useState(128);

    const handleColorChange = (e) => {
        const newColor = e.target.value;
        setColor(newColor);
 
        const r = parseInt(newColor.slice(1, 3), 16);
        const g = parseInt(newColor.slice(3, 5), 16);
        const b = parseInt(newColor.slice(5, 7), 16);
        setRed(r);
        setGreen(g);
        setBlue(b);
    };

    const handleRgbChange = () => {
        const newColor = `#${red.toString(16).padStart(2, '0')}${green.toString(16).padStart(2, '0')}${blue.toString(16).padStart(2, '0')}`;
        setColor(newColor);
    };

    const rgbColor = `rgb(${red}, ${green}, ${blue})`;

    return (
        <div className="color-picker-container">
            <h1>Color Picker</h1>
            <div className="color-display" style={{ backgroundColor: color }}>
                <div className="color-info">
                    <p>HEX: {color.toUpperCase()}</p>
                    <p>RGB: {rgbColor}</p>
                </div>
            </div>
            <div className="controls">
                <div className="color-input-group">
                    <label>Color Picker:</label>
                    <input
                        type="color"
                        value={color}
                        onChange={handleColorChange}
                        className="color-input"
                    />
                </div>
                <div className="rgb-sliders">
                    <h3>RGB Sliders</h3>
                    <div className="slider-group">
                        <label>Red: {red}</label>
                        <input
                            type="range"
                            min="0"
                            max="255"
                            value={red}
                            onChange={(e) => {
                                setRed(Number(e.target.value));
                                handleRgbChange();
                            }}
                        />
                    </div>
                    <div className="slider-group">
                        <label>Green: {green}</label>
                        <input
                            type="range"
                            min="0"
                            max="255"
                            value={green}
                            onChange={(e) => {
                                setGreen(Number(e.target.value));
                                handleRgbChange();
                            }}
                        />
                    </div>
                    <div className="slider-group">
                        <label>Blue: {blue}</label>
                        <input
                            type="range"
                            min="0"
                            max="255"
                            value={blue}
                            onChange={(e) => {
                                setBlue(Number(e.target.value));
                                handleRgbChange();
                            }}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ColorPicker;
    