
import React from 'react';




class MagicButtom extends React.Component {
    constructor(props) {
    super (props);
    this.state = {render: true};
  
    }
  
    deleteMe() {
      this.setState({
        render: false
      });
    }
    render () {
      if(this.state.render) {
        return (
          <button onClick={(e) => this.deleteMe()}>
          Deleteeeeeeeeeee
          </button>
        );
      }
      else {
        return null;
      }
    }
  }





  
  /*ReactDOM.render(
    <MagicButtom />,
   
    document.getElementById('root')
  );*/
  
  export default MagicButtom;