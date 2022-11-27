import styles from './frontend-libs-category.module.css';

/* eslint-disable-next-line */
export interface FrontendLibsCategoryProps {}

export function FrontendLibsCategory(props: FrontendLibsCategoryProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FrontendLibsCategory!</h1>
    </div>
  );
}

export default FrontendLibsCategory;
