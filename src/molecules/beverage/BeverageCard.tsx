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

const BeverageCard: React.SFC<BeverageCardProps> = ({ title }) => (
  <BeverageCardContainer>
    <Picture image="http://lorempixel.com/150/200/sports/" title="Contemplative Reptile" />
    <CardContent>
      <Typography gutterBottom variant="h5" component="h2">
        {title}
      </Typography>
      <Typography component="p">
        Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging across
      </Typography>
    </CardContent>
    <CardActions>
      <Button size="small" color="primary">
        Share
      </Button>
      <Button size="small" color="primary">
        Learn More
      </Button>
    </CardActions>
  </BeverageCardContainer>
)

export default BeverageCard
