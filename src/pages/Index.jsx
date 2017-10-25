import React, { Component } from 'react'
import { Button } from 'antd'
import { fetchCategories } from '../actions/category'
import { connect } from 'react-redux'
import styled from 'styled-components'

class IndexProto extends Component {
  componentDidMount() {
    this.props.getCategories()
  }
  render() {
    const { getCategories, category, className } = this.props
    return (
      <div className={className}>
        <ul className="cates">{
          category.map(cat => (
            <li key={cat.name}>{cat.name}</li>
          ))
        }</ul>
        <div className="main"></div>
      </div>
    )
  }
}

const Index = styled(IndexProto) `
  .cates{
    float: right;
    border: 1px solid #ddd;
    box-shadow: 0 0 10px solid #ddd;
    width: 200px;
    padding: 15px;
    li{
      border-bottom: 1px solid #ddd;
      line-height: 32px;
    }
  }
  .main{
    margin-right: 210px;
    border: 1px solid green;
    height: 100%;
  }
`

const mstp = ({ category }) => ({
  category
})
const mdtp = dispatch => ({
  getCategories: () => { dispatch(fetchCategories()) }
})

export default connect(mstp, mdtp)(Index)
