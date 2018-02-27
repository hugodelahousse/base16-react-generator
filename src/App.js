import React, { Component } from 'react';
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
    const fileName = this.state.scheme.split('').map((c) => {
      c = c.toLowerCase();
      if (c < 'a' || c > 'z')
        return '-';
      return c;
    }).join('') + '.yaml';
    console.log(fileName);
    fileDownload(yaml.dump(this.state), fileName);
  };

  render()
  {
    console.log(this.state["base00"]);
    return (
      <div className="App">
        <table>
          <tbody>
          <tr>
            {backgroundColors.map((name) =>
              <td key={name}>
                <Color name={name}
                       color={this.state[name]}
                       setColor={(value) => this.setState({[name]: value})} />
              </td>
            )}
          </tr>
          <tr>
            {accentColors.map((name) =>
              <td key={name}>
                <Color name={name}
                       color={this.state[name]}
                       setColor={(value) => this.setState({[name]: value})} />
              </td>
            )}
          </tr>
          </tbody>
        </table>
        <CodeExample colors={this.state}/>
        <input type="text" placeholder="Scheme name" onInput={(e) => this.setState({scheme: e.target.value})}/>
        <br/>
        <input type="text" placeholder="Author" onInput={(e) => this.setState({author: e.target.value})}/>
        <br/>
        <button onClick={this.exportScheme}>
            Download scheme !
        </button>
      </div>
    );
  }
}

export default App;
