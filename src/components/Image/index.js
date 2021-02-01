
const Image = ({ chosenOption, imagePath }) => {
    return (
        <div style={{width: '100%', height: '150px', position: 'relative'}}>
            <img
                style={{
                    width: '100%',
                    height: '150px',
                    objectFit: 'fill',
                }}
                src={imagePath}
                alt='Question Image'
            />
        </div>
    )
}

export default Image