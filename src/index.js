import './index.less'
import Icon from './img.jpeg'
import printMe from './print'

import Vue from 'vue'
import VueApp from './App.vue'

import React from 'react'
import ReactApp from './reactFile.jsx'
import ReactDOM from 'react-dom';

function component() {
  var element = document.createElement('div')
  element.innerHTML = 'Hello Webpack'
  element.classList.add('color_red')

  var img = new Image(300, 300)
  img.src = Icon
  element.appendChild(img)

  var btn = document.createElement('button')
  btn.innerHTML = '点击我'
  btn.onclick = printMe
  element.appendChild(btn)
  console.log(111)
  console.log(222)
  console.log(333)
  console.log(444)
  console.log(555)
  console.log(666)
  return element
}

document.body.appendChild(component())

ReactDOM.render(<ReactApp />, document.getElementById("root"));

new Vue({
  render: h => h(VueApp)
}).$mount('#app')