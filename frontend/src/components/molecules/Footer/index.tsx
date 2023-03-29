import { Typography } from "@/components/atoms/Typography";
import Image from "next/image";
import { Box } from "theme-ui";

export function Footer() {
  return (
    <Box
      as="footer"
      sx={{
        width: "100%",
        color: "#fff",
        textAlign: "center",
        background: "accent.tertiary",
        py: 2,
      }}
    >
      <small>©︎ 2023 with product</small>
    </Box>
  );
}
