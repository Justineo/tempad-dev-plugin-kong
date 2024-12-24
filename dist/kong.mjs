function L(e) {
  return e
}
function s(e, n, t) {
  return { name: e, props: n || {}, children: t || [] }
}
function v(e, n) {
  return typeof n == 'function'
    ? n(e)
    : !((n.type && e.type !== n.type) || (n.name && e.name !== n.name))
}
function h(e, n) {
  for (const t of e.children) {
    if (v(t, n)) return t
    if ('children' in t) {
      const o = h(t, n)
      if (o) return o
    }
  }
  return null
}
function B(e) {
  const {
      Appearance: n,
      'Show icon': t,
      'Show title': o,
      Title: r,
      'Show close': a,
    } = e.properties,
    p = {
      Info: void 0,
      Success: 'success',
      Warning: 'warning',
      Danger: 'danger',
    }[n],
    c = t ? !0 : void 0,
    l = o ? r : void 0,
    i = a ? !0 : void 0,
    f = a ? !0 : void 0,
    g = h(e, { type: 'TEXT', name: 'desc' })
  return s('Alert', {
    appearance: p,
    showIcon: c,
    title: l,
    message: g?.characters,
    dismissible: i,
    onDismiss: f,
  })
}
function S(e) {
  return e.charAt(0).toUpperCase() + e.slice(1)
}
function D(e) {
  return e.replace(/-([a-z])/g, (n, t) => t.toUpperCase())
}
function w(e) {
  return S(D(e))
}
function b(e) {
  return e.toUpperCase().replace(/-/g, '_')
}
function d(e) {
  return s(`${w(e.name)}Icon`)
}
function I(e) {
  const n = e.split('/')
  return n[n.length - 1]
}
function A(e) {
  const {
      Appearance: n,
      'Show icon left': t,
      'Icon left': o,
      'Show icon right': r,
      'Icon right': a,
      Label: p,
    } = e.properties,
    c = {
      Info: void 0,
      Success: 'success',
      Warning: 'warning',
      Danger: 'danger',
      Neutral: 'neutral',
      Decorative: 'decorative',
    }[n],
    l = r && !t ? !1 : void 0,
    i = t ? o : r ? a : void 0
  return s('Badge', { appearance: c, iconBefore: l }, [
    p,
    ...(i ? [s('template', { '#icon': !0 }, [d(i)])] : []),
  ])
}
function P(e) {
  const { Method: n } = e.properties,
    t = {
      Get: 'get',
      Post: 'post',
      Put: 'put',
      Delete: 'delete',
      Patch: 'patch',
      Options: 'options',
      Head: 'head',
      Connect: 'connect',
      Trace: 'trace',
      Custom: 'custom',
    }[n]
  return s('Badge', { appearance: t }, n ? [n] : [])
}
function m(e) {
  const {
      Appearance: n,
      Size: t,
      State: o,
      Label: r,
      Position: a,
      Icon: p,
      'Icon danger': c,
      'Icon left': l,
      'Icon right': i,
    } = e.properties,
    f = {
      Primary: void 0,
      Secondary: 'secondary',
      Tertiary: 'tertiary',
      Danger: 'danger',
    }[n],
    g = { Small: 'small', Medium: void 0, Large: 'large' }[t],
    C = { Disabled: !0, Default: void 0 }[o]
  let u = []
  return (
    e.name === 'Button'
      ? (u = [r])
      : e.name === 'Icon Button'
        ? a === 'Left'
          ? (u = [d(n === 'Danger' ? c : l), r])
          : a === 'Right' && (u = [r, d(i)])
        : e.name === 'Icon Only' && (u = [d(n === 'Danger' ? c : p)]),
    s('Button', { appearance: f, size: g, disabled: C, onClick: !0 }, u)
  )
}
const y = {
    Alert: B,
    Badge: A,
    'Method Badge': P,
    Button: m,
    'Icon Button': m,
    'Icon Only': m,
  },
  T = ({ component: e }) => {
    const n = y[e.name]
    return n ? n(e) : ''
  },
  U = {
    name: 'Kong UI',
    code: {
      component: { title: 'Component', lang: 'vue', transformComponent: T },
      css: {
        title: 'SCSS',
        lang: 'scss',
        transformVariable({ name: e }) {
          return `$kui-${I(e).toLowerCase()}`
        },
      },
      js: {
        transformVariable({ name: e }) {
          const n = I(e)
          return `\0KUI_${b(n)}\0`
        },
      },
    },
  }
export { U as plugin }
