import { Component } from 'react';
import styles from './Loader.module.css';

export default class Loader extends Component {
  render() {
    return (
      <div className={styles.Preloader}>
        <div className={styles.preloader__row}>
          <div className={styles.preloader__item}></div>
          <div className={styles.preloader__item}></div>
        </div>
      </div>
    );
  }
}
