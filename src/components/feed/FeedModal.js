import React from 'react'
import styles from './FeedModal.module.css'
import {useFetch} from '../../hooks/useFetch'
import { Error } from '../helpers/Error';
import { Loading } from '../helpers/Loading';
import { PHOTOS_GET, PHOTO_GET, PHOTO_POST } from '../../api/Api';
import { PhotoContent } from '../Photo/PhotoContent';

export const FeedModal = ({photo, setModalPhoto}) => {

  const {data, error, loading, request} = useFetch();

  React.useEffect(()=>{
    const {url, options} = PHOTO_GET(photo.id);
    request(url, options)
  },[])

  function handleOutsideClick(event){
    if(event.target === event.currentTarget) setModalPhoto(null)
  }

  return (
    <div className={styles.modal} onClick={handleOutsideClick}>
      {error && <Error error={error}/>}
      {loading && <Loading/>}
      {data && <PhotoContent data={data}/>}
    </div>
  )
}
