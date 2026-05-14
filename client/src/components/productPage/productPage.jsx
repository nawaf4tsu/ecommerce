import { useEffect, useState } from 'react'
import ShoppingCart from '../globalElements/shoppingCart/cart'
import NavBar from '../globalElements/navBar/navBar'
import ProductDetailsPage from './productDetailsPage/productDetailsPage';
import { useParams } from 'react-router';
import axios from '../../axios';
import { API_KEY_ALL_DATA } from '../../constants/constant';



function productPage() {
  const { id } = useParams();
  const [productDataToDetails, setProductDataToDetails] = useState()
  const [getProductData, setGetProductData] = useState()
  useEffect(() => {
    axios.get(API_KEY_ALL_DATA).then((response) => {
      setGetProductData(response.data);
    })
  }, [])

  useEffect(() => {
    setProductDataToDetails(getProductData?.find(item => item.id === id));
  }, [getProductData])


  console.log("sadfsadf", productDataToDetails);


  return (
    <>
      <NavBar />
      <ShoppingCart />
      <ProductDetailsPage productData={productDataToDetails?productDataToDetails:""} />

    </>
  )
}

export default productPage