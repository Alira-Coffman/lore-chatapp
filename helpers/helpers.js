export function test() {
  return null;
}

export function getOS() {
  const { userAgent } = typeof window !== 'undefined' && window.navigator;
  const { platform } = typeof window !== 'undefined' && window.navigator;
  const macosPlatforms = ['Macintosh', 'MacIntel', 'MacPPC', 'Mac68K'];
  const windowsPlatforms = ['Win32', 'Win64', 'Windows', 'WinCE'];
  const iosPlatforms = ['iPhone', 'iPad', 'iPod'];
  let os = null;

  if (macosPlatforms.indexOf(platform) !== -1) {
    os = 'MacOS';
  } else if (iosPlatforms.indexOf(platform) !== -1) {
    os = 'iOS';
  } else if (windowsPlatforms.indexOf(platform) !== -1) {
    os = 'Windows';
  } else if (/Android/.test(userAgent)) {
    os = 'Android';
  } else if (!os && /Linux/.test(platform)) {
    os = 'Linux';
  }

  typeof document !== 'undefined' &&
    document.documentElement.setAttribute('os', os);
  return os;
}

export const hasNotch = () => {
  const storybook =
    typeof window !== 'undefined'
      ? window.location !== window.parent.location
      : '';
  const iPhone =
    typeof window !== 'undefined'
      ? /iPhone/.test(navigator.userAgent) && !window?.MSStream
      : '';
  const aspect =
    typeof window !== 'undefined'
      ? window.screen.width / window.screen.height
      : 0;
  const aspectFrame =
    typeof window !== 'undefined' ? window.innerWidth / window.innerHeight : 0;
  return (
    (iPhone && aspect.toFixed(3) === '0.462') ||
    (storybook && aspectFrame.toFixed(3) === '0.462')
  );
};


