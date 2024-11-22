import Rect from 'react'

const TitleSection = ({title,className,...props}) =>{
    return (
        <h1 className={`${className} text-foreground text-4xl w-full md:text-5xl text-left my-4 md:my-8`} {...props}>
            {title}
        </h1>
    )
}

export  default TitleSection