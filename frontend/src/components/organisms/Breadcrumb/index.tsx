import Link from "next/link";
import { Box } from "theme-ui";

interface BreadcrumbProps {
  label: string;
}

export function Breadcrumb(props: BreadcrumbProps) {
  return (
    <Box
      sx={{
        maxWidth: "1000px",
        display: "flex",
        gap: 3,
        color: "accent.tertiary",
        mx: "auto",
      }}
    >
      <Link href="/">TOP</Link>
      <>{">"}</>
      <p>{props.label}</p>
    </Box>
  );
}
