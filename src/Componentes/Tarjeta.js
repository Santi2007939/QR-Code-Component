import '../Hojas-de-estilos/tarjeta.css'

export default function Tarjeta(props) {
    return (
        <div className="tarjeta">
            <img src={props.qr} alt='Imagen de codigo Qr' className='tarjeta__imagen'/>
            <h3 className="tarjeta__title">
                Improve your front-end skills by building projects
            </h3>
            <p className="tarjeta__parrafo">
                Scan the QR code to visit Frontend Mentor and take your coding skills to the next level.
            </p>
        </div>
    );
}

