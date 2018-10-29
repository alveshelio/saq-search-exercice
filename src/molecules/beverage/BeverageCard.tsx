import * as React from "react"
import {
  Card,
  CardActionArea,
  CardMedia,
  CardActions,
  CardContent,
  Typography,
  Button,
} from "@material-ui/core"

import styled from "../../templates/styled"
interface BeverageCardProps {
  title: string
  thumbnail: string
  country: string
  price: string
  classification: string
  availability: string
}

const BeverageCardContainer = styled(Card)`
  height: 100%;
`

const CardContentWrapper = styled(CardActionArea)`
  display: grid;
`

const Picture = styled(CardMedia)`
  height: 250px;
  max-width: 150px;
  margin: 10px auto;
`

const BeverageCard: React.SFC<BeverageCardProps> = ({
  title,
  thumbnail,
  country,
  price,
  classification,
  availability,
}) => (
  <BeverageCardContainer>
    <Picture image={thumbnail} />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h5">
        {title}
      </Typography>
      <Typography component="p">Price: {price}</Typography>
      <Typography component="p">Country: {country}</Typography>
      {classification && <Typography component="p">Classification: {classification}</Typography>}
      <Typography component="p">Availability: {availability}</Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions>
  </BeverageCardContainer>
)

export default BeverageCard
