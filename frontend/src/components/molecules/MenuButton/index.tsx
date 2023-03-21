import { Box } from "theme-ui";

interface MenuButtonProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

export function MenuButton(props: MenuButtonProps) {
  return (
    <button onClick={() => props.setIsOpen(!props.isOpen)}>
      <Box
        sx={{
          width: "72px",
          height: "80px",
          background: `url(/svg/icon/${
            props.isOpen ? "close" : "menu"
          }.svg) no-repeat center`,
        }}
      />
    </button>
  );
}
