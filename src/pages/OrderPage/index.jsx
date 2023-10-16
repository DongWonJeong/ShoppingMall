import React from 'react'
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth'
import OrdersList from './orders-list/OrdersList';

const OrderPage = () => {

  const {isAuth} = useAuth();

  //로그인이 안될시 Navigate to="/"경로로 이동
  if(!isAuth) return <Navigate to="/" />

  return (
    <div className='page'>
      <div className='container'>
        <h1>주문 목록</h1>
          <OrdersList />
      </div>

    </div>
  )
}

export default OrderPage