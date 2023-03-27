import { Typography } from "@/components/atoms/Typography";
import Link from "next/link";
import Image from "next/image";
import { Box } from "theme-ui";

const ServiceLinksData = [
  { name: "メルカリ", url: "https://jp.mercari.com/user/profile/161862171" },
];

export const ServiceLinks = () => {
  return (
    <>
      {ServiceLinksData.map((item) => (
        <Box
          sx={{
            display: "inline-block",
            bg: "#fff",
            py: 3,
            px: 4,
            boxShadow: "0px 4px 10px rgba(0,0,0,.2)",
          }}
          key={item.name}
        >
          <a href={item.url} target="blank" style={{ display: "block" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Typography as="p">{item.name}</Typography>
              <Box
                sx={{
                  position: "relative",
                  width: "14px",
                  height: "30px",
                  ml: 1,
                }}
              >
                <Image
                  src={`svg/icon/external-link.svg`}
                  alt={"別タブで開く"}
                  layout="fill"
                  objectFit="contain"
                />
              </Box>
            </Box>
          </a>
        </Box>
      ))}
    </>
  );
};
