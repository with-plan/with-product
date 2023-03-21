import { Logo } from "@/components/atoms/Logo";
import { MenuButton } from "@/components/molecules/MenuButton";
import { useState } from "react";
import { Box } from "theme-ui";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Box
      as="header"
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        px: 3,
      }}
    >
      <Box sx={{ width: "120px" }}>
        <Logo />
      </Box>
      <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      <Box
        as="menu"
        sx={{
          display: "block",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: 10,
          width: "100vw",
          height: "100vh",
          opacity: isOpen ? "1" : "0",
          transition: ".5s",
          bg: "accent.primary",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
            px: 3,
          }}
        >
          <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
        </Box>
      </Box>
    </Box>
  );
}
