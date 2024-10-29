import React from 'react'
import './sample_image.css'

export const Image_sample = () => {
    const images=[
        'https://preview.colorlib.com/theme/oakberry/images/gallery-1.jpg.webp',
        'https://preview.colorlib.com/theme/oakberry/images/gallery-2.jpg.webp',
        'https://preview.colorlib.com/theme/oakberry/images/gallery-3.jpg.webp',
        'https://preview.colorlib.com/theme/oakberry/images/gallery-4.jpg.webp',
        'https://preview.colorlib.com/theme/oakberry/images/gallery-5.jpg.webp',
        'https://preview.colorlib.com/theme/oakberry/images/gallery-6.jpg.webp'
    ]
  return (
    <div className='sample_images'>
    {
        images.map((image,index)=>( 
            <div className="sample_img" key={index}>
                <img src={image} alt="sample_img" />
            </div>
        ))
    }
</div>
  )
}
