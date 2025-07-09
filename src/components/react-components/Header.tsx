import Logo from "./Logo";
const Header = () => {
    return (
        <>
        <div>
            <div>
                <Logo 
                navigation="/"
                logoSize={80}
                fontSize={16}
                fontFamily={'"Roboto", sans - serif'}
                textColor="white"
                />
                </div>
        </div>
        </>
    )
}
export default Header;