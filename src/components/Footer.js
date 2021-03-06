import React from 'react';
import styles from './footer.module.css';
import envelope from './assets/envelope.png';
import github from './assets/github.png';
import linkedin from './assets/linkedin.png';

export default function Footer(){
  return(
    <div>
      <div className={styles.footerWrapper}>
      <a name='contact'/>
      <div className={styles.iconContainer}>
        <div>
          <a href='mailto:markeleary@gmail.com'>
            <img src={envelope} alt='email'/>
            <p>Email</p>
          </a>
        </div>
        <div>
          <a href='https://www.linkedin.com/in/tedleary/'>
          <img src={linkedin} alt='linkedin'/>
          <p>LinkedIn</p>
          </a>
        </div>
        <div>
          <a href='https://github.com/1stBoltCrux'>
            <img src={github} alt='github'/>
            <p>Github</p>
          </a>
        </div>
      </div>
    </div>
    </div>
  )
}
