export interface ButtonProps {
  children: React.ReactNode;
}

export function Button({ children }: ButtonProps) {
  return <button style={styles}>{children}</button>;
}

const styles = {
  cursor: "pointer",
};
