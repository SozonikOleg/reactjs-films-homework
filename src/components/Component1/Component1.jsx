import React, { Component } from 'react';
import Hello from '../Component2/Component2'
import styles from'./Component1.module.scss'
import { hot } from 'react-hot-loader/root';




class Welcome extends Component {
  render () {
    return (
      <div className= {styles.three}>
        <h1 className='foure'> Hddfsdso {this.props.name}!</h1>
        <p className='five'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Laudantium nisi, necessitatibus qui provident blanditiis tenetur minima aspernatur totam debitis unde non minus officiis maxime et harum voluptatibus quod esse vel cum nesciunt voluptas vero deserunt error. Eveniet quos similique sed quia dolorem vero molestiae, repudiandae eaque ducimus. Cumque, facilis? Quam quis ipsum cupiditate unde! Minus repellat perferendis delectus tempore aspernatur facere reiciendis repellendus distinctio voluptates. Expedita dolorem, nesciunt earum recusandae illum accusamus aperiam soluta. Accusantium dicta laboriosam suscipit placeat, exercitationem veniam ratione esse modi adipisci necessitatibus molestiae reprehenderit, atque, quas quam omnis repellat fugiat maxime! Autem necessitatibus quia deserunt rem.</p>
        < Hello/>
      </div>
    )
  }
}



export default hot(Welcome);