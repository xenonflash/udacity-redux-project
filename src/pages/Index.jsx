import React, { Component } from 'react'
import { Button } from 'antd'
import { fetchCategories } from '../actions/category'
import { connect } from 'react-redux'

class Index extends Component {
  componentDidMount() {
    this.props.getCategories()
    console.log(this.props)
  }
  render() {
    const { getCategories, category } = this.props
    return (
      <div>
        <h1>this is index</h1>
        <ul>{
          category.map(cat => (
            <li>{cat.name}</li>
          ))
        }</ul>
      </div>
    )
  }
}
const mstp = ({ category }) => ({
  category
})
const mdtp = dispatch => ({
  getCategories: () => { dispatch(fetchCategories()) }
})

export default connect(mstp, mdtp)(Index)
