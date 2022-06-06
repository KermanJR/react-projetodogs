
import React from 'react'
import { PHOTOS_GET } from '../../api/Api';
import { useFetch } from '../../hooks/useFetch'
import { FeedPhotosItem } from './FeedPhotosItem'
import { Error } from '../helpers/Error';
import { Loading } from '../helpers/Loading';
import styles from './FeedPhotos.module.css'

export const FeedPhotos = ({setModalPhoto}) => {

    const { data, loading, error, request } = useFetch();

    React.useEffect(()=>{
        async function fetchPhotos(){
            const {url, options} = PHOTOS_GET({page: 1, total: 6, user: 0})
            const {response, json} = await request(url, options)
            console.log(json)
        
        }

        fetchPhotos()

    }, [request])

    if(error) return <Error error={error} />
    if(loading) return < Loading />
    if(data)
    return (
        <ul className={`${styles.feed} animeLeft`}>
            {data.map(photo =>{
               return <FeedPhotosItem key={photo.id} photo={photo} setModalPhoto={setModalPhoto}/>
            })}

        </ul>
    )
    else{
        return null;
    }
}
