import styles from './frontend-libs-student.module.css';

/* eslint-disable-next-line */
export interface FrontendLibsStudentProps {}

export function FrontendLibsStudent(props: FrontendLibsStudentProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FrontendLibsStudent!</h1>
    </div>
  );
}

export default FrontendLibsStudent;
