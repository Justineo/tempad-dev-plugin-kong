function U(e) {
  return e
}
function s(e, n, t) {
  return { name: e, props: n || {}, children: t || [] }
}
function I(e, n) {
  return typeof n == 'function'
    ? n(e)
    : !((n.type && e.type !== n.type) || (n.name && e.name !== n.name))
}
function h(e, n) {
  for (const t of e.children) {
    if (I(t, n)) return t
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
    l = {
      Info: void 0,
      Success: 'success',
      Warning: 'warning',
      Danger: 'danger',
    }[n],
    c = t ? !0 : void 0,
    u = o ? r : void 0,
    i = a ? !0 : void 0,
    f = a ? !0 : void 0,
    g = h(e, { type: 'TEXT', name: 'desc' })
  return s('Alert', {
    appearance: l,
    showIcon: c,
    title: u,
    message: g?.characters,
    dismissible: i,
    onDismiss: f,
  })
}
function S(e) {
  return e.charAt(0).toUpperCase() + e.slice(1)
}
function w(e) {
  return e.replace(/-([a-z])/g, (n, t) => t.toUpperCase())
}
function D(e) {
  return S(w(e))
}
function A(e) {
  return e.toUpperCase().replace(/-/g, '_')
}
function d(e) {
  return s(`${D(e.name)}Icon`)
}
function v(e) {
  const n = e.split('/')
  return n[n.length - 1]
}
function b(e) {
  const {
      Appearance: n,
      'Show icon left': t,
      'Icon left': o,
      'Show icon right': r,
      'Icon right': a,
      Label: l,
    } = e.properties,
    c = {
      Info: void 0,
      Success: 'success',
      Warning: 'warning',
      Danger: 'danger',
      Neutral: 'neutral',
      Decorative: 'decorative',
    }[n],
    u = r && !t ? !1 : void 0,
    i = t ? o : r ? a : void 0
  return s('Badge', { appearance: c, iconBefore: u }, [
    l,
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
      Icon: l,
      'Icon danger': c,
      'Icon left': u,
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
  let p = []
  return (
    e.name === 'Button'
      ? (p = [r])
      : e.name === 'Icon Button'
        ? a === 'Left'
          ? (p = [d(n === 'Danger' ? c : u), r])
          : a === 'Right' && (p = [r, d(i)])
        : e.name === 'Icon Only' && (p = [d(n === 'Danger' ? c : l)]),
    s('Button', { appearance: f, size: g, disabled: C, onClick: !0 }, p)
  )
}
const y = {
    Alert: B,
    Badge: b,
    'Method Badge': P,
    Button: m,
    'Icon Button': m,
    'Icon Only': m,
  },
  L = ({ component: e }) => {
    const n = y[e.name]
    return n ? n(e) : ''
  },
  T = {
    name: 'Kong UI Advanced',
    code: {
      component: { title: 'Component', lang: 'vue', transformComponent: L },
      css: {
        title: 'SCSS',
        lang: 'scss',
        transformVariable({ name: e }) {
          const n = v(e).toLowerCase()
          return `calc(var(--kui-${n}), $kui-${n})`
        },
      },
      js: {
        transformVariable({ name: e }) {
          const n = v(e)
          return `calc(var(--kui-${n.toLowerCase()}), \0KUI_${A(n)}\0)`
        },
      },
    },
  }
export { T as plugin }
