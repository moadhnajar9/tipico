function withOpacity(variableName) {
  return ({ opacityValue }) => {
    if (opacityValue !== undefined) {
      return `rgba(var(${variableName}), ${opacityValue})`;
    }
    return `rgb(var(${variableName}))`;
  };
}

module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        Source: "'Source Sans Pro', sans-serif",
      },
      textColor: {
        skin: {
          base: withOpacity("--color-text-base"),
          "grey-ash": withOpacity("--color-text-grey-ash"),
          "grey-light": withOpacity("--color-text-grey-light"),
          red: withOpacity("--color-text-red"),
          "grey-steel": withOpacity("--color-text-grey-steel"),
          "grey-dark": withOpacity("--color-text-grey-dark"),
        },
      },
      backgroundColor: {
        skin: {
          base: withOpacity("--color-bg-green-base"),
          second: withOpacity("--color-bg-black-second"),
          "grey-smoke": withOpacity("--color-bg-grey-smoke"),
          "grey-cloud": withOpacity("--color-bg-grey-cloud"),
          "grey-silver": withOpacity("--color-bg-grey-silver"),
          "blue-dark": withOpacity("--color-bg-blue-dark"),
          mystic: withOpacity("--color-bg-mystic"),
          "black-haze": withOpacity("--color-bg-black-haze"),
          "grey-iron": withOpacity("--color-bg-grey-iron"),
          "grey-not-so-light": withOpacity("--color-bg-grey-not-so-light"),
        },
      },
      colors: {
        "blue-dark": withOpacity("--color-bg-blue-dark"),
        "black-haze": withOpacity("--color-bg-black-haze"),
        "grey-silver": withOpacity("--color-bg-grey-silver"),
        "grey-pale": withOpacity("--color-bg-grey-pale"),
      },
    },
  },
  plugins: [],
};
