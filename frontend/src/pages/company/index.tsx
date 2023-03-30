import { Template } from "@/components/templates/Template";
import { Box } from "theme-ui";

export default function Company() {
  return (
    <Template
      pageName={"会社概要"}
      contents={
        <Box
          as="table"
          sx={{
            borderBottom: "1px solid #e3e0da",
            mt: 6,
            "& tr": { borderTop: "1px solid #e3e0da" },
            "& th": {
              width: "160px",
              py: 4,
              px: 2,
              borderRight: "1px solid #e3e0da",
            },
            "& td": { width: "340px", py: 4, px: 2 },
          }}
        >
          <tr>
            <th>社名</th>
            <td>With企画</td>
          </tr>
          <tr>
            <th>代表所在地</th>
            <td>大阪府和泉市葛の葉町1-10-43</td>
          </tr>
          <tr>
            <th>設立年</th>
            <td>2023年</td>
          </tr>
        </Box>
      }
    />
  );
}
