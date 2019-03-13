import React from 'react';

function incFunc() {
    fetch('')
    .then((result) => {
      
      return result.json();
    }).then((jsonResult) => {
      
      console.log(jsonResult);
    })
}
  
        
class Like extends React.Component {
    state = { count: 0 }

    incFunc = () => {}

    increment = () => this.setState({ count: this.state.count + 1 })
    

render() {
        return (
            <div>
                <button onClick={this.props.incFunc}>Like</button>
               
            </div>
        )
    }

}

export default Like;
