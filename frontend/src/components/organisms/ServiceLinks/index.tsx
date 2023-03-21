import { Typography } from "@/components/atoms/Typography";
import Link from "next/link";
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
            py: 3,
            px: 4,
            boxShadow: "0px 4px 10px rgba(0,0,0,.2)",
          }}
          key={item.name}
        >
          <Link href={item.url}></Link>
          <Typography as="p">{item.name}</Typography>
        </Box>
      ))}
    </>
  );
};
