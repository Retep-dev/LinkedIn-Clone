import React from 'react';
import './Widgets.css';
import InfoIcon from '@mui/icons-material/Info';
import FiberManualRecordIcon from '@mui/icons-material/FiberManualRecord';

function Widgets() {
    const newsArticle = (heading, subtitle) => (
        <div className='widgets__article'>
            <div className='widget__articleLeft'>
                <FiberManualRecordIcon />
            </div>
            <div className='widget__articleRight'>
                <h4>{heading}</h4>
                <p>{subtitle}</p>
            </div>
        </div>
        
    );
  return (
    <div className='widgets'>
        <div className='widgets__header'>
            <h2>LinkedIn News</h2>
            <InfoIcon />
        </div>

        {newsArticle("Tusedays are for Shawarma", "Zibah News, we had 200 buyers - 2000 readers")}
        {newsArticle("Fotress Camp meeting holds next week", "SCC News - 4000 readers")}
        
        {newsArticle("Vigil holds this friday", "AKURE News - 2000 readers")}
        {newsArticle("Fotress Camp meeting holds for SEC Sch", "SCC News - 5000 readers")}

        
        {newsArticle("Tusedays will be blissful says Zibah", "Zibah News, we had 200 buyers - 2000 readers")}
        {newsArticle("I just made my first Billion, says Afolabi Peter", "Forbes  News - 1million readers")}
    </div>
  )
}

export default Widgets
