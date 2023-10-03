import './styles.css'
import { FC } from 'react'

interface SearchItemProps {
  url: string
  title: string
  description: string
  onClick?: () => void
}

const SearchItem: FC<SearchItemProps> = (props) => {
  return (
    <div>
      <cite>{props.url}</cite>
      <h3 className="item-title text-bold">
        {props.onClick ? (
          <a className="link" onClick={() => props.onClick!()}>
            {props.title}
          </a>
        ) : (
          props.title
        )}
      </h3>
      <span>{props.description}</span>
    </div>
  )
}

export default SearchItem
