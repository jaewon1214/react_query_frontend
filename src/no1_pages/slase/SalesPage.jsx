import React from 'react'
import SalesTable from '../../no2_components/slase/SalesTable'
import { getCurrentUser } from '../../no3_store/hooks/uesUser'
import AuthControler from '../../no2_components/layout/AuthControler';

const SalesPage = () => {
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
      <SalesTable/>
    </div>
  )
}

export default SalesPage
