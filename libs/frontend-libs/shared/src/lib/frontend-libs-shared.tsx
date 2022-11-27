import styles from './frontend-libs-shared.module.css';

/* eslint-disable-next-line */
export interface FrontendLibsSharedProps {}

export function FrontendLibsShared(props: FrontendLibsSharedProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FrontendLibsShared!</h1>
    </div>
  );
}

export default FrontendLibsShared;
