import React from "react";
import {
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Row
} from "reactstrap";

export default function CharacterCard(props) {
  return (
  <Row>
  <Card style={{ backgroundColor: 'green', borderColor: 'yellow', color: "turquoise", width: "100%" }}>
      <CardBody>
          <CardImg src={props.img}/>
          <CardTitle>Name:{props.name}</CardTitle>
          <CardSubtitle>Status: {props.status}</CardSubtitle>
          <CardSubtitle>Origin: {props.origin}</CardSubtitle>
          <CardSubtitle>Homeworld: {props.location}</CardSubtitle>
      </CardBody>
  </Card>
</Row>)
}
