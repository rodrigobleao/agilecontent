import './styles.css'
import { FC } from 'react'

interface SearchItemProps {
  url: string
  title: string
  description: string
  onClick: () => void
}

const SearchItem: FC<SearchItemProps> = (props) => {
  return (
    <div>
      <cite>{props.url}</cite>
      <h3 className="title">
        <a onClick={() => props.onClick()}>{props.title}</a>
      </h3>
      <span>{props.description}</span>
    </div>
  )
}

export default SearchItem
