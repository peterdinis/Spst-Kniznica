import styles from './frontend-libs-about.module.css';

/* eslint-disable-next-line */
export interface FrontendLibsAboutProps {}

export function FrontendLibsAbout(props: FrontendLibsAboutProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FrontendLibsAbout!</h1>
    </div>
  );
}

export default FrontendLibsAbout;
