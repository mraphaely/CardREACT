import './Container.css'

const Container = ({ text, cor, icons }) => {
    return (
        <main className="container">

            <div style={backgroundColor:{cor}}>{icons}{text}</div>
        </main >
    )
}

export default Container;