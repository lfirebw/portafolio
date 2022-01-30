import React, { useState } from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ProjectsStyles';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Lightbox from 'react-image-lightbox';
import { API } from '../../constants/constants'; //set projects info
import 'react-image-lightbox/style.css';

const defaultStateLightbox = {
  isOpen: false,
  srcImage: [],
  index:0
}

const Projects = () =>{
  const [dataProjects, setProjects] = useState([]);
  const [dataLightbox,setDataLightbox] = useState(defaultStateLightbox);

  const GetProjects = async ()=>{
    const response = await fetch(`${API.URL}/portfolio/projects`);
    const data = await response.json();
    if(data.code == 200){
      setProjects(data.data)
    }else{
      setProjects([])
    }
  }
  const showLightBox = (event,id)=>{
    event.preventDefault()
    fetch(`${API.URL}/portfolio/project/${id}/images`)
    .then(rs => rs.json())
    .then(response=>{
      if(response.code == 200){
        if(response.data != null && Object.keys(response.data).length > 0){
          let arr = response.data.map(el=>el.url)
          setDataLightbox(previousState => {
            return { ...previousState,srcImage: arr,index:0,isOpen:true }
          })
        }
      }
    })
  }
  const oncloseLightbox = ()=>{
    
    setDataLightbox(previousState => {
      return { ...previousState, isOpen:false }
    })
  }
  const onMoveLightbox = (isPrev = false)=>{
    let newIndex = isPrev ? (dataLightbox.index + dataLightbox.srcImage.length - 1) % dataLightbox.srcImage.length : (dataLightbox.index + 1) % dataLightbox.srcImage.length
    setDataLightbox(previousState => {
      return { ...previousState,index: newIndex }
    })
  }
  GetProjects();
  return (
    <Section nopadding id="projects">
      {
        dataLightbox.isOpen && dataLightbox.srcImage.length > 0 && (
          <Lightbox
            mainSrc={dataLightbox.srcImage[dataLightbox.index]}
            nextSrc={dataLightbox.srcImage[(dataLightbox.index + 1) % dataLightbox.srcImage.length]}
            prevSrc={dataLightbox.srcImage[(dataLightbox.index + dataLightbox.srcImage.length - 1) % dataLightbox.srcImage.length]}
            onCloseRequest={oncloseLightbox}
            onMoveNextRequest={()=>onMoveLightbox(false)}
            onMovePrevRequest={()=>onMoveLightbox(true)}
          ></Lightbox>
        )
      }
      <SectionDivider></SectionDivider>
      <SectionTitle main>Proyectos</SectionTitle>
      <SectionText>Cada trabajo realizado se realiza con toda profesionalidad y la dedicación requerida para lograr los objetivos esperados por los clientes.</SectionText>
      <GridContainer>
        {dataProjects.map((project)=>(
          <BlogCard key={project.id}>
            <Img onClick={(e)=>showLightBox(e,project.id)} src={project.image}></Img>
            <TitleContent>
              <HeaderThree title={project.title}>{project.title}</HeaderThree>
              <Hr></Hr>
            </TitleContent>
            <CardInfo>{project.description}</CardInfo>
            <div>
              <TitleContent>
                Stack
              </TitleContent>
              <TagList>
                {
                  project.tags.split(",").map((tag,i) =>(
                    <Tag key={i}>
                      {tag}
                    </Tag>
                  ))
                }
              </TagList>
            </div>
            <UtilityList>
              {project.visit != null && <ExternalLinks href={project.visit}>Preview</ExternalLinks>}
              {project.source != null && <ExternalLinks href={project.source}>Source</ExternalLinks>}
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
      
    </Section>
  ); 
}

export default Projects;