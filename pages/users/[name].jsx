import fetch from 'isomorphic-unfetch';

const name = ({ user }) => {
    console.log(user.name);
    const username = user && user.name;
    console.log(username);
    return <div>{username}</div>
};

name.getInitialProps = async ({ query }) => {
    const { name } = query;
    try {
        const res = await fetch(`https://api.github.com/users/${name}`);
        if (res.status === 200) {
            console.log("ddd");

            const user = await res.json();
            console.log(`user ${user.name}`)
            return { user };
        }
        return { props: {} };
    } catch (e) {
        console.log(e);
        return {};
    }

}
export default name;