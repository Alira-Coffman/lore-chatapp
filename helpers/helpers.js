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

export const mergeRefs = (refs) => {
  return (value) => {
    refs.forEach((ref) => {
      if (typeof ref === 'function') {
        ref(value);
      } else if (ref != null) {
        ref.current = value;
      }
    });
  };
};

export const randomColor = () => {
  const colors = [
    'primary',
    'secondary',
    'success',
    'info',
    'warning',
    'danger',
  ];

  const color = Math.floor(Math.random() * colors.length);

  return colors[color];
};

export const priceFormat = (price) => {
  return price?.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

export const average = (array) => array.reduce((a, b) => a + b) / array.length;

export const percent = (value1, value2) =>
  Number(((value1 / value2 - 1) * 100).toFixed(2));

export const getFirstLetter = (text, letterCount = 2) =>
  text
    .toUpperCase()
    .match(/\b(\w)/g)
    .join('')
    .substring(0, letterCount);

export const debounce = (func, wait = 1000) => {
  let timeout;

  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };

    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
};

export const pathRetouch = (path) => {
  if (path === '/') return '/';
  return '/' + path;
};

export const pathToRoute = (path) => {
  if (path === '/') return '/';
  if (path?.length > 1 && path?.substring(1, 0) === '/')
    return path?.substring(1, path?.length);
  return path;
};
