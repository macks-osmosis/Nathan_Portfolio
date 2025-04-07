declare module 'vanta/dist/vanta.net.min' {
  interface VantaNetEffect {
    destroy: () => void;
    setOptions: (options: Partial<VantaNetConfig>) => void;
  }

  interface VantaNetConfig {
    el: HTMLElement | null;
    THREE: any;
    mouseControls: boolean;
    touchControls: boolean;
    gyroControls: boolean;
    minHeight: number;
    minWidth: number;
    scale: number;
    scaleMobile: number;
    color: number;
    backgroundColor: number;
    points: number;
    maxDistance: number;
    spacing: number;
    showDots: boolean;
    showLines: boolean;
    lineColor: number;
    dotColor: number;
    lineWidth: number;
    pointSize: number;
    rotationSpeed: number;
    animationSpeed: number;
  }

  const NET: (config: VantaNetConfig) => VantaNetEffect;
  export default NET;
} 