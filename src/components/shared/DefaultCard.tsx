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
  console.log(props);
  return (
    <Card
      style={{
        width: "600px",
        color: color,
        backgroundColor: backgroundColor,
      }}
    >
      <CardHeader title={title} />
      <CardContent>
        <>{cardContent}</>
      </CardContent>
    </Card>
  );
};
export default DefaultCard;
