import cn from 'classnames';
import './loader.css';

type LoaderProps = {
  fullScreen?: boolean;
};

export default function Loader({fullScreen}: LoaderProps): JSX.Element {
  return (
    <div className={cn('loader', {'loader--full': fullScreen})}>
      Loading...
    </div>
  );
}
