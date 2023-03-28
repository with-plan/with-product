import { Children } from "react";
import { Box } from "theme-ui";

interface Typography {
  as: "h1" | "h2" | "h3" | "p";
  color?: string;
  children?: React.ReactNode;
}

const styles = {
  h1: {
    fontSize: ["76px", "100px"],
    fontWeight: "bold",
    lineHeight: ["1", "1.2"],
  },
  h2: {
    fontSize: ["28px", "34px"],
    fontWeight: "bold",
  },
  h3: {
    fontSize: "22px",
    fontWeight: "bold",
  },
  p: {
    fontSize: "16px",
    fontWeight: "400",
    lineHeight: "1.85",
  },
};

export function Typography(props: Typography) {
  const generateTypography = (as: string) => {
    switch (as) {
      case "h1":
        return (
          <Box as="h1" sx={styles.h1}>
            {props.children}
          </Box>
        );
      case "h2":
        return (
          <Box as="h2" sx={styles.h2}>
            {props.children}
          </Box>
        );
      case "h3":
        return (
          <Box as="h3" sx={styles.h3}>
            {props.children}
          </Box>
        );
      case "p":
        return (
          <Box as="p" sx={styles.p}>
            {props.children}
          </Box>
        );
      default:
        <Box as="p" sx={styles.p}>
          {props.children}
        </Box>;
    }
  };
  return <>{generateTypography(props.as)}</>;
}
