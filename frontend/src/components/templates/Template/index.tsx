import Image from "next/image";
import { Typography } from "@/components/atoms/Typography";
import { Breadcrumb } from "@/components/organisms/Breadcrumb";
import { Header } from "@/components/organisms/Header";
import router from "next/router";
import { Box } from "theme-ui";

interface TemplateProps {
  pageName: string;
  contents: React.ReactNode;
}

export function Template({ pageName, contents }: TemplateProps) {
  return (
    <Box sx={{ height: "100vh", background: "base.secondary" }}>
      <Header />
      <Box sx={{ py: 3 }}>
        <Breadcrumb label={pageName} />
      </Box>

      <Box as="section">
        <Box sx={{ maxWidth: "1000px", pt: 10, mx: "auto", flex: 1 }}>
          <Typography as="h2">{pageName}</Typography>
          {contents}
        </Box>
      </Box>
    </Box>
  );
}
