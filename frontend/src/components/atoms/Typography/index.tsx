import { Box } from "theme-ui";

interface Typography {
  as?: "h1" | "h2" | "h3" | "h4" | "p";
  children?: React.ReactNode;
}

export function Typography(props: Typography) {
  const generateFontStyles = (as: string | undefined) => {
    switch (as) {
      case "h1":
        return { fontSize: ["76px"], fontWeight: "bold" };
      case "h2":
        return { fontSize: ["28px"], fontWeight: "bold" };
      case "h3":
        return { fontSize: ["22px"], fontWeight: "bold" };
      case "p":
        return { fontSize: ["20px"], fontWeight: "400", lineHeight: "1.85" };
    }
  };
  return (
    <Box as={props.as} sx={generateFontStyles(props.as)}>
      {props.children}
    </Box>
  );
}
