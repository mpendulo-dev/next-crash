const Footer = () => {
    const date = new Date();
    let currentYear = date.getFullYear();
    return (
        <footer>
            <span>Copyright Ninja Demo {currentYear}</span>
        </footer>
    )
}

export default Footer
