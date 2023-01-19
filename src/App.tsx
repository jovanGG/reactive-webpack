const App = () => {

    const list = [1, 2, 3, 4, 5];
    
    const item = list.find(item => item === 3)

    return(
        <h1>Hello from ${item}!</h1>
    )
}

export default App;