import { ProgressBar } from 'react-loader-spinner';
import css from 'components/Loader/Loader.module.css';

export default function Loader() {
  return (
    <div className={css.loader}>
      <ProgressBar
        height="100"
        width="100"
        ariaLabel="progress-bar-loading"
        wrapperStyle={{}}
        wrapperClass="progress-bar-wrapper"
        borderColor="#F4442E"
        barColor="#51E5FF"
      />
    </div>
  );
}
