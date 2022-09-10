
import './index.css'

const ShowingItem = (props) => {

    const {itemsList} = props

    const {imgUrl, nameofdish} = itemsList

    return (

        <li>
            <div className='bg-for-item'>
            <img src = {imgUrl} className = 'image-item' alt = {nameofdish}/>
            <center>
            <p className='dish-name'>{nameofdish}</p>
            <button type = 'button' className='button'>Add to cart</button>
            </center>
            </div>
        </li>
    )
}

export default ShowingItem