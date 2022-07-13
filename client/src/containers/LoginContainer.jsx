
const LoginContainer = () => {
    const login=()=>{
        console.log('hola');
    }
    return (
        <>
            <button onClick={login()}>Administrador</button>
            <button onClick={login()} >Usuario</button>
        </>
     );
}

export default LoginContainer;