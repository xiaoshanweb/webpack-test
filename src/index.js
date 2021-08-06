import './index.less'
import Icon from './img.jpeg'
import printMe from './print'
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
  return element
}

document.body.appendChild(component())