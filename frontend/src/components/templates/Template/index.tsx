import { Typography } from "@/components/atoms/Typography";
import { Breadcrumb } from "@/components/organisms/Breadcrumb";
import { Header } from "@/components/organisms/Header";
import { Box } from "theme-ui";

interface TemplateProps {
  pageName: string;
  contents: React.ReactNode;
}

export function Template({ pageName, contents }: TemplateProps) {
  return (
    <Box
      sx={{
        position: "relative",
        height: "100vh",
        background: "base.secondary",
        "::before": {
          content: '""',
          display: "block",
          position: "absolute",
          bottom: 0,
          right: 0,
          width: ["375px", "678px"],
          height: ["144px", "516px"],
          background: [
            "url(svg/line_curve_sp.svg) no-repeat",
            "url(svg/line_curve_pc.svg) no-repeat",
          ],
        },
      }}
    >
      <Header />
      <Box sx={{ py: 3 }}>
        <Breadcrumb label={pageName} />
      </Box>

      <Box as="section" sx={{ px: [3, "0px"] }}>
        <Box sx={{ maxWidth: "1000px", pt: 10, mx: "auto", flex: 1 }}>
          <Typography as="h2">{pageName}</Typography>
          {contents}
        </Box>
      </Box>
    </Box>
  );
}
