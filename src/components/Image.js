import product from "../product"

const Image = () => {
  return (
    <div>
        <img src={product.imageUrl} />
    </div>
  )
}

export default Image