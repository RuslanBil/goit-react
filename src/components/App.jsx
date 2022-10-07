import React from 'react';
import ColorPicker from './ColorPicker/ColorPicker';

import Counter from './Counter/Counter';
import Dropdown from './Dropdown/Dropdown';

const ColorPickerOptions = [
  { label: 'Red', color: '#f44366' },
  { label: 'Green', color: '#4caf50' },
  { label: 'Blue', color: '#2194f3' },
  { label: 'Orange', color: '#ffa500' },
  { label: 'Pink', color: '#687d88' },
  { label: 'Purple', color: '#3f5185' },
];

export const App = () => {
  return (
    <div>
      <h1>Состояние компонента</h1>
      <ColorPicker options={ColorPickerOptions} />

      {/* <Dropdown /> */}

      {/* <Counter initialValue={10} /> */}
    </div>
  );
};

export default App;
