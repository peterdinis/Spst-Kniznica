import styles from './frontend-libs-api.module.css';

/* eslint-disable-next-line */
export interface FrontendLibsApiProps {}

export function FrontendLibsApi(props: FrontendLibsApiProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FrontendLibsApi!</h1>
    </div>
  );
}

export default FrontendLibsApi;
