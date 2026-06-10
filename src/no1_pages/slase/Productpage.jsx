import React from 'react'
import ProductTable from '../../no2_components/slase/ProductTable'
import { getCurrentUser } from '../../no3_store/hooks/uesUser'
import AuthControler from '../../no2_components/layout/AuthControler'

const Productpage = () => {
  const user = getCurrentUser();
  if(!user){
    return(
      <AuthControler
        message="로그인 후 상품 정보를 조회 및 관리할 수 있습니다."
      />
    )
  }

  return (
    <div>
      <ProductTable/>
    </div>
  )
}

export default Productpage
