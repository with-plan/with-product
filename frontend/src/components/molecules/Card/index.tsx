import Image from "next/image";
import { Typography } from "@/components/atoms/Typography";
import { Box } from "theme-ui";

interface CardProps {
  number: string;
  imageName: string;
  title: string;
  text: string | React.ReactNode;
}

export function Card({ number, imageName, title, text }: CardProps) {
  return (
    <Box
      backgroundColor="#fff"
      sx={{
        position: "relative",
        display: "flex",

        maxWidth: ["100%", "300px"],
        flexDirection: "column",
        alignItems: "center",
        p: "34px",
        boxShadow: "0px 4px 10px rgba(0,0,0,.2)",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: "-30px",
          left: "50%",
          transform: "translateX(-50%)",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "58px",
            height: "58px",
            bg: "accent.secondary",
            borderRadius: "50%",
            p: 2,
            boxShadow: "0px 4px 10px rgba(0,0,0,.2)",
          }}
        >
          <Box
            as="span"
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -57%)",
              color: "white",
              fontSize: "30px",
              lineHeight: 1,
            }}
          >
            {number}
          </Box>
        </Box>
      </Box>
      <Box sx={{ position: "relative", width: "110px", height: "160px" }}>
        <Image
          src={`svg/icon/${imageName}.svg`}
          alt={"ショッピングカートのアイコン"}
          layout="fill"
          objectFit="contain"
        />
      </Box>

      <Typography as="h3">{title}</Typography>
      <Box pt="20px">{text}</Box>
    </Box>
  );
}
