module.exports = function({ variants }) {
  return function({ addUtilities, e }) {
    const className = 'visuallyhidden';
    const focusClassName = 'focusable';

    const focusable = {
      clip: 'auto',
      clipPath: 'none',
      height: 'auto',
      margin: '0',
      overflow: 'visible',
      position: 'static',
      width: 'auto',
      whiteSpace: 'inherit',
    };

    const utilities = {
      [`.${className}`]: {
        border: '0',
        clip: 'rect(0 0 0 0)',
        clipPath: 'inset(50%)',
        height: '1px',
        margin: '-1px',
        overflow: 'hidden',
        padding: '0',
        position: 'absolute',
        width: '1px',
        whiteSpace: 'nowrap', /* 1 */
      },

      [`.${className}.${focusClassName}:active`]: focusable,
      [`.${className}.${focusClassName}:focus`]: focusable,

    }

    addUtilities(utilities, variants)
  }
}