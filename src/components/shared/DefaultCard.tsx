import { Card, CardContent, CardHeader } from "@mui/material";

type DefaultCardProps = {
  title: string;
  cardContent?: any;
  width?: string;
  tabTitle?: string;
  color?: string;
  backgroundColor?: string;
};

const DefaultCard = (props: DefaultCardProps) => {
  const { title, cardContent, width, tabTitle, color, backgroundColor } = props;
  return (
    <Card
      style={{
        color,
        width,
        backgroundColor,
      }}
    >
      <CardHeader title={title}></CardHeader>
      <CardContent>{cardContent}</CardContent>
    </Card>
  );
};
export default DefaultCard;
