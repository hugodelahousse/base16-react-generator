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

class App extends Component {

  constructor(props)
  {
    super(props);
    this.state = {scheme: "Unnamed Scheme", author: "Unknown Author", ...defaultColors};
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

  get faviconUrl() {
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
    return ctx.canvas.toDataURL();
  }

  render()
  {
    const inputStyle = {
      color: this.state.base05,
      borderBottomColor: this.state.base07,
    };

    return (
      <div className="App container-fluid" style={{backgroundColor: this.state.base00}}>
        <h1 style={{color: this.state.base05}}>Base16 Generator</h1>
        <Favicon url={this.faviconUrl}/>
        <div className="color-grid container">
          <div className="row">
            {Object.keys(defaultColors).map((name, index) =>
              <Color name={name}
                     key={name}
                     color={this.state[name]}
                     style={{color: index < 4 ? this.state.base05 : this.state.base02 }}
                     setColor={(value) => this.setState({[name]: value})} />
            )}
          </div>
        </div>
        <CodeExample colors={this.state}/>
        <div className="container">

          <div className="row justify-content-around inputs">
            <div className="col-md-6 col-sm-12 scheme-name-wrapper">
              <input type="text" placeholder="Scheme name" value={this.state.scheme}
                     style={inputStyle} onChange={(e) => this.setState({scheme: e.target.value})}/>
              <span className="focus-border" style={{backgroundColor: this.state.base0E}} />
            </div>


            <div className="col-md-6 col-sm-12 scheme-author-wrapper">
              <input type="text" placeholder="Author" value={this.state.author}
                     className="author-name"
                     style={inputStyle} onChange={(e) => this.setState({author: e.target.value})}/>
              <span className="focus-border" style={{backgroundColor: this.state.base0E}} />
            </div>
          </div>

          <div className="row justify-content-around buttons">
            <div
              className="file-input col-md-5 col-sm-12"
            >
              <div className="btn-lg" style={{backgroundColor: this.state.base0A, color: this.state.base07}}>
                <input type="file" name="import-scheme" id="import-scheme" onInput={(e) => this.importScheme(e.target.files[0])}
                       accept=".yaml" />
                <span className="align-middle">Import scheme</span>
              </div>
            </div>
            <div className="col-md-5 col-sm-12">
              <button className="btn-lg"
                      onClick={this.exportScheme}
                      style={{backgroundColor: this.state.base0B, color: this.state.base07}}>
                Export scheme
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



export default App;
