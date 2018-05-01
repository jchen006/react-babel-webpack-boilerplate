import React from 'react'
import TextField from 'material-ui/TextField';
import { CardForm } from 'react-payment';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

class Form extends React.Component {
  constructor(props) {
    super(props)
  }

  onSubmit(card) {
    const { number, exp_month, exp_year, cvc, name, zip } = card;
  }
  
  render() {
    return(
      <MuiThemeProvider>
        <CardForm
          onSubmit={this.onSubmit}
          getName={true}
          getZip={true}
        />
      </MuiThemeProvider>
    )
  }
}

export default Form