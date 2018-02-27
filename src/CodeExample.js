import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-code-highlighter';



export function CodeExample({colors})
{
  const style = {
    "hljs-comment": {
      "color": colors.base04
    },
    "hljs-quote": {
      "color": colors.base04
    },
    "hljs-variable": {
      "color": colors.base08
    },
    "hljs-template-variable": {
      "color": colors.base08
    },
    "hljs-attribute": {
      "color": colors.base08
    },
    "hljs-regexp": {
      "color": colors.base08
    },
    "hljs-link": {
      "color": colors.base08
    },
    "hljs-tag": {
      "color": colors.base08
    },
    "hljs-name": {
      "color": colors.base08
    },
    "hljs-selector-id": {
      "color": colors.base08
    },
    "hljs-selector-class": {
      "color": colors.base08
    },
    "hljs-number": {
      "color": colors.base09
    },
    "hljs-meta": {
      "color": colors.base09
    },
    "hljs-built_in": {
      "color": colors.base09
    },
    "hljs-builtin-name": {
      "color": colors.base09
    },
    "hljs-literal": {
      "color": colors.base09
    },
    "hljs-type": {
      "color": colors.base09
    },
    "hljs-params": {
      "color": colors.base09
    },
    "hljs-string": {
      "color": colors.base0B
    },
    "hljs-symbol": {
      "color": colors.base0B
    },
    "hljs-bullet": {
      "color": colors.base0B
    },
    "hljs-title": {
      "color": colors.base0D
    },
    "hljs-section": {
      "color": colors.base0D
    },
    "hljs-keyword": {
      "color": colors.base0E
    },
    "hljs-selector-tag": {
      "color": colors.base0E
    },
    "hljs-deletion": {
      "color": colors.base00,
      "display": "inline-block",
      "width": "100%",
      "backgroundColor": colors.base08
    },
    "hljs-addition": {
      "color": colors.base00,
      "display": "inline-block",
      "width": "100%",
      "backgroundColor": colors.base0B
    },
    "hljs": {
      "display": "block",
      "overflowX": "auto",
      "background": colors.base00,
      "color": colors.base05,
      "padding": "1.5em",
      "fontSize": "1.2em",
      "textAlign": "left",
      "maxWidth": '750px',
      "margin": 'auto',
    },
    "hljs-emphasis": {
      "fontStyle": "italic"
    },
    "hljs-strong": {
      "fontWeight": "bold"
    }
  };

  return (
    <div style={{backgroundColor: colors.base00}}>
      <SyntaxHighlighter language='ruby' style={style}>
        {`require "gem"

string = "base16"
symbol = :base16
fixnum = 0
float  = 0.00
array  = Array.new
array  = ['chris', 85]
hash   = {"test"=> "test"}
regexp = /[abc]/

# This is a comment
class Person

  attr_accessor :name

  def initialize(attributes = {})
    @name = attributes[:name]
  end

  def self.greet
    "hello"
  end
end

person1 = Person.new(:name =>"Chris")
print Person::greet, " ", person1.name, "\\n"
puts "another #{Person::greet} #{person1.name}"`}
      </SyntaxHighlighter>
    </div>
  );
}

CodeExample.propTypes = {
  colors: PropTypes.object.isRequired,
};
