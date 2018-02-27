import React, { Component } from 'react';
import Favicon from 'react-favicon';
import {Color} from './Color.js'
import {CodeExample} from "./CodeExample";
import yaml from 'js-yaml';
import fileDownload from 'js-file-download';

import './App.css';

export const defaultColors = {
  base00: "#00002A",
  base01: "#20204A",
  base02: "#30305A",
  base03: "#50507A",
  base04: "#B0B0DA",
  base05: "#D0D0FA",
  base06: "#E0E0FF",
  base07: "#F5F5FF",
  base08: "#FF4242",
  base09: "#FC8D28",
  base0A: "#F3E877",
  base0B: "#59F176",
  base0C: "#0EF0F0",
  base0D: "#66B0FF",
  base0E: "#F10596",
  base0F: "#F003EF",
};

const backgroundColors = Object.keys(defaultColors).slice(0, 8);
const accentColors = Object.keys(defaultColors).slice(8);

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {scheme: "Unnamed", author: "Unknown Author", ...defaultColors};
  }


  exportScheme = () =>
  {
    let fileName = "";
    if (this.state.scheme.length === 0)
      fileName = "Unnamed";
    else
      fileName = this.state.scheme.split('').map((c) => {
        c = c.toLowerCase();
        if (c < 'a' || c > 'z')
          return '-';
        return c;
      }).join('') + '.yaml';

    let theme = {};
    for (const [key, value] of Object.entries(this.state))
    {
      if (key.substring(0, 4) === 'base')
        theme[key] = value.substring(1);
      else
        theme[key] = value;
    }

    console.log(theme);
    fileDownload(yaml.dump(theme), fileName);
  };

  importScheme = (file) => {
    var reader = new FileReader();
    reader.onload = () => {
      console.log(this.state);
      Object.entries(yaml.load(reader.result)).forEach(([key, value]) => {
        console.log(key, value);
        if (key.substr(0, 4) === 'base')
          value = '#' + value;
        if (this.state.hasOwnProperty(key))
          this.setState({[key]: value});
      });
      console.log(this.state);
    };
    reader.readAsText(file);
  };

  render()
  {
    const canvas = document.createElement('canvas');
    const colorSize = 10;
    canvas.width = colorSize * 4;
    canvas.height = colorSize * 4;
    const ctx = canvas.getContext('2d');
    Object.keys(defaultColors).map((name, i) => {
      ctx.fillStyle = this.state[name];
      return ctx.fillRect(
        colorSize * (i % 4),
        colorSize * Math.floor(i / 4),
        colorSize,
        colorSize);
    });
    const faviconUrl = ctx.canvas.toDataURL();

    const inputStyle = {
      color: this.state.base05,
      borderBottom: `2px solid ${this.state.base07}`
    };

    return (
      <div className="App" style={{backgroundColor: this.state.base00, minHeight: '100vh'}}>
        <h1 style={{color: this.state.base05}}>Base16 Generator</h1>
        <Favicon url={faviconUrl}/>
        <table>
          <tbody>
          <tr>
            {backgroundColors.map((name, index) =>
                <Color name={name}
                       key={name}
                       color={this.state[name]}
                       style={{color: index > 3 ? this.state.base02 : this.state.base05 }}
                       setColor={(value) => this.setState({[name]: value})} />
            )}
          </tr>
          <tr>
            {accentColors.map((name) =>
                <Color name={name}
                       key={name}
                       style={{color: this.state.base07}}
                       color={this.state[name]}
                       setColor={(value) => this.setState({[name]: value})} />
            )}
          </tr>
          </tbody>
        </table>
        <CodeExample colors={this.state}/>
        <input type="text" placeholder="Scheme name" value={this.state.scheme}
               style={inputStyle} onChange={(e) => this.setState({scheme: e.target.value})}/>
        <br/>
        <input type="text" placeholder="Author" value={this.state.author}
               className="author-name"
               style={inputStyle} onChange={(e) => this.setState({author: e.target.value})}/>
        <br/>
        <div
             style={{backgroundColor: this.state.base0A, color: this.state.base07}}
             className="file-input"
        >
          Import scheme
          <input type="file" id='file-upload' onInput={(e) => this.importScheme(e.target.files[0])}
                 accept=".yaml"
          />
        </div>
        <button onClick={this.exportScheme} style={{backgroundColor: this.state.base0B, color: this.state.base07}}>
          Export scheme
        </button>
      </div>
    );
  }
}

export default App;
