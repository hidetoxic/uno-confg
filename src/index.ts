import { presetAttributify, presetUno } from 'unocss'

export function presets(): any[] {
  return [presetAttributify(), presetUno()]
}

export function rules(): any[] {
  return []
}

export function shortcuts(): any[] {
  return [
    [/^btn-(.*)$/, ([, c]: any) => `bg-${c}-400 text-${c}-100 py-2 px-4 rounded-lg`],
  ]
}

export function config(): Record<string, any> {
  return {
    presets: presets(),
    rules: rules(),
    shortcuts: shortcuts(),
  }
}

