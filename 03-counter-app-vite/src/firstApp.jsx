

// const newMessage= {
//     name: 'Luz',
//     age: 27,
//     city: 'Corrientes'
// }   
import PropTypes from 'prop-types'
const newMessage= 'Luz';

export const FirstApp = ({title , subtitle,  name}) => {
    
    // if (!title){
    //     throw new Error('El title no existe')
    // }

    return ( //fragmento que reemplaza al div
    <> 
    {/* <h1>{JSON.stringify( newMessage)}</h1> */}
    <h1>{title}</h1>
    <p>{subtitle}</p>
    <p>{name}</p>
    </>
    )
}


FirstApp.propTypes ={
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.number

}

FirstApp.defaultProps={
    title: 'No hay titulo',
    subtitle: 'No hay subtítulo',
    name: 'Luz Rodriguez'
}