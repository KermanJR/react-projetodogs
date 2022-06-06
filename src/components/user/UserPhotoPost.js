import React from 'react';
import styles from './UserPhotoPost.module.css';
import {useForm} from '../../hooks/useForm'
import {useFetch} from '../../hooks/useFetch'
import {Input} from '../forms/Input.js'
import {Button} from '../forms/Button.js'
import { PHOTO_POST } from '../../api/Api';
import {Error} from '../helpers/Error'
import { useNavigate} from 'react-router-dom';


export const UserPhotoPost = () => {

  const nome = useForm();
  const peso = useForm('number');
  const idade = useForm('number');
  const [img, setImg] = React.useState({})
  const {data, error, loading, request} = useFetch();

  const navigate = useNavigate()

  React.useEffect(()=>{
    if(data) navigate('/conta')
  },[data, navigate])



  const handleSubmit = (e) =>{
    e.preventDefault()
    const formData = new FormData();
    formData.append('img', img.raw);
    formData.append('nome', nome.value);
    formData.append('peso', peso.value);
    formData.append('idade', idade.value);

    const token = window.localStorage.getItem('token')
    const {url, options} = PHOTO_POST(formData, token)
    request(url, options)
    
  }

  const handleImgChange = ({target}) =>{
    setImg({
      preview: URL.createObjectURL(target.files[0]),
      raw: target.files[0]
    })
  }

  return (
    <section className={`${styles.photoPost} animeLeft`}>
      <form onSubmit={handleSubmit}>
        <Input label="Nome" type="text" name="nome" {...nome}/>
        <Input label="Peso" type="number" name="peso" {...peso}/>
        <Input label="Idade" type="number" name="idade" {...idade}/>
        <Input className={styles.file} type="file" name="img" id="img" onChange={handleImgChange}/>

        {loading ?
          <Button disabled>Carregando...</Button>
            :
          <Button>Enviar</Button>
        }

        <Error error={error}/>
        
      </form>

      <div>
        {img.preview && <div className={styles.preview} style={{backgroundImage: `url(${img.preview})`}}></div>}
      </div>

    </section>

  )
}