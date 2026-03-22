import { useRef, useEffect } from 'react';
import { useThree } from '@react-three/fiber';
import gsap from 'gsap';
import { CAMERA_POSITIONS } from '../utils/constants';

export function useCameraAnimation(activeSection) {
  const { camera } = useThree();
  const prevSection = useRef(null);

  useEffect(() => {
    if (prevSection.current === activeSection) return;
    prevSection.current = activeSection;

    const pos = CAMERA_POSITIONS[activeSection] || CAMERA_POSITIONS.hero;
    gsap.to(camera.position, {
      x: pos.x,
      y: pos.y,
      z: pos.z,
      duration: 2.2,
      ease: 'power3.inOut',
    });
    gsap.to(camera.rotation, {
      x: -0.1,
      y: pos.x * -0.03,
      duration: 2.2,
      ease: 'power3.inOut',
    });
  }, [activeSection, camera]);
}
