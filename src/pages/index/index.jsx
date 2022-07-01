import { Component } from 'react'
import { View } from '@tarojs/components'
import {  AtAvatar, AtInput, AtCheckbox, AtSearchBar, AtButton  } from 'taro-ui'
import Taro from '@tarojs/taro'

import './index.scss'

export default class Index extends Component {
  constructor () {
    super(...arguments)
    this.state = {
      value: '',
      value1: '',
      change:''
    }
    this.changlist =[]
    this.checkboxOption = [{
      value: '1',
      label: 'iPhone X',
    },{
      value: '2',
      label: 'HUAWEI P20'
    },{
      value: '3',
      label: 'OPPO Find X',
    },{
      value: '4',
      label: 'vivo NEX',
      }]
    
  }
  ValueChange(e) {
    this.state.value = e
    console.log(this.state.value)
  }
  ValueChange1(e) {
    this.state.change = e
    console.log(this.state.change)
  }
  handleChange (value1) {
    this.setState({
      checkedList: value1
    })
    this.changlist = value1
  }
  onChange (value) {
    this.setState({
      value: value
    })
  }
  
  onActionClick () {
    console.log('开始搜索')
    
  }
  add(e) { 
  console.log(this.state.value)
  console.log(this.checkboxOption)
  this.checkboxOption.push({ value: String(this.checkboxOption.length + 1), label: this.state.value })
  //这里差一步页面的更新
  }
  delete(e) {
    for (var i = 0; i < this.changlist.length; i++) {
      delete this.checkboxOption[this.changlist[i]-1]
    }
    console.log(this.checkboxOption)
  }
  change(e) {
    for (var i = 0; i < this.changlist.length; i++) {
      this.checkboxOption[this.changlist[i]-1].label = this.state.change
    }
    console.log(this.checkboxOption)
  }
  render () {
    return (
      <View>
        <View class='indextop'>
          <AtAvatar class='avatar' circle='true'
          size='large'  
          image='https://avatars.githubusercontent.com/u/57751257?v=4'></AtAvatar>
          <View class='avatar-text'>
            <View class='avatar-text-wenzi'>Tanger</View>
            <View class='avatar-text-wenzi'>今天也要元气满满哦~😁</View>
          </View>
        </View >
        <View class='inline'></View>
        <View class='ToDolist'>
        <AtSearchBar
        showActionButton
        value={this.state.value1}
        onChange={this.onChange.bind(this)}
        onActionClick={this.onActionClick.bind(this)}
      />
        <AtCheckbox
        options={this.checkboxOption}
        selectedList={this.state.checkedList}
        onChange={this.handleChange.bind(this)}
      />
        </View>
          <AtInput name='value' title='新增list' type='text' placeholder='单行文本' value={this.state.value} onChange={this.ValueChange.bind(this)}/>      
        <View class='button-list'>
          <AtButton class='jiben' type='primary' size='small' circle='true' onClick={this.add.bind(this)}>增加</AtButton>

          
        </View>
        <View>
              
          <AtInput name='value' title='修改' type='text' placeholder='单行文本' value={this.state.change} onChange={this.ValueChange1.bind(this)}/>
            <AtButton class='jiben' type='primary' size='small' circle='true' onClick={this.change.bind(this)}>修改</AtButton>
          
        </View>
        <AtButton class='jiben' type='primary' size='small' circle='true' onClick={this.delete.bind(this)}>删除</AtButton>
      </View>
        )
  }
}
