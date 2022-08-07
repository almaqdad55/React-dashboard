import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

import { Header } from '../components';

const ColorPicker = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Color Pickers" />
      <div className="text-center">
        <div className="flex justify-center w-full">
          <div id="preview" />
        </div>

        <div className="flex justify-around items-center gap-20 flex-wrap">
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Pallete</p>
            <ColorPickerComponent
              id="inline-palette"
              mode="Palette"
              modeSwitcher={false}
              inline
              showButtons={false}
            />
          </div>
          <div>
            <p className="text-2xl font-semibold mt-2 mb-4">Inline Picker</p>
            <ColorPickerComponent
              id="inline-pallette"
              mode="Picker"
              modeSwitcher={false}
              inline
              showButtons={false}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ColorPicker;
