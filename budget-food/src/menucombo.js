import React from 'react'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'
import './menuCombo.css'
class MenuCombo extends React.Component{
      render(){
            return(
                  <GridList cellHeight={100} cols={2} className='grid'>
                        {this.props.data.map((item,idx) => {
                              return(
                                    <GridListTile key={idx} className='grid-item'>
                                      <p className='grid-total'>{item.total}</p>
                                      {item.foods.map((foodItem,idxv) => <p key={idxv}>{foodItem}</p>)}
                                    </GridListTile>
                              )
                        })}
                  </GridList>
            )
      }
}

export default MenuCombo
