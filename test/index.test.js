import { generatePluginCSS } from './utils.js'
import { describe, it, expect } from 'vitest'

describe('tailwindcss-animations plugin', () => {
  it('use a predefined animation', async () => {
    const css = await generatePluginCSS(({
      content: '<div class="animate-reveal-bottom">Content</div>'
    }))

    expect(css).not.toBe('');
    expect(css.trim()).toBe('@keyframes reveal-bottom{from{opacity:0;translate:0 50px;scale:0.5px}to{opacity:1;translate:0 0;scale:1px}}.animate-reveal{animation:reveal linear both}')
  })

  it('use a predefined animation delay', async () => {
    const css = await generatePluginCSS(({
      content: '<div class="animate-delay-100">Content</div>'
    }))

    expect(css).not.toBe('');
    expect(css.trim()).toBe('.animate-delay-100{animation-delay:100ms}')
  })

  it('use a custom animation delay', async () => {
    const css = await generatePluginCSS(({
      content: '<div class="animate-delay-[555ms]">Content</div>'
    }))

    expect(css).not.toBe('');
    expect(css.trim()).toBe('.animate-delay-\\[555ms\\]{animation-delay:555ms}')
  })

  it('use a predefined animation duration', async () => {
    const css = await generatePluginCSS(({
      content: '<div class="animate-duration-100">Content</div>'
    }))

    expect(css).not.toBe('');
    expect(css.trim()).toBe('.animate-duration-100{animation-duration:100ms}')
  })

  it('use a custom animation duration', async () => {
    const css = await generatePluginCSS(({
      content: '<div class="animate-duration-[555ms]">Content</div>'
    }))

    expect(css).not.toBe('');
    expect(css.trim()).toBe('.animate-duration-\\[555ms\\]{animation-duration:555ms}')
  })

  it('use a predefined timing animation function', async () => {
    const css = await generatePluginCSS(({
      content: '<div class="animate-ease">Content</div>'
    }))

    expect(css).not.toBe('');
    expect(css.trim()).toBe('.animate-ease{animation-timing-function:ease}')
  })

  it('use a predefined animation duration', async () => {
    const css = await generatePluginCSS(({
      content: '<div class="animate-duration-slow">Content</div>'
    }))

    expect(css).not.toBe('');
    expect(css.trim()).toBe('.animate-duration-slow{animation-duration:400ms}')
  })
})