import Link from 'next/link';
import { useRouter } from 'next/router'

const name = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { router } = useRouter();

    return (
        <div>
            <h2>Hello!! {router.name}</h2>
            <Link href="/">Move to `/`</Link>
        </div>
    );
};

export default name;



