import styles from './frontend-libs-hero.module.css';

/* eslint-disable-next-line */
export interface FrontendLibsHeroProps {}

export function FrontendLibsHero(props: FrontendLibsHeroProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to FrontendLibsHero!</h1>
    </div>
  );
}

export default FrontendLibsHero;
