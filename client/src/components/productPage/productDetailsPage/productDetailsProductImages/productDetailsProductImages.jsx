import './productDetailsProductImages.css'


function ProductDetailsProductImages({images}) {
  return (
    <button className='productDetailsProducImage'>
      <img src={images?images:''} alt="" />
    </button>
  )
}

export default ProductDetailsProductImages