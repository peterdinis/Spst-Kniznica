import styles from './frontend-libs-pages.module.css';

/* eslint-disable-next-line */
export interface FrontendLibsPagesProps {}

export function FrontendLibsPages(props: FrontendLibsPagesProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FrontendLibsPages!</h1>
    </div>
  );
}

export default FrontendLibsPages;
