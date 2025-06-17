# ngx-floodlight

<a href="https://ngxui.com" target="_blank" style="display: flex;gap: .5rem;align-items: center;cursor: pointer; padding: 0 0 0 0; height: fit-content;">
  <img src="https://ngxui.com/assets/img/ngxui-logo.png" style="width: 64px;height: 64px;">
</a>

This library is part of the NGXUI ecosystem. View all available components at [https://ngxui.com](https://ngxui.com)

`@omnedia/ngx-floodlight` is an Angular standalone component rendering **dynamic animated floodlight/spotlight gradients** (CSS-only, no WebGL). Animates in/out with IntersectionObserver, supports signals, and fully standalone for Angular 20.

## Features

* Animated floodlight/spotlight gradients with smooth CSS transitions
* Customizable gradients, duration, animation, and class via @Input
* Animation only plays when in viewport (IntersectionObserver)
* Optionally only animate once on first view
* Built for Angular 20 standalone with signals, zone- and SSR-safe
* Style and gradients fully controlled via signals (@Input setters)
* No runtime dependencies or external CSS required
* Resource-safe: auto-cleans IntersectionObserver

## Installation

```
npm install @omnedia/ngx-floodlight
```

## Usage

Import the `NgxFloodlightComponent` in your Angular module or component:

```typescript
import { NgxFloodlightComponent } from '@omnedia/ngx-floodlight';

@Component({
  ...
  imports: [NgxFloodlightComponent],
})
export class DemoComponent {}
```

Use it in your template:

```html
<div style="width: 100vw; height: 400px; position: relative; background: #101828;">
  <om-floodlight
    [gradientFirst]="'radial-gradient(68.54% 68.72% at 55.02% 31.46%, hsla(210, 100%, 85%, .15) 0, hsla(210, 100%, 55%, .05) 50%, hsla(210, 100%, 45%, 0) 80%)'"
    [gradientSecond]="'radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .1) 0, hsla(210, 100%, 55%, .02) 80%, transparent 100%)'"
    [gradientThird]="'radial-gradient(50% 50% at 50% 50%, hsla(210, 100%, 85%, .1) 0, hsla(210, 100%, 45%, .02) 80%, transparent 100%)'"
    [duration]="'2.5s'"
    [animate]="true"
    [animateOnlyOnce]="true"
    style="width: 100%; height: 100%; display: block;"
  ></om-floodlight>
</div>
```

## API

```html
<om-floodlight
  [gradientFirst]="cssGradient"
  [gradientSecond]="cssGradient"
  [gradientThird]="cssGradient"
  [duration]="cssDurationString"
  [animate]="boolean"
  [animateOnlyOnce]="boolean"
  [styleClass]="customClass"
>
  <ng-content></ng-content>
</om-floodlight>
```

* `gradientFirst` – (string, default: primary radial gradient)
* `gradientSecond` – (string, default: secondary radial gradient)
* `gradientThird` – (string, default: tertiary radial gradient)
* `duration` – (string, default: `'1s'`) Animation duration, e.g. `'2s'`
* `animate` – (boolean, default: `true`) Animation enabled
* `animateOnlyOnce` – (boolean, default: `false`) If true, animates only on first view
* `styleClass` – (string, optional) Custom CSS class for styling

## Styling

* Component fills parent by default; set container size via style/CSS
* All rendering is pure CSS, no extra dependencies
* Gradients, duration, and other styles are set via signals and reflected as CSS variables

## Notes

* Animation auto-plays when in view, auto-pauses when scrolled out
* SSR-safe: DOM access is always guarded
* All inputs/signals update instantly
* Designed for Angular 20 standalone, zoneless, signals, and no memory leaks

## Contributing

Contributions, PRs, and feedback welcome!

## License

MIT
