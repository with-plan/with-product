import Image from "next/image";
import { Typography } from "@/components/atoms/Typography";
import { Box } from "theme-ui";
import { Template } from "@/components/templates/Template";

export default function Contact() {
  return (
    <Template
      pageName={"お問い合わせ"}
      contents={
        <>
          <Box sx={{ mt: 6 }}>
            <Typography as="p">
              以下のメールアドレスまでお問い合わせください。
            </Typography>
          </Box>
          <Box
            as="button"
            sx={{
              background: "base.primary",
              py: 2,
              px: 5,
              border: "1px solid #e3e0da",
              borderRadius: "100vw",
              mt: 4,
            }}
          >
            <a href="mailto:with.plan.205@gmail.com">
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                <Box
                  sx={{ position: "relative", width: "20px", height: "20px" }}
                >
                  <Image
                    src={`svg/icon/mail.svg`}
                    alt={"メールのアイコン"}
                    layout="fill"
                    objectFit="contain"
                  />
                </Box>
                <Typography as="p">with.plan.205@gmail.com</Typography>
              </Box>
            </a>
          </Box>
        </>
      }
    />
  );
}
