import React from 'react'
import "./ArtCard.css";

export default function ArtCard(props) {
    
  const { artwork } = props;
  /* 
    image:
    data.records[index].primaryimageurl

    id:
    data.records[index].id
    */

  return (
    <section className="artcard" key={artwork.id}>
        <img src={artwork.primaryimageurl} alt="artwork" />
    </section>
  )
}
