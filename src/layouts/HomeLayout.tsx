import Header from "../components/react-components/Header";
type HomeLayoutProps = {
  children?: React.ReactNode;
};
const HomeLayout = ({ children }: HomeLayoutProps) =>{
    return(
        <>
        <Header/>
        <main>
            {children}
        </main>
        </>
    )
}
export default HomeLayout;