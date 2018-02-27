import React, { Component } from 'react';
import PropTypes from 'prop-types';


export class CodeExample extends Component
{
  render()
  {
    return (
      <pre className="base00-background base05" style={{textAlign: 'left', backgroundColor: this.props.colors["base00"], color: this.props.colors["base05"], padding: '10px 20px', fontSize: '14px'}}>
        <span style={{color: this.props.colors["base0E"]}}>require</span> <span style={{color: this.props.colors["base0B"]}}>"gem"</span>{"\n"}{"\n"}
        <span style={{color: this.props.colors["base08"]}}>string</span> = <span style={{color: this.props.colors["base0B"]}}>"base16"</span> {"\n"}
        <span style={{color: this.props.colors["base08"]}}>symbol</span> = <span style={{color: this.props.colors["base0B"]}}>:base16</span> {"\n"}
        <span style={{color: this.props.colors["base08"]}}>fixnum</span> = <span style={{color: this.props.colors["base09"]}}>0</span>{"\n"}
        <span style={{color: this.props.colors["base08"]}}>float</span>{"  "}= <span style={{color: this.props.colors["base09"]}}>0.00</span>{"\n"}
        <span style={{color: this.props.colors["base08"]}}>array</span>{"  "}= <span style={{color: this.props.colors["base0A"]}}>Array</span>.
        <span style={{color: this.props.colors["base0D"]}}>new</span>{"\n"}
        <span style={{color: this.props.colors["base08"]}}>array</span>{"  "}= [
        <span style={{color: this.props.colors["base0B"]}}>'chris'</span>, <span style={{color: this.props.colors["base09"]}}>85</span>]{"\n"}
        <span style={{color: this.props.colors["base08"]}}>hash</span>{"   "}= {"{"}<span style={{color: this.props.colors["base0B"]}}>"test"</span>
        =&gt; <span style={{color: this.props.colors["base0B"]}}>"test"</span>{"}"}{"\n"}
        <span style={{color: this.props.colors["base08"]}}>regexp</span> = <span style={{color: this.props.colors["base0C"]}}>/[abc]/</span>{"\n"}
        {"\n"}
        <span style={{color: this.props.colors["base03"]}}># This is a comment</span>{"\n"}
        <span style={{color: this.props.colors["base0E"]}}>class</span> <span style={{color: this.props.colors["base0A"]}}>Person</span>{"\n"}
        {"  "}{"\n"}{"  "}<span style={{color: this.props.colors["base0D"]}}>attr_accessor</span> <span style={{color: this.props.colors["base0B"]}}>:name</span>{"\n"}
        {"  "}{"\n"}{"  "}<span style={{color: this.props.colors["base0E"]}}>def</span> <span style={{color: this.props.colors["base0D"]}}>initialize</span>
        (<span style={{color: this.props.colors["base08"]}}>attributes</span> = {"{"}{"}"}){"\n"}
        {"    "}<span style={{color: this.props.colors["base08"]}}>@name</span> = <span style={{color: this.props.colors["base08"]}}>attributes</span>
        [<span style={{color: this.props.colors["base0B"]}}>:name</span>]{"\n"}
        {"  "}<span style={{color: this.props.colors["base0E"]}}>end</span>{"\n"}
        {"  "}{"\n"}{"  "}<span style={{color: this.props.colors["base0E"]}}>def</span> <span style={{color: this.props.colors["base0E"]}}>self</span>.
        <span style={{color: this.props.colors["base0D"]}}>greet</span>{"\n"}
        {"    "}<span style={{backgroundColor: this.props.colors["base02"]}}><span style={{color: this.props.colors["base0B"]}}>"hello"</span></span>{"\n"}
        {"  "}<span style={{color: this.props.colors["base0E"]}}>end</span>{"\n"}<span style={{color: this.props.colors["base0E"]}}>end</span>{"\n"}
        {"\n"}
        <span style={{color: this.props.colors["base08"]}}>person1</span> = <span style={{color: this.props.colors["base0A"]}}>Person</span>.
        <span style={{color: this.props.colors["base0D"]}}>new</span>(<span style={{color: this.props.colors["base0B"]}}>:name</span> =&gt;
        <span style={{color: this.props.colors["base0B"]}}>"Chris"</span>){"\n"}
        <span style={{color: this.props.colors["base0D"]}}>print</span> <span style={{color: this.props.colors["base0A"]}}>Person</span>::<span style={{color: this.props.colors["base0D"]}}>
        greet</span>, <span style={{color: this.props.colors["base0B"]}}>" "</span>, <span style={{color: this.props.colors["base08"]}}>person1</span>.<span style={{color: this.props.colors["base0D"]}}>name</span>, <span style={{color: this.props.colors["base0B"]}}>"<span style={{color: this.props.colors["base09"]}}>\n</span>"</span>{"\n"}<span style={{color: this.props.colors["base0D"]}}>puts</span> <span style={{color: this.props.colors["base0B"]}}>"another </span><span style={{color: this.props.colors["base0F"]}}>#{"{"}</span><span style={{color: this.props.colors["base0A"]}}>Person</span>::<span style={{color: this.props.colors["base0D"]}}>greet</span><span style={{color: this.props.colors["base0F"]}}>{"}"}</span> <span style={{color: this.props.colors["base0F"]}}>#{"{"}</span><span style={{color: this.props.colors["base08"]}}>person1</span>.<span style={{color: this.props.colors["base0D"]}}>name</span><span style={{color: this.props.colors["base0F"]}}>{"}"}</span><span style={{color: this.props.colors["base0B"]}}>"</span>{"\n"}{"      "}</pre>
    );
  }
}

CodeExample.propTypes = {
  colors: PropTypes.object.isRequired,
};
