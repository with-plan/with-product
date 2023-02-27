import { Box } from "theme-ui";

interface Typography {
  as?: "h1" | "h2" | "h3" | "p";
  color?: string;
  children?: React.ReactNode;
}

interface GenerateFontStyles {
  as?: string;
  color?: string;
}

export function Typography(props: Typography) {
  const generateFontStyles = ({ as = "p", color = "typography" }) => {
    let style = {};
    switch (as) {
      case "h1":
        style = { ...style, fontSize: ["76px"], fontWeight: "bold" };
      case "h2":
        style = { ...style, fontSize: ["28px"], fontWeight: "bold" };
      case "h3":
        style = { ...style, fontSize: ["22px"], fontWeight: "bold" };
      case "p":
        style = {
          ...style,
          fontSize: ["20px"],
          fontWeight: "400",
          lineHeight: "1.85",
        };
    }
  };
  return (
    <Box
      as={props.as}
      style={{ color: "#111" }}
      sx={generateFontStyles(props.as)}
    >
      {props.children}
    </Box>
  );
}
