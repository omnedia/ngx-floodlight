import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  Inject,
  Input,
  OnDestroy,
  PLATFORM_ID,
  signal,
  ViewChild
} from '@angular/core';
import {CommonModule, isPlatformBrowser} from '@angular/common';

@Component({
  selector: 'om-floodlight',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './ngx-floodlight.component.html',
  styleUrl: './ngx-floodlight.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NgxFloodlightComponent implements AfterViewInit, OnDestroy {
  @ViewChild('OmFloodlight') elementRef!: ElementRef<HTMLElement>;

  @Input() styleClass?: string;

  @Input() animate = true;

  @Input() animateOnlyOnce = false;

  @Input() set gradientFirst(v: string) {
    this.style.update(prev => ({...prev, '--floodlight-gradient-first': v}));
  }

  @Input() set gradientSecond(v: string) {
    this.style.update(prev => ({...prev, '--floodlight-gradient-second': v}));
  }

  @Input() set gradientThird(v: string) {
    this.style.update(prev => ({...prev, '--floodlight-gradient-third': v}));
  }

  @Input() set duration(v: string) {
    this.style.update(prev => ({...prev, '--animation-duration': v}));
  }

  style = signal({});

  private intersectionObserver?: IntersectionObserver;
  inViewport = signal(false);
  playedAnimationOnce = false;

  constructor(@Inject(PLATFORM_ID) private platformId: object) {
  }

  ngAfterViewInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.intersectionObserver = new IntersectionObserver(([entry]) => {
        this.inViewport.set(entry.isIntersecting);

        if (this.inViewport()) {
          this.playedAnimationOnce = true;
        }
      });
      this.intersectionObserver.observe(this.elementRef.nativeElement);
    }
  }

  ngOnDestroy(): void {
    if (this.intersectionObserver) this.intersectionObserver.disconnect();
  }
}
