import NextImage from 'next/image'

const Image = ({ chosenOption, imagePath }) => {
    return (
        <div style={{width: '100%', height: '150px', position: 'relative'}}>
            {
                chosenOption !== null
                ? (
                    <NextImage
                        src={imagePath}
                        alt='Description'
                        layout="fill"
                        objectFit="cover"
                    />
                )
                : (
                    <img
                    style={{
                        width: '100%',
                        height: '150px',
                        objectFit: 'cover',
                    }}
                    src={imagePath}
                    alt='Description'
                />
                )
            }
        </div>
    )
}

export default Image