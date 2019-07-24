 import React from 'react';

import ReactDOM from 'react-dom';

 

export default class CustomTextInput extends React.Component {

    constructor(props) {

      super(props);

    

      this.textInput = React.createRef();

      this.focusTextInput = this.focusTextInput.bind(this);

    }

 

    focusTextInput() {

   

    this.textInput.current.focus();

      //ReactDOM.findDOMNode(this.textInput.current).focus();

      //document.getElementById("abc").focus()

    }

 

    render() {

    

      return (

        <div>

          <input type="text" id="abc" ref={this.textInput} />

         

  

          <input

            type="button"

            value="Focus the text input"

            onClick={this.focusTextInput}

          />

        </div>

      );

    }

  }

 

 

import React from 'react';

import ReactDOM from 'react-dom';

import CustomTextInput from './FocusAnInput';

 

export default class ABC extends React.Component {

    constructor(props) {

      super(props);

    

      

    }

 

      

    render() {

     

      return (

        <div>

          <CustomTextInput/>

          <CustomTextInput/>

          <CustomTextInput/>

         

        </div>

      );

    }

  }
