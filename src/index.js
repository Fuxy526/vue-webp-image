function checkSupportWebp() {
  try {
    return document.createElement('canvas').toDataURL('image/webp', 0.5).indexOf('data:image/webp') === 0;
  } catch (err) {
    return false;
  }
}
const isSupportWebp = checkSupportWebp();

export default {
  install(Vue) {
    const v = +Vue.version.split('.')[0];
    const handler = (el, binding) => {
      if (binding.arg === 'src' && el.nodeName === 'IMG') {
        isSupportWebp && (el.src = binding.value);
      }
      if (binding.arg === 'bg') {
        isSupportWebp && (el.style.backgroundImage = `url(${binding.value})`);
      }
      if (binding.arg === 'bgs') {
        el.style.backgroundImage = `url(${isSupportWebp ? binding.value[0] : binding.value[1]})`;
      }
    }
    const directive = v >=3 ? { mounted: handler } : { inserted: handler };
    Vue.directive('webp', directive);
  },
};
