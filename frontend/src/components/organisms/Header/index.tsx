import { Logo } from "@/components/atoms/Logo";
import { MenuButton } from "@/components/molecules/MenuButton";
import { useState } from "react";
import { Box } from "theme-ui";
import { ServiceLinks } from "../../molecules/ServiceLinks";

export function Header() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <Box as="header">
      <Box
        sx={{
          width: "100%",
          maxWidth: "1000px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: [3, "0px"],
          mx: "auto",
        }}
      >
        <Box sx={{ width: "120px" }}>
          <Logo />
        </Box>
        <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
      </Box>

      {/* メニュー */}
      <Box
        as="menu"
        sx={{
          display: "block",
          position: "fixed",
          top: 0,
          left: 0,
          zIndex: isOpen ? 10 : -10,
          width: "100vw",
          height: "100vh",
          opacity: isOpen ? "1" : "0",
          transition: ".5s",
          bg: "accent.primary",
        }}
      >
        <Box sx={{ maxWidth: "1000px", mx: "auto" }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "flex-end",
              alignItems: "center",
              px: [3, "0px"],
            }}
          >
            <MenuButton isOpen={isOpen} setIsOpen={setIsOpen} />
          </Box>
          <Box sx={{ p: 4 }}>
            <ul style={{ fontSize: "22px", fontWeight: "bold" }}>
              <li>会社概要</li>
              <li style={{ marginTop: "30px" }}>お問い合わせ</li>
            </ul>
          </Box>
        </Box>
        <Box sx={{ maxWidth: "1000px", p: 4, mt: 5, mx: "auto" }}>
          <ServiceLinks />
        </Box>

        <Box sx={{ bg: "accent.tertiary", height: "100%", mt: -10, pt: 8 }}>
          <Box></Box>
        </Box>
      </Box>
    </Box>
  );
}
