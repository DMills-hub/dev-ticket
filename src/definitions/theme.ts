interface Theme {
  navWidth: number;
  colours: {
    main: string;
  };
  text: {
    colours: {
      main: string;
    };
  };
}

const theme: Theme = {
  navWidth: 200,
  colours: {
    main: "#87807E",
  },
  text: {
    colours: {
      main: "#F51616",
    },
  },
};

export default theme;
