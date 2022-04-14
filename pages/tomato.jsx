import Link from 'next/link';

const Tomato = () => {
    return (
        <div>
            <h2>Lint to `main` Page</h2>
            <Link href="/">
                <a>Move to `/</a>
            </Link>
        </div>
    );
};

export default Tomato;