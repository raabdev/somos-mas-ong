import React, {useRef, useState, useEffect} from 'react'
import {Textarea , Box, Image, Button, Text, Radio, RadioGroup, Stack} from '@chakra-ui/react'
import { EditBtn, ErrorText } from '../SharedComponents';

const Slides = ({mockUp}) => {
  const [image, setImage] = useState();
  const [preview, setPreview] = useState('');
  const [text, setText]=useState('')
  const [value, setValue] =useState("0")
  const [errors, setErrors]=useState(null)
  const [isValid, setValid]=useState(false)
  const [isSubmiting, setSubmit]=useState(false)  
  const fileInputRef = useRef();

  useEffect(()=>{
    setPreview(mockUp[value].img)
    setText(mockUp[value].text)
  },[value])
  
  useEffect(() => {
    if (image) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(image);
    }
  }, [image]);

  const handleBlur=()=>{
    setErrors(null)
    if(!preview){
      setErrors('Debe elejir una imagen')
    }else if(!text){
      setErrors('Ingrese un texto')
    }else{
      setValid(true)
    }
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
      setSubmit(true)
      console.log(preview, text)
    
  }
  
  return (
    <>      
      <Box w={{base:'450px', sm:'450px', md:'700px', lg:'800px'}} px='20px' textAlign='center' m='auto' my='20px'>
       <Text fontSize='4xl' p='20px'>Slides</Text>
       <RadioGroup onChange={setValue} value={value} mb='30px'>
        <Stack direction={{base:'column', sm:'column', md:'row', lg:'row'}}>
          <Radio size="lg" value="0">Primero</Radio>
          <Radio size="lg" value="1">Segundo</Radio>
          <Radio size="lg" value="2">Tercero</Radio>
        </Stack>
       </RadioGroup>
        <form onSubmit={handleSubmit}>
            <Image 
              boxSize="250px"
              objectFit="cover"
              src={preview}
              alt="Dan Abramov"
              m='auto'
              borderRadius='20px'
            />
            <input 
              type="file"
              style={{ display: "none" }}
              ref={fileInputRef}
              accept="image/*"
              onChange={(event) => {
              const file = event.target.files[0];
              if (file && file.type.substr(0, 5) === "image") {
                setImage(file);
              } else {
                setImage(null);
              }
          }}
            />
             <Button
              onClick={(event) => {
                event.preventDefault();
                fileInputRef.current.click();
              }}
              bg='#9AC9FB' 
              m='20px'
              color='white'
              w='150px'
              >
              Agregar Imagen
            </Button>
            <Textarea isInvalid={errors} value={text} onChange={(e)=> setText(e.target.value)} onBlur={handleBlur}/>
            <ErrorText children={errors}/>
            <EditBtn isSubmitting={isSubmiting} isValid={isValid}/>
          </form> 
       </Box>
    </>
  )
}

export default Slides
