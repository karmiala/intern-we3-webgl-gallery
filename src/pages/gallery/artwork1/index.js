import React, { useRef, useCallback, useEffect } from 'react';

import { useDispatch } from 'react-redux';
import { gsap } from 'gsap';
import dynamic from 'next/dynamic';
import styles from './../gallery.module.scss';

import Head from '../../../components/Head/Head';

import { withRedux } from '../../../redux/withRedux';
import { setLandingLoaded } from '../../../redux/modules/app';

const ArtCanvas = dynamic(() => import('./artwork'), {
  ssr: false
});

export const isBrowser = typeof window !== 'undefined';
function Artwork() {
  const containerRef = useRef();
  const dispatch = useDispatch();
  const animateInInit = useCallback(() => {
    gsap.set(containerRef.current, { autoAlpha: 0 });
  }, []);

  const animateIn = useCallback(async () => {
    await gsap.to(containerRef.current, { duration: 0.5, autoAlpha: 1, delay: 0.3 });
    dispatch(setLandingLoaded(true));
  }, [dispatch]);

  useEffect(() => {
    animateInInit();
  }, [animateInInit]);

  useEffect(() => {
    animateIn();
  }, [animateIn]);

  return (
    <main className={styles.Landing}>
      <Head title="Amna's" />
      <div id="scene-container" className={styles.amna}>
        {isBrowser && <ArtCanvas></ArtCanvas>}
      </div>
      <div id="canvasclass" className={styles.canvasplacement}></div>
      <section id="author" className={styles.ml12} ref={containerRef}></section>
      <audio autoPlay loop src="../../assets/sounds/piano.ogg" type="audio/ogg"></audio>
      <section id="quote" className={styles.ml12quote}></section>
    </main>
  );
}

export default withRedux(Artwork);
