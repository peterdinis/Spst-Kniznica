import styles from './frontend-libs-books.module.css';

/* eslint-disable-next-line */
export interface FrontendLibsBooksProps {}

export function FrontendLibsBooks(props: FrontendLibsBooksProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FrontendLibsBooks!</h1>
    </div>
  );
}

export default FrontendLibsBooks;
