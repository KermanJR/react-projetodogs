import React from 'react'
import { UserHeaderNav } from './UserHeaderNav'
import styles from './UserHeader.module.css'
import { useLocation } from 'react-router-dom'

export const UserHeader = () => {


  const [title, setTitle] = React.useState('')
  const location = useLocation()

  React.useEffect(()=>{
    if(location.pathname === '/conta/postar'){
      setTitle('Poste sua foto')
    }else if(location.pathname === '/conta/estatisticas'){
      setTitle('Estatíticas')
    }else if(location.pathname === '/conta'){
      setTitle('Minha conta')
    }
  }, [location])

  return (
    <header className={styles.header}>
      <h1 className="title">{title}</h1>
      <UserHeaderNav/>
    </header>
  )
}
