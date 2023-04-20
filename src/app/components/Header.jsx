import Link from "next/link";

const Header = () => {
    return (
        <header className='headerPermanente'>
            <lu>
                <li>
                    <Link href={'/'}>Home</Link>
                </li>
                <li>
                    <Link href={'/statesAndProps'}>State and Props</Link>
                </li>
                <li>
                    <Link href={'/cronometro'}>Cronometro</Link>
                </li>
                <li>
                    <Link href={'/creadorDeComponentes'}>Creador de Componentes</Link>
                </li>
            </lu>
        </header>
    );
}

export default Header;