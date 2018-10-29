import * as React from "react"
import { connect } from "react-redux"
import MagnifyIcon from "@material-ui/icons/Search"
import { lighten } from "polished"

import styled from "../templates/styled"
import { fetchBeverages } from "../organisms/search-results/actions/searchResultsActions"
import ThemeInterface from "../templates/theme"

interface OwnProps {
  searchTerm?: string
  fetchBeverages?: (term: string) => void
  color?: any
  background?: string
  theme?: ThemeInterface
}

const MagnifierIconWrapper = styled.div`
  grid-column: 11 / -1;
  color: ${(props: OwnProps) => (props.color ? props.color : props.theme.primary)};
  background: ${(props: OwnProps) => (props.background ? props.background : "transparent")};
  padding: 10px;
  font-size: 24px;
  border-radius: 10px;
  cursor: pointer;
  width: 24px;
  height: 24px;
  transition: border-radius 0.3s;

  &:hover {
    border-radius: 50%;
    color: ${props => lighten(0.3, props.theme.primary)};
  }
`

class SearchMagnifierIcon extends React.Component<OwnProps> {
  public searchBeverages = () => {
    console.warn("this.props.fetchBeverages(this.props.searchTerm)", this.props.searchTerm)
    this.props.fetchBeverages(this.props.searchTerm)
  }

  render() {
    const { background } = this.props
    return (
      <MagnifierIconWrapper background={background} onClick={this.searchBeverages}>
        <MagnifyIcon />
      </MagnifierIconWrapper>
    )
  }
}

export default connect(
  null,
  { fetchBeverages }
)(SearchMagnifierIcon)
