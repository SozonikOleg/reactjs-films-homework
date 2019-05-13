import React from 'react'
import styles from './Header.module.scss'
import Search from '../Search/Search'
import HeaderInfo from '../HeaderInfo'
import { connect } from 'react-redux'

class Header extends React.Component{
  constructor(props){
    super(props)
    this.state={}
  }

  render(){
    console.log('props.getState',this.props.getState.search[Math.floor(Math.random() * 3)])
    const randomItem = this.props.getState.search[Math.floor(Math.random() * 3)];
    return(
      <div className={styles.three}>
      <Search />
      <HeaderInfo randomItem ={randomItem}/>
    </div>
    );
  }
}

export default connect(
  state=>({
    getState:state
  }),
  dispatch=>({})
)(Header);
