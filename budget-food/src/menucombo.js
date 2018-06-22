import React from 'react'
// need data here

class MenuCombo extends React.Component{
      constructor(props){
            super(props)
      }
      render(){
            return(
                  <ul>
                        {this.props.data.map(item => {
                              return(
                                    <li key={item.id}>{item.name}</li>
                              )
                        })}
                  </ul>
            )
      }
}

export default MenuCombo
