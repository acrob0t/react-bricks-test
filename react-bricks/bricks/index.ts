import { types } from 'react-bricks/frontend'
import website from 'react-bricks-ui/website'
import blog from 'react-bricks-ui/blog'
import HeroUnit from './MyHeroUnit'
import Thumbnail from './Thumbnail'


// React Bricks UI + Custom bricks
const bricks: types.Brick<any>[] = [...website, ...blog, HeroUnit, Thumbnail]

export default bricks
