import Image from 'next/image';
import styles from '../../styles/Imagen.module.css';


const Imagen = () => {
    return (
        <div className={styles.container}>
            <Image className={styles.imagen} src='/bunny.jpg' alt="Imagen" width={600} height={400} />
        </div>
    );
};

export default Imagen;
