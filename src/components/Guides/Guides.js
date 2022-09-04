import "./Guides.css"
import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { Link } from "react-router-dom";


export const Guias = () =>{

    const itemData = [
        {
          img: 'https://xadmin.s3.us-east-2.amazonaws.com/6/news/17691/image/original/4e6a2101c3b185416346f84aad523791.jpg',
          
          author: 'Academias PETRO',
        },
        {
          img: 'https://www.provalore.com.br/wp-content/uploads/2018/07/projetos.png',
          title: 'Books',
          author: 'Projetos',
        },
        {
          img: 'https://faculdadecerquilho.com.br/wp-content/uploads/sites/18/2019/09/duvidas_frequentes.png',
          title: 'Sink',
          author: 'Forum de Dúvidas',
        },
        {
          img: 'https://f.hubspotusercontent40.net/hubfs/6064046/como-fazer-anotacoes.jpg',
          title: 'Kitchen',
          author: 'Anotações',
        },
        {
          img: 'https://mapa-da-obra-producao.s3.amazonaws.com/wp-content/uploads/2019/10/shutterstock_1110036392.png',
          title: 'Blinds',
          author: 'Sustentabilidade',
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRM0AVKE_pxK7GuSTj-IWjprO_c4tAmNgRyxx7l1H1-DVAe2XlkL48Cw8O7yJfbHHA4vK0&usqp=CAU',
          title: 'Chairs',
          author: 'Desenvolvimento',
        },       
        {
          img: 'https://s2.glbimg.com/4kGB5GL7irRBwMX-GiqUCoVmxF4=/e.glbimg.com/og/ed/f/original/2018/09/04/startup.jpg',
          title: 'Doors',
          author: 'Novas idéias',
        },
        {
          img:'https://infranewstelecom.com.br/wp-content/uploads/2018/09/67-noticias-infra-news-telecom-intelige%CC%82ncia-artificial.jpg',
          title: 'Inteligência Artificial',
          author: 'Inteligência Artificial',
        },
        {
          img: 'https://www.clipescola.com/wp-content/uploads/2017/05/porque-os-estudantes-precisam-de-tecnologia-na-sala-de-aula.png',
          title: 'Storage',
          author: 'Educação',
        }           
      ];


    return(<>
       
        <div className="guias">
        <h1> Olá, Marina.<p>O que iremos fazer hoje?</p></h1>
       
        </div>
        <br/>
        <br/>
        <br/>
        <Box sx={{ width: 700, height: 550, overflowY: 'scroll', color:"secondary" }}>
      <ImageList variant="masonry" cols={4} gap={8}>
        {itemData.map((item) => (
          <ImageListItem key={item.img}>
            <img
              src={`${item.img}?w=248&fit=crop&auto=format`}
              srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
              alt={item.title}
              loading="lazy"
            />
            <ImageListItemBar position="below" title={item.author} />
          </ImageListItem>
        ))}
      </ImageList>
    </Box>  

    <Link to={"/"}><button className="btn2">Voltar</button></Link>
        </>
    )
}