declare module '*.svg' {
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export default ReactComponent;
}

declare type UIColors = 'primary' | 'success' | 'error' | 'notify';
