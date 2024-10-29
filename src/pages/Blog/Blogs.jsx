import React from 'react'
import './Blogs.css'

export const Blogs = () => {
    const bloginfo=[
        {
            image:'https://preview.colorlib.com/theme/oakberry/images/image_1.jpg.webp',
            role:'admin',
            date:'Dec. 01, 2020',
            comments:{no:3,heading:'New home sales upicked up in december',content:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'}
        },
        {
            
            image:'https://preview.colorlib.com/theme/oakberry/images/image_2.jpg.webp',
            role:'admin',
            date:'Dec. 01, 2020',
            comments:{no:3,heading:'New home sales upicked up in december',content:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'}
        },
        {
            
            image:'https://preview.colorlib.com/theme/oakberry/images/image_3.jpg.webp',
            role:'admin',
            date:'Dec. 01, 2020',
            comments:{no:3,heading:'New home sales upicked up in december',content:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'}
        },
        {
            
            image:'https://preview.colorlib.com/theme/oakberry/images/image_4.jpg.webp',
            role:'admin',
            date:'Dec. 01, 2020',
            comments:{no:3,heading:'New home sales upicked up in december',content:'A small river named Duden flows by their place and supplies it with the necessary regelialia.'}
        }
    ]
  return (
    <div className='Blogs'>
       <p style={{textTransform:'uppercase',color:'#5EA51D',fontSize:'14px'}}>our Blog</p>
       <h1 style={{marginBottom:'4rem', fontSize:'3rem',fontWeight:'bold'}}>Recent Blog</h1>
       <div className="blogg_containerr">
           {
            bloginfo.map((val,index)=>(
                <div className="blog_card" key={index}>
                     <div className="blog_img">
                          <img src={val.image} alt="blog_image" />
                     </div>
                     <div className="blog_details">
                        <div className="blog_info">
                            <span >{val.role}</span>
                            <span>{val.date}</span>
                            <span style={{color:'#5EA51D'}}>{val.comments.no} COMMENT</span>
                        </div>
                        <p className="blog_title">{val.comments.heading}</p>
                        <div className="blog_comment">{val.comments.content}</div>
                     </div>
            </div>
            ))
           }
       </div>
    </div>
  )
}
