export function toUpperFirst(name: string): string {
  return name.charAt(0).toUpperCase() + name.slice(1)
}

export function toCamelCase(name: string): string {
  return name.replace(/-([a-z])/g, (_, letter) => letter.toUpperCase())
}

export function toPascalCase(name: string): string {
  return toUpperFirst(toCamelCase(name))
}

export function toConstantCase(name: string): string {
  return name.toUpperCase().replace(/-/g, '_')
}
