import { images } from './data.js';

import './styles.scss';

export default function CardItem() {
  return (
    <div className="Cards-grid" >
      {images.map(({ src, aspect }, index) => (
          <img
            key={index}
            className={`Cards-item ${aspect}`}
            src={src}
          />
        ))}
    </div>
  )
}
