function notifyLite() {
  const init = () => {
    // eslint-disable-next-line no-unused-vars
    document.addEventListener('DOMContentLoaded', (event) => {
      let body = document.getElementsByTagName('body')[0]
      let notifyDiv = document.createElement('div')
      notifyDiv.id = 'notify-container'
      body.insertBefore(notifyDiv, body.firstChild)
    })
  }

  const success = (params) => {
    params.tipo = 'success'
    return addNotify(params)
  }
  const info = (params) => {
    params.tipo = 'info'
    return addNotify(params)
  }
  const danger = (params) => {
    params.tipo = 'danger'
    return addNotify(params)
  }
  const warning = (params) => {
    params.tipo = 'warning'
    return addNotify(params)
  }

  const addNotify = (params) => {
    closeAll()
    let item = document.createElement('div')

    item.className = 'notify'
    item.classList.add('alert')
    item.classList.add('alert-' + params.tipo)
    item.classList.add('alert-dismissible')
    item.classList.add('fade')
    item.classList.add('show')
    item.style.fontSize = 'larger'
    item.setAttribute('role', 'alert')
    item.style.display = 'grid'

    let message = document.createElement('span')
    message.innerText = params.message
    item.appendChild(message)

    if (params.list) {
      let ul = document.createElement('ul')
      switch (typeof params.list) {
        case 'object':
          for (let e in params.list) {
            let li = document.createElement('li')
            li.innerText = params.list[e]
            ul.appendChild(li)
          }
          item.appendChild(ul)
          break
        case 'array':
          params.list.forEach(function (e) {
            let li = document.createElement('li')
            li.innerText = e
            ul.appendChild(li)
          })
          item.appendChild(ul)
          break
      }
    }

    if (params.button) {
      let btn = document.createElement('a')
      btn.innerText = params.button
      btn.className = 'notify-link'
      btn.setAttribute('href', params.link)
      btn.setAttribute('role', 'button')
      btn.setAttribute('aria-label', 'click aqui para ' + params.button)
      item.appendChild(btn)
    }

    let span = document.createElement('span')
    span.setAttribute('aria-hidden', 'true')
    span.innerHTML = '&times;'

    let close = document.createElement('button')
    close.appendChild(span)
    close.innerHTML = '&times;'
    close.className = 'close-notify'
    close.className = 'close'
    close.setAttribute('data-dismiss', 'alert')
    close.setAttribute('title', 'cerrar')
    close.setAttribute('aria-label', 'cerrar notificacion')
    close.addEventListener('click', () => {
      item.style.opacity = 0
    })
    close.style.float = 'inline-end'
    close.style.position = 'absolute'
    close.style.right = '12px'

    item.appendChild(close)
    document.getElementById('notify-container').insertAdjacentElement('afterbegin', item)
    item.offsetHeight
    item.style.opacity = 1
    setTimeout(() => {
      item.style.opacity = 0
    }, 5000)

    item.addEventListener('transitionend', removeNotif)
  }

  const removeNotif = (e) => {
    if (e.propertyName !== 'opacity') return
    let item = e.currentTarget
    if (item.style.opacity == 0) {
      item.parentNode.removeChild(item)
    }
  }

  const closeAll = () => {
    let notificaciones = document.getElementById('notify-container')
    notificaciones.childNodes.forEach((notif) => {
      // notif.style.opacity = 0;
      // notif.style.right = "-20000px";
      notificaciones.removeChild(notif)
    })
  }
  return {
    init: init,
    success: success,
    info: info,
    danger: danger,
    warning: warning,
    closeAll: closeAll,
  }
}

export default notifyLite()
