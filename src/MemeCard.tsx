import { Card } from "react-bootstrap";

export type MemeCardData = {
  id: number;
  imageUrl: string;
  description: string;
  title: string;
};

function MemeCard({ id, imageUrl, description, title }: MemeCardData) {
  return (
    <Card style={{ width: "18rem" }} className="p-5 m-5">
      <Card.Img
        variant="top"
        src={imageUrl}
        alt={title}
        width={256}
        height={256}
      />
      <Card.Body>
        <Card.Title>
          <h4>
            <i>{title}</i>- {id}
          </h4>
        </Card.Title>
        <Card.Text>
          <i>{description}</i>
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default MemeCard;
